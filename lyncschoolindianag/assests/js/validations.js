
//     function validateForm(){
//    
//   
//    console.log("in validations");
//         var returnValue=false;     
//         
//         
// var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
// var phoneregex= /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
// var address=/^[ A-Za-z0-9_@./#&+-]*$/;
// var cityregex=/^[a-zA-Z\s]+$/;
// var stateregex=/^[a-zA-Z\s]+$/;
// var fnameregex=/^[a-zA-Z\s]+$/;
// var lnameregex=/^[a-zA-Z\s]+$/;
         
//console.log(emailRegex);
// var fname = document.myform.fname.value;
//         console.log(fname);
//         if (fname == "" )
// {
//  document.myform.fname.focus();
//  document.getElementById("errorBox").innerHTML = "* Enter the Name";
//  returnValue= false;
//  }
//         return returnValue;
/* var lname = document.form.LastName.value,
  femail = document.form.Email.value,
  fphone=document.form.phonenumber.value,
  ftelnumber=document.form.telnumber.value,
  faddress=document.form.laneaddress.value,
  fcity=document.form.city.value,
  fstate=document.form.state.value;
  
console.log(fname);
   
    if (fname == "" )
 {
  document.form.Name.focus();
  document.getElementById("errorBox").innerHTML = "* Enter the Name";
  return false;
  }else if(!fnameregex.test(fname)){
  document.form.Name.focus();
  document.getElementById("errorBox").innerHTML = "* Enter a valid Name";
  return false;
  }
     if (lname == "" )
 {
  document.form.LastName.focus();
  document.getElementById("errorBox").innerHTML = "* Enter the Last Name";
  return false;
  }else if(!lnameregex.test(lname)){
  document.form.LastName.focus();
  document.getElementById("errorBox").innerHTML = "* Enter a valid Last Name";
  return false;
  }
    
   if (femail == "" )
 {
  document.form.Email.focus();
  document.getElementById("errorBox").innerHTML = "* Enter the Email";
  return false;
  }else if(!emailRegex.test(femail)){
  document.form.Email.focus();
  document.getElementById("errorBox").innerHTML = "* Enter a valid Email";
  return false;
  }


      if (fphone == "" )
 {
  document.form.phonenumber.focus();
  document.getElementById("errorBox").innerHTML = "* Enter the Mobile Number";
  return false;
  }else if(!phoneregex.test(fphone)){
  document.form.phonenumber.focus();
  document.getElementById("errorBox").innerHTML = "* Enter a valid Mobile Number";
  return false;
  }

     
      if (faddress == "" )
 {
  document.form.laneaddress.focus();
  document.getElementById("errorBox").innerHTML = "* Enter the Address";
  return false;
  }else if(!address.test(faddress)){
  document.form.laneaddress.focus();
  document.getElementById("errorBox").innerHTML = "* Enter a valid Address";
  return false;
  }
   
         if (fcity == "" )
 {
  document.form.city.focus();
  document.getElementById("errorBox").innerHTML = " *Enter the City";
  return false;
  }else if(!cityregex.test(fcity)){
  document.form.city.focus();
  document.getElementById("errorBox").innerHTML = "* Enter a valid City";
  return false;
  }

         if (fstate == "" )
 {
  document.form.state.focus();
  document.getElementById("errorBox").innerHTML = "* Enter the State";
  return false;
  }else if(!stateregex.test(fstate)){
  document.form.state.focus();
  document.getElementById("errorBox").innerHTML = "* Enter a valid State";
  return false;
  }
 
  if(fname != '' && lname != '' && femail != '' && fphone != '' && faddress !='' && ftelnumber !=''){
   document.getElementById("errorBox").innerHTML = "form submitted successfully";
   }
   
         
    */     
var returnTrue=true;
var returnFalse=false; 
var returnValue=true;
var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
//var phoneregex= /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
var phoneregex=/^\d{10}$/;
var filetyperegex=/\.(pdf|doc|docx)$/i;
var address=/^[ A-Za-z0-9_@./#&+-]*$/;
var cityregex=/^[a-zA-Z\s]+$/;
var stateregex=/^[a-zA-Z\s]+$/;
var fnameregex=/^[a-zA-Z\s]+$/;
var lnameregex=/^[a-zA-Z\s]+$/;
var fileLimit= 2*1024*1024;
//var submitBtn = document.getElementById('submit')
//submitBtn.onclick = onSubmit;
var mandatoryFieldElements;
var errorMsgCarrier ;
//var allReqFields = document.getElementsByClassName('reqfield');
function checkForValidInput(){
    returnValue=true;
	var manFieldEl = document.getElementsByClassName('reqfield');
	for(i=0;i< manFieldEl.length;i++){
		var nameAttrValue = manFieldEl[i].getAttribute('name');
		switch(nameAttrValue){
			case 'fname':if(!fnameregex.test(manFieldEl[i].value)){
							addErrorMessage(manFieldEl[i],"This is an invalid name");
                        returnValue=false;
						}
						
						break;
			case 'lname': if(!lnameregex.test(manFieldEl[i].value)){
								addErrorMessage(manFieldEl[i], "Enter a valid Last Name");
                returnValue=false;
						}		
						break;
			case 'email': if(!emailRegex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid Email");returnValue=false;
						}
						break;						
			case 'mobile':if(!phoneregex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid Mobile Number");returnValue=false;
						}
						break;
			case 'add':if(!address.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid Address");returnValue=false;
						}
						break;	
			case 'city':if(!cityregex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid City");returnValue=false;
						}
						break;	
			case 'state':if(!stateregex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Enter a valid State");returnValue=false;
						}
						break;	
            case 'filen':if(!filetyperegex.test(manFieldEl[i].value)){
						addErrorMessage(manFieldEl[i], "Please select only pdf, doc or docx ");
                
                returnValue=false;
						}
                else { var file= document.getElementById('filen').files[0];
                console.log(file.size+" Filss size");
        if(file.size>fileLimit){
            addErrorMessage(manFieldEl[i], "Please select a file below 2 MB");
            console.log(file.size-fileLimit);
       returnValue= false;
        }}
						break;	
    
		}	
	}


}
function regExpValidation(elementname,addingMsg){
	
}
function addErrorMessage(emptyfieldelement,validcharacters){
	console.log('error message '+validcharacters);
    //console.log('')
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
var allReqFields = document.getElementsByClassName('reqfield');
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
console.log(returnValue+'Return Value');
    
    if(returnValue){
        }
               
    
 return returnValue;
}


/*var fileupload = document.getElementById('file');
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
*/
   