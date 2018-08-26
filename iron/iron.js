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


function calcIronTypeROI(){
  // 1st get the values and length then calc avg
  
  ROIvaluesTyped= document.getElementsByName("ROIt");


  //alert(ROIvaluesTyped.length);

  numROIs=0;
  sumTyped=0;
  avgTyped=0;

  for (var i = 0; i < ROIvaluesTyped.length; i++) {

    

    ROIvalueInt=parseFloat(ROIvaluesTyped[i].value);

    //alert(ROIvalueInt);

    //alert("text: " + ROIvaluesTyped[i].value);
    //alert("text: " + ROIvalueInt;

    if (ROIvalueInt>0){
      numROIs+=1;
      sumTyped+=parseFloat(ROIvalueInt);

      //alert(numROIs);
    }

     
 
  }

  avgTyped=parseFloat(sumTyped/numROIs).toFixed(1);
  if (isNaN(avgTyped)) {
      rdocument.getElementById("ROIaverageType").value = 0;
  } else{
    // put in avg blank
    document.getElementById("ROIaverageType").value = avgTyped;
  }




  // now use average as R2 in the other formula like we did for scroll

  R2=parseFloat(avgTyped);

  R23T=2*R2-11;

  magnetStrength=parseFloat(document.getElementById("magnet").value);

  if(magnetStrength==1.5){
    iron = parseFloat((0.0254*R2+ 0.202).toFixed(1));
  } else { // must be 3T
    iron = parseFloat((0.0254*R23T+ 0.202).toFixed(1));
    
  }


  

  if(R2>0){
    document.getElementById("ironImpType").value = iron;
    document.getElementById("ironType").value = iron;
  } else {
    document.getElementById("ironImpType").value = "";
    document.getElementById("ironType").value = "";
  }
    

} // end calcIronTypeROI()


function addHighlight(){

  

  ironVal=parseFloat(document.getElementById("ironType").value);


 
  if(ironVal<4){
    // normal
    divHighlight="normal";
  } else if (ironVal<7){//(ironVal>=4) and 
    //mild
    divHighlight="mild";
  } else if (ironVal<=10){//(ironVal>=7) and 
    // mod
    divHighlight="mod";
  } else if (ironVal>10){
    // severe
    divHighlight="severe";
  }




  // make sure they are all unhighlighted

  document.getElementById("normal").classList.remove("highlight");
  document.getElementById("mild").classList.remove("highlight");    
  document.getElementById("mod").classList.remove("highlight");          
  document.getElementById("severe").classList.remove("highlight");    


  //add only the sent one
  var element = document.getElementById(divHighlight);
  element.classList.add("highlight");       //toggle class highlight
} // end addHighlight



function addHighlightScroll(){

  

  ironVal=parseFloat(document.getElementById("iron").value);


 
  if(ironVal<4){
    // normal
    divHighlight="normalScroll";
  } else if (ironVal<7){//(ironVal>=4) and 
    //mild
    divHighlight="mildScroll";
  } else if (ironVal<=10){//(ironVal>=7) and 
    // mod
    divHighlight="modScroll";
  } else if (ironVal>10){
    // severe
    divHighlight="severeScroll";
  }




  // make sure they are all unhighlighted

  document.getElementById("normalScroll").classList.remove("highlight");
  document.getElementById("mildScroll").classList.remove("highlight");    
  document.getElementById("modScroll").classList.remove("highlight");          
  document.getElementById("severeScroll").classList.remove("highlight");    


  //add only the sent one
  var element = document.getElementById(divHighlight);
  element.classList.add("highlight");       //toggle class highlight
} // end addHighlightScroll








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


function hide(divSent){
  // window.alert()
  var element = document.getElementById(divSent);
  element.classList.add("hideDIV");       //toggle class hideDIV
} // end hide


function unHide(divSent){
  var element = document.getElementById(divSent);
  element.classList.remove("hideDIV");        //toggle class hideDIV
} // end unHide
