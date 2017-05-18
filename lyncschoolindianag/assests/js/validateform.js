// get all the mandatory field values except phone number field

//  write a function to check empty fields .
// write a function to validate the entered values 
// write a if condition to check weather 
// 
// else add event event listener to populate the error messages for the empty or incorrect text fields 
	// function to identify empty and incorrect field entry 
		// get all required fields using $('reqfield') on focus event 
		// using the array $('reqfield') check for each input field values using regExp 
		//  

var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
var phoneregex= /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
var address=/^[ A-Za-z0-9_@./#&+-]*$/;
var cityregex=/^[a-zA-Z\s]+$/;
var stateregex=/^[a-zA-Z\s]+$/;
var fnameregex=/^[a-zA-Z\s]+$/;
var lnameregex=/^[a-zA-Z\s]+$/;
var submitBtn = document.getElementById('submit')
submitBtn.onclick = onSubmit;
var mandatoryFieldElements;
var errorMsgCarrier ;
var allReqFields = document.getElementsByClassName('reqfield');
function checkForValidInput(){
	var manFieldEl = document.getElementsByClassName('reqfield');
	for(i=0;i< manFieldEl.length;i++){
		var nameAttrValue = manFieldEl[i].getAttribute('name');
		switch(nameAttrValue){
			case 'Name':if(!fnameregex.test(manFieldEl[i].value)){
							addErrorMessage(manFieldEl[i],"This is an invalid name")
						}
						
						break;
			case 'LastName': if(!lnameregex.test(manFieldEl[i].value)){
								addErrorMessage(manFieldEl[i], "Enter a valid Last Name")
						}		
						break;
			case 'Email': if(!emailRegex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid Email")
						}
						break;						
			case 'phonenumber':if(!phoneregex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid Mobile Number")
						}
						break;
			case 'laneaddress':if(!address.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid Address")
						}
						break;	
			case 'city':if(!cityregex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid City")
						}
						break;	
			case 'state':if(!stateregex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid State")
						}
						break;															
		}	
	}

	
}
function regExpValidation(elementname,addingMsg){
	
}
function addErrorMessage(emptyfieldelement,validcharacters){
	console.log('error message ');
	var elementName = emptyfieldelement.parentNode;
	var existingErrMsgCarier = elementName.querySelector('.errormsg');
	if(existingErrMsgCarier){
		if(validcharacters){
			if(!existingErrMsgCarier.innerHTML === "Mandatory Field" || existingErrMsgCarier.innerHTML === ""){
				existingErrMsgCarier.innerHTML = validcharacters;
			}else{
				
			}
			
		}

	}else{
		errorMsgCarrier = document.createElement('span');
		errorMsgCarrier.setAttribute('class','errormsg');
		if(validcharacters){
			errorMsgCarrier.innerHTML = validcharacters
			
		}else{
			
			errorMsgCarrier.innerHTML = "Mandatory Field"
			
		}
		emptyfieldelement.parentNode.appendChild(errorMsgCarrier);
	}
}
function removeErrorMessage(filledelement){
	filledParentElement = filledelement.parentNode;
	var removeErrorMsg = filledParentElement.querySelector('.errormsg');
	removeErrorMsg.innerHTML = '';

}
function checkForEmptyFields(){
	// check the emptyfield 
	// create a span element for each empty field and add error message to it
	//
	
	mandatoryFieldElements = document.getElementsByClassName('reqfield');
	// debugger;
	console.log('checkForEmptyFields' + mandatoryFieldElements )
	for(i=0 ; i < mandatoryFieldElements.length ; i++){
		if(mandatoryFieldElements[i].value === ""){
			console.log('empty field element  ' + mandatoryFieldElements[i] );
			addErrorMessage(mandatoryFieldElements[i]);
			mandatoryFieldElements[i].onfocusout = function(){
				// error message for the 

				if(this.value === ""){
					addErrorMessage(this);
				}else{
					removeErrorMessage(this);
					debugger;
					checkForValidInput();
				}
			}
		}
	}

}
for(i=0;i<allReqFields.length;i++){
	allReqFields[i].onfocusout =  function(){
		checkForEmptyFields();
		checkForValidInput();
	}
}
function validateEnteredValues(){

}
function onSubmit(){
	console.log("on submit function");

	checkForEmptyFields();
	checkForValidInput();
	// onkeypress  event run validateEnteredValues 


}


var fileupload = document.getElementById('file');
fileupload.onchange = function(e){
	console.log(e.target.value);
	var value = e.target.value;
	var arr = value.split("\\");
	arr[arr.length-1]
	var checkForSpanEl = document.getElementById('filename');
	if(checkForSpanEl){
		checkForSpanEl.innerHTML = arr[arr.length-1];
	}else{
		var spanEl = document.createElement('span');
		spanEl.id= "filename";
		spanEl.innerHTML = arr[arr.length-1];
		this.parentNode.parentNode.appendChild(spanEl);
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              