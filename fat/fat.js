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


