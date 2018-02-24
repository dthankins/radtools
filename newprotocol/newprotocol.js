function updateContrastTypeAndVolume(orderedOrSuggested){
  if(orderedOrSuggested==="ordered"){
    // based off ordered
    if (document.getElementsByName("ordered-IV-contrast")[1].className==="buttonPressed"){ // [1] is with
        if (document.getElementById("order-modality").value==="CT"){
            document.getElementsByName("IVcontrastType")[0].value = "Omnipaque 350";
            document.getElementsByName("contrastVolume")[0].value = 100;
          } else { // it must be an MRI
              document.getElementsByName("IVcontrastType")[0].value ="MultiHance";
              document.getElementsByName("contrastVolume")[0].value = 10;
            }
        } else {
            document.getElementsByName("IVcontrastType")[0].value ="None";
            document.getElementsByName("contrastVolume")[0].value = "";
          }

    } else { // must be suggested
         if (document.getElementsByName("suggested-IV-contrast")[1].className==="buttonPressed"){ // [1] is with
            if (document.getElementById("suggested-modality").value==="CT"){
                document.getElementsByName("IVcontrastType")[0].value = "Omnipaque 350";
                document.getElementsByName("contrastVolume")[0].value = 100;
              } else { // it must be an MRI
                  document.getElementsByName("IVcontrastType")[0].value ="MultiHance";
                  document.getElementsByName("contrastVolume")[0].value = 10;
                }
            } else {
                document.getElementsByName("IVcontrastType")[0].value ="None";
                document.getElementsByName("contrastVolume")[0].value = "";
              }     

      }

}


function PreCheckGFR(){

  if (document.getElementsByName("ordered-IV-contrast")[1].className != "buttonPressed"){  //with is not buttonPressed so nonCon
    document.getElementsByName("eGFR")[0].checked=true; // nonCon now checked
    checkGFR("nonCon"); // calls functions to uncheck the others
  } else if(document.getElementsByName("age")[0].value<60){
      document.getElementsByName("eGFR")[2].checked=true; //na set to checked
      checkGFR("na"); // calls functions to uncheck the others
    }

  if(document.getElementsByName("age")[0].value>=60 && document.getElementsByName("ordered-IV-contrast")[1].className === "buttonPressed"){
    // old and contrast given so uncheck all
    document.getElementsByName("eGFR")[0].checked=false;
    document.getElementsByName("eGFR")[1].checked=false;
    document.getElementsByName("eGFR")[2].checked=false;
    checkGFR("");
  } 
  
}


function checkGFR(thisClick){
  var nonCon = document.getElementsByName("eGFR")[0]; // nonCon true of false
  var sixty = document.getElementsByName("eGFR")[1]; // sixty true of false
  var na = document.getElementsByName("eGFR")[2]; // na true of false


  if(nonCon.value===thisClick && nonCon.checked){
    sixty.checked=false;
    na.checked=false;
    hideToggle('showOlderGFR');
  }

  if (sixty.value===thisClick && sixty.checked){
      nonCon.checked=false;
      na.checked=false;
      hideToggle('showOlderGFR');
  } 
  
  if (na.value===thisClick && na.checked){
      sixty.checked=false;
      nonCon.checked=false;
      hideToggle('showOlderGFR');
  } 
  
  if(sixty.checked==false && nonCon.checked==false && na.checked==false) { // all were unchecked
      unHide('showOlderGFR');
  } 
}


function buildOrder(){
  var oral = " ";
  var modality = document.getElementById("order-modality").value;
  var IVcontrast = document.getElementById("ordered-IV-contrast").value;
// I think the orderOther is not obselete.  When I removed from the HTML it quit working!
  var orderOther = document.getElementsByName("orderOther")[0].value; 
  var bodyPart = document.getElementsByName("order-bodyPart")[0].value;
  var oralNeeded = document.getElementById("order-oral").value;

  IVcontrast+="IV contrast. "

  if(modality==="CT"){
    if (oralNeeded==="Yes"){
      oral = "Oral contrast.";
    } else if (oralNeeded==="No"){
      oral = "No oral.";
    }
  }

  var angio = document.getElementsByName("ordered-IV-contrast")[0].className;   // angio
  var without = document.getElementsByName("ordered-IV-contrast")[2].className; // without
  var withIV = document.getElementsByName("ordered-IV-contrast")[1].className; // with


  if(modality === "CT" && angio === "buttonPressed" && without === "buttonPressed" && withIV != "buttonPressed"){
      window.alert("That order looks funny!  Please check again!");
      document.getElementById("totalOrder").classList.add("red");
  } else document.getElementById("totalOrder").classList.remove("red");


  var orderText = modality + " " + bodyPart + " " + IVcontrast + orderOther + oral;

  document.getElementById("totalOrder").value = orderText;

  updateContrastTypeAndVolume("ordered");
}


