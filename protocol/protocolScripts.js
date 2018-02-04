function femaleCheck() {
    var checkBox = document.getElementById("female-check");
    var text = document.getElementById("preg-questions");
    if (checkBox.selected == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}



function ucgNotDone() {
    var checkBox = document.getElementById("ucg-check");
    var text = document.getElementById("reason-questions");
    if (checkBox.selected == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function sameExam() {
    var checkBox = document.getElementById("same-exam-check");
    var text = document.getElementById("suggested-questions");
    if (checkBox.checked == false){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}


function JSshowOlderGFR() {
    var checkBox = document.getElementById("eGFR-check");
    var text = document.getElementById("showOlderGFR");
    if (checkBox.checked == false){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}



function otherCheck() {
    var checkBox = document.getElementById("other-check");
    var text = document.getElementById("otherContrast-textBox");
    if (checkBox.selected == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function otherCheck2() {
    var checkBox = document.getElementById("other-check2");
    var text = document.getElementById("otherContrast-textBox2");
    if (checkBox.selected == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function contrastAllergyAlert() {
    var checkBox = document.getElementById("contrast-allergy-check");
    var text = document.getElementById("contrast-allergy-text");
    if (checkBox.selected == true){
    	alert("Premedicate and perform scan in the Hospital NOT Imaging Center!");
    	text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}


/*



window.onload = function () {

	// event listener 
	document.getElementsByName("eGFR")[0].addEventListener('change', showOlderGFR());

	//function 
	function showOlderGFR(){

	   	var eGFR = document.getElementByName("eGFR").value;
	    var text = document.getElementById("showOlderGFR");
	    if (eGFR < 60){
	        text.style.display = "block";
	    } else {
	       text.style.display = "none";
	    }


	}
}









*/