
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


function checkOral(selectionToUnHide) {
	var oral = document.getElementsByName("order-bodyPart")[0].value; // need to make this work for "suggested also"

	if(oral==="Chest, Abdomen and Pelvis" || oral==="Abdomen and Pelvis" || oral==="Abdomen"){
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
	// https://www.baptistfirst.org/find-a-doctor/provider-search-results?ProviderText=daniel&&LocationDescendants=true
	var url = "https://www.baptistfirst.org/find-a-doctor/provider-search-results?ProviderText="+ doc + "&&LocationDescendants=true";
	window.open(url, "_blank", "scrollbars=yes,resizable=yes,top=300,left=500,width=560,height=700");	
}

function sameCheck(hiddenDIV){
	var element = document.getElementById(hiddenDIV);
	element.classList.toggle("hideDIV");		
}