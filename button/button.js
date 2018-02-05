function buttonCheck(btnName, btnValue) {
	var value1 = document.getElementsByName(btnName)[0].value;
	var value2 = document.getElementsByName(btnName)[1].value;

	// I need to use array and loop to fill it instead of value1 and value2.  
	// Not sure how that works with the if-then below which is designed for only 2 options

	var keepValue = btnValue;

	if(value1 === btnValue){
		document.getElementById(btnName).value = value1;	// This assigned the Id that has same "name" the value
		document.getElementsByName(btnName)[0].className = "buttonPressed";  // changes class to CSS buttonPressed
		document.getElementsByName(btnName)[1].className = "button";	// changes class to CSS button (default or not pressed)
	} else {
		document.getElementById(btnName).value = value2;	// this assumes only 2 options and so the other one must be true
		document.getElementsByName(btnName)[1].className = "buttonPressed";
		document.getElementsByName(btnName)[0].className = "button";
	}
}

/* 

Need a different function for multiselect options

If multiselect we would need to text+= and let other options get selected (change thier class without unselecting the first one).  
You would then need to be able to click again to untoggle that selection   
https://www.w3schools.com/howto/howto_js_toggle_class.asp

*/



