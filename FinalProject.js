
var Vldt = /^[a-zA-Z\s\'\-]{2,50}$/; // regex pattern of the allowed characters
var VldtPN = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //regex pattern of valid phone number
var VldtEA = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex pattern of valid email
var VldtUN = /^[a-zA-Z0-9]{5,15}$/; // regex pattern of User ID which includes Digits
var VldtPW = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm; //regex pattern of Password


function VFName(){ //Function to Validate First Name
	var VFName = document.getElementById("FN").value;
	localStorage.setItem("FNSave", VFName); // Stores Value of First Name to Local Storage that can be retrieved for other page
	if(Vldt.test(VFName)){ //Allow next text field if condition is met
		return true;
	}
	else{ //Will prompt to enter valid characters if condition is not met
		alert("First Name must be 2-15 Characters");
		document.getElementById("FN").focus();
		return false;
	}
}

function VLName(){ //Function to Validate Last Name
	var VLName = document.getElementById("LN").value;
	if(Vldt.test(VLName)){ //Allow next text field if condition is met
		return true;
	}
	else{ //Will prompt to enter valid characters if condition is not met
		alert("Last Name must be 2-15 Characters");
		document.getElementById("LN").focus();
		return false;
	}
}

function ValEAdd(){ // Function to Validate Email Address
	var ValEAdd = document.getElementById("EA").value;
	localStorage.setItem("EASave", ValEAdd); // Stores Value of Email Add to Local Storage that can be retrieved for other page
	
	if(VldtEA.test(ValEAdd)){
		return true;
	}
	else{
		alert("Please Enter a Valid Email Address");
		document.getElementById("EA").focus();
		return false;
	}
}

function VBDate(){ //Validates Birthdate Field
	var ValBD = document.getElementById("BD").value;
	if(ValBD==""){ //will prompt an alert if Birthdate field is empty
		alert("Please Enter your Birthdate");
		document.getElementById("BD").focus();
		return false;
	}
}

function VPhoneNo(){ //Function to Validate Phone Number
	var VPNo = document.getElementById("MN").value;
	if(VPNo.match(VldtPN)){
		return true;
	}
	else{
		alert("Mobile Phone No. must be xxx-xxx-xxxx Format");
		document.getElementById("MN").focus();
		return false;
	}
}

function ClrMN(){ //clear value of Mobile Phone No. when onfocus or onclick event
	document.getElementById("MN").value="";
}

function PlyrName(){ //function to validate Player Name
	var PlyrName = document.getElementById("PN").value;
	if(VldtUN.test(PlyrName)){
		return true;
	}
	else{
		alert("Player Name must be 5-20 Characters");
		document.getElementById("PN").focus();
		return false;
	}
}

function UserID(){ // function to validate User ID
	var UserID = document.getElementById("UID").value;
	if(VldtUN.test(UserID)){
		return true;
	}
	else{
		alert("User ID must be 5-15 Characters");
		document.getElementById("UID").focus();
		return false;
	}
}

function ValPW(){
	var PWVal = document.getElementById("PW").value;
	if(VldtPW.test(PWVal)){
		return true;
	}
	else{
		alert("Password must be: At least 8 characters, At least 1 CAPITAL LETTER, At least 1 Number, At least 1 Special Character");
		document.getElementById("PW").focus();
		return false;
	}
}

function ConfirmPW(){
	var PW01 = document.getElementById("PW").value;
	var PW02 = document.getElementById("CPW").value;
	if(PW01!=PW02){
		alert("Password Did Not Match");
		document.getElementById("CPW").focus();
		return false;
	}
	else{
		return true;
	}
}

function CLR(){ //function to reset form
	var msg;
	var ver = confirm("Are You Sure?");
	if(ver==true){
		document.getElementById("GF").reset();
		document.getElementById("FN").focus();
		return true;
	}
	else{
		return false;
	}
}

function SubmitReg(){ //function to submit form onclick

	var x = document.forms["GF"]["FN","LN","BD","MN","EA","PN","UID","PW","CPW"].value; //Form Validation
	if(x==""){ //condition to alert user if value is empty
		alert("Please Fill Out the Entire Form");
		var Info = document.getElementById("GF").elements;
		var zz = document.getElementsByClassName("RedAst");
		for(var x=0;x < Info.length;x++){
			zz[x].innerHTML = "*";
		}
		return false;
	}
	else{
		window.location.href = "FinalProjectPage2.html"; //submit form when condition is now met
		return true;
	}
}

function GPage2(){ //display First Name and Email onload of next page
 	var EARet = localStorage.getItem("EASave");
	var FNRet = localStorage.getItem("FNSave");
	document.getElementById("EAdd").innerHTML = EARet;
	document.getElementById("FirstName").innerHTML = FNRet;
}