function buildSuggested(){
  var oral = " ";
  var modality = document.getElementById("suggested-modality").value;
  var IVcontrast = document.getElementById("suggested-IV-contrast").value;
// I think the orderOther is not obselete
  var orderOther = document.getElementsByName("orderOther")[0].value; 
  var bodyPart = document.getElementsByName("suggested-bodyPart")[0].value;
  var oralNeeded = document.getElementById("suggested-oral").value;

  IVcontrast+="IV contrast. "

  if(modality==="CT"){
    if (oralNeeded==="Yes"){
      oral = "Oral contrast.";
    } else if (oralNeeded==="No"){
      oral = "No oral.";
    }
  }

  var angio = document.getElementsByName("suggested-IV-contrast")[0].className;   // angio
  var without = document.getElementsByName("suggested-IV-contrast")[2].className; // without
  var withIV = document.getElementsByName("suggested-IV-contrast")[1].className; // with


  if(modality === "CT" && angio === "buttonPressed" && without === "buttonPressed" && withIV != "buttonPressed"){
      window.alert("That order looks funny!  Please check again!");
      document.getElementById("totalSuggested").classList.add("red");
  } else document.getElementById("totalSuggested").classList.remove("red");


  var orderText = modality + " " + bodyPart + " " + IVcontrast + orderOther + oral;

  document.getElementById("totalSuggested").value = orderText;

  updateContrastTypeAndVolume("suggested");
}



function updateHx(){
  var totalHistory ="";
  var mvcPressed = document.getElementsByName("MVC")[0].className; // button or buttonPressed class

  var restrained = document.getElementById("restrained").value;
  var driver = document.getElementById("driver").value;
  var airbag = document.getElementById("airbag").value;

  var painPressed = document.getElementsByName("pain")[0].className;
  var painDetails = document.getElementsByName("painDetails")[0].value;
          
  var injuryPressed = document.getElementsByName("injury")[0].className;
  var surgeryPressed = document.getElementsByName("surgery")[0].className;
  var cancerPressed = document.getElementsByName("cancer")[0].className;

  var theNosDetails = "";
  theNosDetails += document.getElementsByName("theNosDetails")[0].value;

  var episode = document.getElementById("episode").value;

  if(mvcPressed==="buttonPressed"){
    if(restrained==="" || driver ==="" || airbag===""){
      window.alert("If known, please choose one of each of the MVC option buttons!");
      // document.getElementsByName("hx")[0].classList.add("red");
      
    } else {
      totalHistory="MVC, " +  restrained + " " + driver + " with " + airbag + " deployment.";
      // document.getElementsByName("hx")[0].classList.remove("red");
    }
  }

  if(painPressed==="buttonPressed"){
    totalHistory += " Complains of pain. " + painDetails + ". ";
  }

  if(injuryPressed==="buttonPressed"){
    totalHistory += " Injury. ";
  } else totalHistory += " No injury. ";

  if(surgeryPressed==="buttonPressed"){
    totalHistory += " Surgery. ";
  } else totalHistory += " No previous surgery in the region of interest. ";

  if(cancerPressed==="buttonPressed"){
    totalHistory += " Cancer. ";
  } else totalHistory += " No known history of cancer. ";

  totalHistory += theNosDetails + " " + episode + " study.";


  document.getElementsByName("hx")[0].value = totalHistory;
}




function buttonToggle(btnName){
  var element = document.getElementsByName(btnName)[0];
  element.classList.toggle("buttonPressed");
  element.classList.toggle("button");
}

function updateTechList(){
  var modality =document.getElementById("techModality").value;
  var locaction = document.getElementById("location").value
  
  // I fogot how inner html works.  I want it to write "EMIC CT Tech Work List" 

}


function confirmMakeNewProtocol() {
  if (confirm('Prepare New Protocol?')) {
    window.open('http://www.radtools.us/newprotocol/newprotocol3.html');
  }
}

//my scroll lock function does not work
function calculate_top() {
    //var y = 0;    
    element=document.getElementById("scrollLock");

    console.log(document.getElementsByTagName("body")[0].scrollTop);
    console.log(document.getElementById("scrollLock").scrollTop);

    var y=element.scrollTop;
    //you can see y values while you scrolling
    console.log(" y = " + y);
    /*
    if( y > 340){//old style
        document.getElementById("scrollLock").style.position='fixed';
        document.getElementById("scrollLock").style.top=0+'px';
    }else{
        document.getElementById("scrollLock").style.position='relative';
    }
    */
}




