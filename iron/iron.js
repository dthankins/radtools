function buttonCheck(btnName, btnValue) {

  numValues = document.getElementsByName(btnName).length;
  var valueArray = new Array(numValues);

  for(var i=0; i < numValues; i++){
    valueArray[i]  = document.getElementsByName(btnName)[i].value;
  }

  for (var c=0; c<numValues; c++){
    if(valueArray[c] === btnValue){
      document.getElementById(btnName).value = parseFloat(valueArray[c]); // This assigned the Id that has same "name" the value
      
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


function calcAverage(){
  ROI1=parseInt(document.getElementById("ROI1").value);
  ROI2=parseInt(document.getElementById("ROI2").value);
  ROI3=parseInt(document.getElementById("ROI3").value);
  ROIaverage = parseInt(((ROI1+ROI2+ROI3)/3).toFixed());
  if(ROIaverage>0){
    document.getElementById("ROIaverage").value = ROIaverage;
  } else {
    document.getElementById("ROIaverage").value = "";
  }


} // end calcAverage

function calcIron(){
  R2=document.getElementById("ROIaverage").value;
  R23T=2*R2-11;

  magnetStrength=parseFloat(document.getElementById("magnet").value);

  if(magnetStrength==1.5){
    iron = parseFloat((0.0254*R2+ 0.202).toFixed(1));
  } else { // must be 3T
    iron = parseFloat((0.0254*R23T+ 0.202).toFixed(1));
    
  }


  

  if(R2>0){
    document.getElementById("iron").value = iron;
    document.getElementById("iron2").value = iron;
  } else {
    document.getElementById("iron").value = "";
    document.getElementById("iron2").value = "";
  }


}  // end calcIron

function setROI23(){  // sets ROI2 and 3 equal to ROI1 to save scrolling energy
  ROI1=document.getElementById("ROI1").value
  document.getElementById("ROI2").value = ROI1;
  document.getElementById("ROI3").value = ROI1;
}  // end setROI23
            
  




function calcFat(){
  //ROIstring=document.getElementById("sampleNumber").value;
  //ROIvalue=parseFloat(ROIstring)
  magnetStrength=parseFloat(document.getElementById("magnet").value);

  IP=parseFloat(document.getElementById("IP").value);
  OP=parseFloat(document.getElementById("OP").value);
  
  if(IP>0 && OP>0){
    result = parseFloat(100*(IP-OP)/(2*IP)).toFixed(0);
    document.getElementById("calcResult").value = result;
  } else {
    document.getElementById("calcResult").value = "";
  }
  


}  // end calcFat


