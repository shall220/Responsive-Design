//set inputs to variables
var msgInput = document.getElementById('userInput');
var emailInput = document.getElementById('email');
var nameHolder = document.getElementById('name');

//set buttons to variables
var saveDraftBtn = document.getElementById('saveDraft');
var getDraftBtn = document.getElementById('getDraft');
var deleteDraftBtn = document.getElementById('clearLocalStorage');
var validateSubmit = document.getElementById('submit');
var refreshCapBtn = document.getElementById('capRefresh');


//variable to set localStorage index for inputs
var draft = 0;
var emailIndex = 1;
var nameIndex = 2;

//Listeners for buttons
if (!saveDraftBtn.addEventListener){
//support for old version of IE < 9
	saveDraftBtn.attachEvent('onclick', buttonListener1, false);
    getDraftBtn.attachEvent('onclick', buttonListener, false);
	deleteDraftBtn.attachEvent('onclick', buttonListener0, false);
	validateSubmit.attachEvent('onclick', buttonListener2, false);
	refreshCapBtn.attachEvent('onclick', buttonListener3, false);	
} else {
	saveDraftBtn.addEventListener('click', buttonListener1, false);
    getDraftBtn.addEventListener('click', buttonListener, false);
	deleteDraftBtn.addEventListener('click', buttonListener0, false);
	validateSubmit.addEventListener('click', buttonListener2, false);
	refreshCapBtn.addEventListener('click', buttonListener3, false);
	
}

//set labels to variables 
var changeColor = document.getElementById('required');
var changeColor0 = document.getElementById('required0');
var changeColor1 = document.getElementById('required1');
var changeColor2 = document.getElementById('required2');

//validation for inputs
function validator() {
    name = nameHolder.value;
    email = emailInput.value;
    userInput = msgInput.value;
	caption = capInput.value;
    if (name.length < 1) {
			changeColor.className = "required";
			nameHolder.focus();
        alert("Fields With an orange star are required");
        } else if (email.length < 1 || email.indexOf("@") < 1) {
			changeColor.className = "null";
			changeColor0.className = "required";
			emailInput.focus();
        alert("Email Address is invalid");
        } else if (userInput.length < 1) {
			changeColor.className = "null";    
			changeColor0.className = "null";
			changeColor1.className = "required";	   
			msgInput.focus();
			alert("Fields With an orange star are required");
        } else if (caption !== "4") {
			changeColor.className = "null";    
			changeColor0.className = "null";
			changeColor1.className = "null";
			changeColor2.className = "required";
			alert("Captcha Wrong Try Again");			
		} else {
		changeColor.className = "null";    
		changeColor0.className = "null";
		changeColor1.className = "null";			
        changeColor2.className = "null";
		msgInput.value = "";
		emailInput.value = "";
		nameHolder.value = "";
		capInput.value = "";
        alert("Form Submitted");
        }        
}




//store inputs into localStorage
function storeDraft() {
	userInput = msgInput.value;
	email = emailInput.value;
	name = nameHolder.value;
	localStorage.setItem(draft, userInput);
	localStorage.setItem(emailIndex, email);
	localStorage.setItem(nameIndex, name);
	changeColor.className = "null";    
    changeColor0.className = "null";
    changeColor1.className = "null";
	changeColor2.className = "null";
	alert("Draft Saved");	
}

//retrieve stored inputs for localStorage
function retrieveDraft() {
	if (localStorage.length === 0) {
		msgInput.value = "There is no Draft saved";		
	} else {
		msgInput.value = localStorage.getItem(draft);
		emailInput.value = localStorage.getItem(emailIndex);
		nameHolder.value = localStorage.getItem(nameIndex);
		changeColor.className = "null";   
		changeColor0.className = "null";
		changeColor1.className = "null";
		changeColor2.className = "null";
	}
	alert("Draft Retrieved");
	msgInput.focus();
	console.log(localStorage)	
}

//clear stored inputs from localStorage
function clearDatabase() {
	if (localStorage.length === 0){
		alert("Nothing to delete");
		msgInput.focus();
	} else {
	localStorage.clear();
	msgInput.value = "";
	emailInput.value = "";
	nameHolder.value = "";
	alert("Draft Delected")
	msgInput.focus()
	}
} 

//give listeners a function
//store
function buttonListener1(e) {
		//support for old versions IE < 8
	if (typeof e === 'undefined') {
		e = window.event;
	}
	if (typeof e.preventDefault !== undefined) {
		e.preventDefault();
	} else {
//support for old versions of IE < 9
		e.returnValue = false;
	}
	storeDraft();
}

//retrieve
function buttonListener(e){
//support for old versions IE < 8
	if (typeof e === 'undefined') {
		e = window.event;
	}
	if (typeof e.preventDefault !== undefined) {
		e.preventDefault();
	} else {
//support for old versions of IE < 9
		e.returnValue = false;
	}
	retrieveDraft();
}

//clear
function buttonListener0(e) {
//support for old versions IE < 8
	if (typeof e === 'undefined') {
		e = window.event;
	}
	if (typeof e.preventDefault !== undefined) {
		e.preventDefault();
	} else {
//support for old versions of IE < 9
		e.returnValue = false;
	}
	clearDatabase();	
}

//validate
function buttonListener2(e){
//support for old versions IE < 8
	if (typeof e === 'undefined') {
		e = window.event;
	}
	if (typeof e.preventDefault !== undefined) {
		e.preventDefault();
	} else {
//support for old versions of IE < 9
		e.returnValue = false;
	}
        validator();			
}

//validate
function buttonListener3(e){
//support for old versions IE < 8
	if(typeof e === 'undefined'){
		e = window.event;
	}
	if(typeof e.preventDefault !== undefined){
		e.preventDefault();	
	} else{
//support for old versions of IE < 9
		e.returnValue = false;
	}
        clearCanvas();
		draw2Plus2();
		drawRandom();			
}


