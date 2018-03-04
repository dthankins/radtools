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
} // end buttonCheck


function hide(divSent){
  // window.alert()
  var element = document.getElementById(divSent);
  element.classList.add("hideDIV");       //toggle class hideDIV
} // end hide


function unHide(divSent){
  var element = document.getElementById(divSent);
  element.classList.remove("hideDIV");        //toggle class hideDIV
} // end unHide


function updateZone(zone) {
  if(zone==="Transitional Zone"){
    hide("PZ");
    unHide("TZ");
  } else if (zone==="Peripheral Zone"){
      hide("TZ");
      unHide("PZ");
  }

} // end updateZone

function updateADC(valueADC) {
  if(valueADC==="Yes"){
    hide("negADC");
    unHide("posADC");
  } else if (valueADC==="No"){
      hide("posADC");
      unHide("negADC");
  }

} // end updateADC


function updateDWI(valueDWI) {
  if(valueDWI==="Yes"){
    hide("isoDWI");
    unHide("hyperDWI");
  } else if (valueDWI==="No"){
      hide("hyperDWI");
      unHide("isoDWI");
  }

} // end updateDWI

function updatePZ_5(featureSelected){
  var totalSelected = "";
  var numValues = document.getElementsByName("PZ_5_features").length;

  var size = document.getElementsByName("PZ_5_features")[0]; //  true or false
  var contact = document.getElementsByName("PZ_5_features")[1]; 
  var breakthrough = document.getElementsByName("PZ_5_features")[2]; 
  var bone = document.getElementsByName("PZ_5_features")[3]; 
  var none = document.getElementsByName("PZ_5_features")[4]; 

  if(none.value===featureSelected && none.checked){
      size.checked=false;
      contact.checked=false;
      breakthrough.checked=false;
      bone.checked=false;

      hide("pirads5");
      unHide("pirads4");
  } else {
      none.checked=false;
      hide("pirads4");
      unHide("pirads5");
  } 
} // end updatePZ_5 


function updateBPH(BPH){
  if(BPH==="BPH Nodule"){
    hide("resultSmudged");
    unHide("resultBPH");
  } else if (BPH==="Smudged Charcoal"){
      hide("resultBPH");
      unHide("resultSmudged");
  }
} // updateBPH