// I never call this right not, i just wanted it not to run during my testing.
// function runFirebase(){




// Initialize Firebase
var config = {
    apiKey: "AIzaSyCpaVltd-dUeV9RP4SgV7rX-5VKRstRcnI",
    authDomain: "newprotocolproject.firebaseapp.com",
    databaseURL: "https://newprotocolproject.firebaseio.com",
    projectId: "newprotocolproject",
    storageBucket: "",
    messagingSenderId: "467156917316"
  };
  firebase.initializeApp(config);

  
  //test to see it is working  it never acts like it is working   console.log(firebase);



// Reference to the protocols object in your Firebase database
var newProtocols = firebase.database().ref("newProtocols");



// Save a new protocol to the database, using the input in the form
var submitNewProtocol = function () {


  

    // Get input values from each of the form elements

  var js_lastname = document.getElementsByName("lastname")[0].value;
  var js_firstname = document.getElementsByName("firstname")[0].value;
  var js_mrn = document.getElementsByName("mrn")[0].value;
  var js_DOB = document.getElementsByName("DOB")[0].value;
  var js_age = document.getElementsByName("age")[0].value;
  var js_wt = document.getElementsByName("wt")[0].value;

  var js_gender = document.getElementById("genderSelect").value;
  var js_ucg_result = document.getElementById("ucg-result").value;
  var js_reason_not_preg = document.getElementsByName("reason-not-preg")[0].value;

  var js_prev_contrast = document.getElementById("previosIVcontrast").value;
  var js_contrast_allergy = document.getElementById("contrast-allergy").value;
  var js_contrast_allergy_symptoms = document.getElementsByName("allergySymptoms")[0].value;
  var js_allergy_modality = document.getElementsByName("allergyModality")[0].value;

  var js_refering_doc = document.getElementsByName("refering-doc")[0].value;
  var js_service = document.getElementsByName("service")[0].value;

  var js_order_modality = document.getElementById("order-modality").value;
  var js_order_bodyPart = document.getElementsByName("order-bodyPart")[0].value;
  var js_order_IV_contrast = document.getElementById("ordered-IV-contrast").value;
  var js_order_oral = document.getElementById("order-oral").value;
  var js_order_otherContrast_details = document.getElementsByName("orderOther")[0].value;

  var js_hx = document.getElementsByName("hx")[0].value;
  var js_prior_imaging = document.getElementsByName("prior-imaging")[0].value;

  var js_eGFR = document.getElementsByName("eGFR")[0].checked;
  var js_DateGFR = document.getElementsByName("DateGFR")[0].value;
  var js_currentGFR = document.getElementsByName("currentGFR")[0].value;
  var js_OlderGFR = document.getElementsByName("OlderGFR")[0].value;
  var js_DateOlderGFR = document.getElementsByName("DateOlderGFR")[0].value;

  var js_same_result = document.getElementsByName("same-result")[0].checked;
  var js_suggested_modality = document.getElementById("suggested-modality").value;
  var js_suggested_bodyPart = document.getElementsByName("suggested-bodyPart")[0].value;
  var js_suggested_IV_contrast = document.getElementById("suggested-IV-contrast").value;
  var js_suggested_oral = document.getElementById("suggested-oral").value;
  var js_suggestedOther = document.getElementsByName("suggestedOther")[0].value;

  var js_IVcontrastType = document.getElementsByName("IVcontrastType")[0].value;
  var js_contrastVolume = document.getElementsByName("contrastVolume")[0].value;
  var js_comments = document.getElementsByName("comments")[0].value;

// Push a new protocol to the database using those values
    newProtocols.push({

    "lastname": js_lastname, 
    "firstname": js_firstname, 
    "mrn": js_mrn,
    "DOB": js_DOB,
    "age": js_age,
    "wt": js_wt,
    "gender": js_gender,
    "ucg_result": js_ucg_result,
    "reason_not_preg": js_reason_not_preg,
    "prev_contrast": js_prev_contrast,
    "contrast_allergy": js_contrast_allergy,
    "contrast_allergy_symptoms": js_contrast_allergy_symptoms,
    "allergy_modality": js_allergy_modality,
    "hx": js_hx,
    "prior_imaging": js_prior_imaging,
    "refering_doc": js_refering_doc,
    "service": js_service,
    "order_modality": js_order_modality,
    "order_bodyPart": js_order_bodyPart,
    "order_IV_contrast": js_order_IV_contrast,
    "order_otherContrast_details": js_order_otherContrast_details,
    "order_oral": js_order_oral,
    "same_result": js_same_result,
    "suggested_modality": js_suggested_modality,
    "suggested_bodyPart": js_suggested_bodyPart,
    "suggested_IV_contrast": js_suggested_IV_contrast,
    "suggestedOther": js_suggestedOther,
    "suggested_oral": js_suggested_oral,
    "eGFR_check": js_eGFR,
    "DateGFR": js_DateGFR,
    "currentGFR": js_currentGFR,
    "OlderGFR": js_OlderGFR,
    "DateOlderGFR": js_DateOlderGFR,
    "IVcontrastType": js_IVcontrastType,
    "contrastVolume": js_contrastVolume,
    "comments": js_comments

    });
  };

  // When the window is fully loaded, call this function.
  // Note: because we are attaching an event listener to a particular HTML element
  // in this function, we can't do that until the HTML element in question has
  // been loaded. Otherwise, we're attaching our listener to nothing, and no code
  // will run when the submit button is clicked.




