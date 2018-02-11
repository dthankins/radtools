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

  
  //test to see it is working
 // console.log(firebase);


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
	var js_order_IV_contrast = document.getElementById("order-IV-contrast").value;
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
	var js_suggested_otherContrast_details = document.getElementsByName("suggestedOther")[0].value;

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
	"suggested_otherContrast_details2": js_suggested_otherContrast_details2,
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
$(window).load(function () {

// Find the HTML element with the id recommendationForm, and when the submit
// event is triggered on that element, call submitProtocolQuestion.
$("#protocolForm").submit(submitNewProtocol);

});



// ref.push(data);  data is my variable
// window.onload(); of <body onload="whateverJSfunction()">   might be the function for JS















// New Stuff Above This Line

function hideToggle(hiddenDIV){
	var element = document.getElementById(hiddenDIV);
	element.classList.add("hideDIV");				//toggle class hideDIV
}


function unHide(hiddenDIV){
	var element = document.getElementById(hiddenDIV);
	element.classList.remove("hideDIV");				//toggle class hideDIV
}


function unHideMulti(hiddenDIV){
	var element = document.getElementById(hiddenDIV);
	element.classList.toggle("hideDIV");				//toggle class hideDIV
}


function buttonCheck(btnName, btnValue) {

	numValues = document.getElementsByName(btnName).length;
	var valueArray = new Array(numValues);

	for(var i=0; i < numValues; i++){
		valueArray[i]  = document.getElementsByName(btnName)[i].value;
	}

	for (var c=0; c<numValues; c++){
		if(valueArray[c] === btnValue){
			document.getElementById(btnName).value = valueArray[c];	// This assigned the Id that has same "name" the value
			
			for (count=0; count<numValues; count++){
				if(count === c){
					document.getElementsByName(btnName)[c].className = "buttonPressed";

				} else {
					document.getElementsByName(btnName)[count].className = "button";	// changes class to CSS button (default or not pressed)
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
			valueTotal +=  document.getElementsByName(btnName)[t].value + "   ";			
		}
	}
	
	document.getElementById(btnName).value = valueTotal;
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
	if(agePatient<18){
		unHide(hiddenWtId);
	}
} 

function doctor(doc){

	var url = "https://www.baptistfirst.org/find-a-doctor/provider-search-results?ProviderText="+ doc + "&&LocationDescendants=true";
	window.open(url, "_blank", "scrollbars=yes,resizable=yes,top=300,left=800,width=400,height=600");	
}

function sameCheck(hiddenDIV){
	var element = document.getElementById(hiddenDIV);
	element.classList.toggle("hideDIV");		
	
}

function setSuggestedToOrdered(){
	document.getElementsByName("suggested-modality")[0].value= document.getElementsByName("order-modality")[0].value
	document.getElementsByName("suggested-IV-contrast")[0].value= document.getElementsByName("ordered-IV-contrast")[0].value
	document.getElementsByName("suggested-bodyPart")[0].value= document.getElementsByName("order-bodyPart")[0].value
	document.getElementsByName("suggested-oral")[0].value= document.getElementsByName("order-oral")[0].value

/*
	if (document.getElementsByName("order-modality")[0].className==="buttonPushed"){
		document.getElementsByName("suggested-modality")[0].className="buttonPushed";
	}

	if (document.getElementsByName("order-modality")[1].className==="buttonPushed"){
		document.getElementsByName("suggested-modality")[1].className="buttonPushed";
	}

	if (document.getElementsByName("ordered-IV-contrast")[0].className==="buttonPushed"){
		document.getElementsByName("suggested-IV-contrast")[0].className="buttonPushed";
	}

	if (document.getElementsByName("order-bodyPart")[0].className==="buttonPushed"){
		document.getElementsByName("suggested-bodyPart")[0].className="buttonPushed";
	}

	if (document.getElementsByName("order-oral")[0].className==="buttonPushed"){
		document.getElementsByName("suggested-oral")[0].className="buttonPushed";
	}
*/




// need something to set all the same ones to class=buttonPushed
}



function updateContrastInfo(modality){	// take the ordered exam and give choices for indication and contrast type
	
	if(modality==="CT"){
		document.getElementsByName("IVcontrastType")[0].value = "Omnipaque350";
		document.getElementsByName("contrastVolume")[0].value = 100;
	} else { // it must be an MRI
		document.getElementsByName("IVcontrastType")[0].value ="MultiHance";
		document.getElementsByName("contrastVolume")[0].value = 10;
	}
}

function checkOrderOtherDetails(){
	// var divToUnHide ='hiddenSuggestedOther'; unHideMulti(divToUnHide)
	// <input type="text" name="orderOther" size="100" onchange="getElementsByName(suggestedOther)[0].value=this.value">

	orderOtherDetails = document.getElementsByName("orderOther")[0].value;
	console.log(orderOtherDetails);
	 if(orderOtherDetails!=null){
	 	document.getElementsByName("suggestedOther")[0].value = orderOtherDetails;
	 }
	

}