// ref.push(data);  data is my variable
// window.onload(); of <body onload="whateverJSfunction()">   might be the function for JS
    



// I too the submit part from here below  and put it on the HTML
/*
  $(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitProtocolQuestion.
  $("#protocolForm").submit(submitNewProtocol);

  });

*/

// }







// New Stuff Above This Line

function hideToggle(hiddenDIV){
  var element = document.getElementById(hiddenDIV);
  element.classList.add("hideDIV");       //toggle class hideDIV
}


function unHide(hiddenDIV){
  var element = document.getElementById(hiddenDIV);
  element.classList.remove("hideDIV");        //toggle class hideDIV
}


function unHideMulti(hiddenDIV){
  var element = document.getElementById(hiddenDIV);
  element.classList.toggle("hideDIV");        //toggle class hideDIV
}


function buttonCheck(btnName, btnValue) {

  numValues = document.getElementsByName(btnName).length;
  var valueArray = new Array(numValues);

  for(var i=0; i < numValues; i++){
    valueArray[i]  = document.getElementsByName(btnName)[i].value;
  }

  for (var c=0; c<numValues; c++){
    if(valueArray[c] === btnValue){
      document.getElementById(btnName).value = valueArray[c]; // This assigned the Id that has same "name" the value
      
      for (count=0; count<numValues; count++){
        if(count === c){
          document.getElementsByName(btnName)[c].className = "buttonPressed";

        } else {
          document.getElementsByName(btnName)[count].className = "button";  // changes class to CSS button (default or not pressed)
        }
      }
    }
  }
}


function buttonCheckMulti(btnName, btnValue) {
  numValues = document.getElementsByName(btnName).length;
  var valueArray = new Array(numValues);
  var valueTotal="";

  for(var i=0; i < numValues; i++){
    valueArray[i]  = document.getElementsByName(btnName)[i].value;
  }

  for (var c=0; c<numValues; c++){
    if(valueArray[c] === btnValue){
      var element = document.getElementsByName(btnName)[c];
      element.classList.toggle("buttonPressed");
      element.classList.toggle("button");
    }
  }

  for (t=0; t<numValues; t++){  
    if(document.getElementsByName(btnName)[t].className === "buttonPressed"){
      valueTotal +=  document.getElementsByName(btnName)[t].value + " ";      
    }
  }
  
  document.getElementById(btnName).value = valueTotal;

 // updateContrastInfo();


}





function checkOral() {
  
  var oral = document.getElementsByName("order-bodyPart")[0].value; // "order-bodyPart"
  var modality = document.getElementById('order-modality').value
  var selectionToUnHide = "hiddenOrderedOral";

  if(modality==="CT" && (oral==="Chest, Abdomen and Pelvis" || oral==="Abdomen and Pelvis" || oral==="Abdomen")){
    unHide(selectionToUnHide);
    } else {
      hideToggle(selectionToUnHide); // perhaps I could name this better
    } 
}

function checkOralSuggested() {
  
  var oral = document.getElementsByName("suggested-bodyPart")[0].value; // "order-bodyPart"
  var modality = document.getElementById('suggested-modality').value
  var selectionToUnHide = "hiddenSuggestedOral";

  if(modality==="CT" && (oral==="Chest, Abdomen and Pelvis" || oral==="Abdomen and Pelvis" || oral==="Abdomen")){
    unHide(selectionToUnHide);
    } else {
      hideToggle(selectionToUnHide); // perhaps I could name this better
    } 
}


function ageCalc(dateOfBirth, hiddenWtId){

  var birthday = new Date(dateOfBirth);
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  agePatient = Math.abs(ageDate.getFullYear() - 1970);
  document.getElementsByName("age")[0].value = agePatient;
 
} 




function doctor(doc){
  window.open("https://www.baptistfirst.org/find-a-doctor/provider-search-results?ProviderText="+ doc + "&&LocationDescendants=true", "_blank", "scrollbars=yes,resizable=yes,top=300,left=800,width=400,height=600");
}





function sameCheck(hiddenDIV){
  var element = document.getElementById(hiddenDIV);
  element.classList.toggle("hideDIV");    
  
}

function setSuggestedToOrdered(){
  // need something to set all the same ones to class=buttonPushed
  var modality = document.getElementsByName("order-modality")[0].className;
  var angio = document.getElementsByName("ordered-IV-contrast")[0].className;
  var withIV = document.getElementsByName("ordered-IV-contrast")[1].className;
  var without = document.getElementsByName("ordered-IV-contrast")[2].className;
  var bodyPart = document.getElementsByName("order-bodyPart")[0].value;
  var oral = document.getElementsByName("order-oral")[0].className;
  // var otherDetails = document.getElementsByName("order_otherContrast_details")[0].value;

 // console.log(modality + " " + IVcontrast + " " + bodyPart + " " + oral);

  document.getElementsByName("suggested-modality")[0].className= modality;
  document.getElementsByName("suggested-IV-contrast")[0].className= angio;
  document.getElementsByName("suggested-IV-contrast")[1].className= withIV;
  document.getElementsByName("suggested-IV-contrast")[2].className= without;
  document.getElementsByName("suggested-bodyPart")[0].value= bodyPart;
  document.getElementsByName("suggested-oral")[0].className= oral;
 // document.getElementsByName("suggestedOther")[0].value= otherDetails;


  document.getElementById("suggested-modality").value = document.getElementById("order-modality").value;
  document.getElementById("suggested-IV-contrast").value = document.getElementById("ordered-IV-contrast").value;
  document.getElementById("suggested-oral").value = document.getElementById("order-oral").value;

// why does oral not populate here?
  checkOralSuggested();


 





}


function checkOrderOtherDetails(){
  // var divToUnHide ='hiddenSuggestedOther'; unHideMulti(divToUnHide)
  // <input type="text" name="orderOther" size="100" onchange="getElementsByName(suggestedOther)[0].value=this.value">

  orderOtherDetails = document.getElementsByName("orderOther")[0].value; // order_otherContrast_details
  //console.log(orderOtherDetails);
   if(orderOtherDetails!=="undefined"){
    document.getElementsByName("suggestedOther")[0].value = orderOtherDetails;
   }
}


function updateContrastInfo(){  // take the ordered exam and give choices for indication and contrast type

// Need to have it check the value of the suggested-IV-Contrast to see is with is pushed
  
  

  var OrderedModality = document.getElementById("order-modality").value;
  var SuggestedModality = document.getElementById("suggested-modality").value;

  if(typeof SuggestedModality !== "undefined"){
    // do based on suggested
    var modality=SuggestedModality;

  } else {
    // do based on ordered
    var modality=OrderedModality;

  }
  
  




  if(modality==="CT"){
    document.getElementsByName("IVcontrastType")[0].value = "Omnipaque 350";
    document.getElementsByName("contrastVolume")[0].value = 100;
  } else { // it must be an MRI
    document.getElementsByName("IVcontrastType")[0].value ="MultiHance";
    document.getElementsByName("contrastVolume")[0].value = 10;
  }






  var OrderedButtonClassName = document.getElementsByName("ordered-IV-contrast")[2].className; //without is [2]
  var SuggestedButtonClassName = document.getElementsByName("suggested-IV-contrast")[2].className;

  if(typeof SuggestedButtonClassName !== "undefined"){
    // do based on suggested
    checkContrastNone ("suggested-IV-contrast");
    // console.log("suggested was defined.");

  } else {
    // do based on ordered
    checkContrastNone ("ordered-IV-contrast");
    // console.log("suggested was NOT defined.");

  }

}



function checkContrastNone(nameOfSending){
  
  // I want to check if the "With" button is buttonPressed. If not, change contrast type and volume

  var withPressed = document.getElementsByName(nameOfSending)[1].className;     // [1] is the array position for "With"

  //console.log("checking contrast none function now");
  //console.log(withPressed);

  if (withPressed != "buttonPressed"){
    document.getElementsByName("IVcontrastType")[0].value ="None";
    document.getElementsByName("contrastVolume")[0].value = "";
  }
}
