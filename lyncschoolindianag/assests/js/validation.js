return;
function Submit(){
   var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
   var phoneregex= /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
   var address=/^[ A-Za-z0-9_@./#&+-]*$/;
   var cityregex=/^[a-zA-Z\s]+$/;
   var stateregex=/^[a-zA-Z\s]+$/;
   var fnameregex=/^[a-zA-Z\s]+$/;
   var lnameregex=/^[a-zA-Z\s]+$/;
    console.log(emailRegex);
    var fname = document.form.Name.value;
    lname = document.form.LastName.value;
    femail = document.form.Email.value;
    fphone=document.form.phonenumber.value;
    ftelnumber=document.form.telnumber.value;
    faddress=document.form.laneaddress.value;
    fcity=document.form.city.value;
    fstate=document.form.state.value;
    var para=document.createElement('p');
        
        if (fname == ""){
    document.form.Name.focus();
    document.getElementById('errorname').innerHTML="Enter the valid name";
    /*document.form.Name.blur();
    document.getElementById('errorname').innerHTML="";
    return false;
    }
    else if(!fnameregex.test(fname)){
    document.form.Name.focus();
    document.getElementById('errorname').innerHTML="* This is an invalid name";
    return false;
    }
       if (lname == "" ){
    document.form.LastName.focus();
    document.getElementById("errorlname").innerHTML = "* Enter the Last Name";
    return false;
    }else if(!lnameregex.test(lname)){
    document.form.LastName.focus();
    document.getElementById("errorlname").innerHTML = "* Enter a valid Last Name";
    return false;
    }
      
     if (femail == "" )
   {
    document.form.Email.focus();
    document.getElementById("errorEmail").innerHTML = "* Enter the Email";
    return false;
    }else if(!emailRegex.test(femail)){
    document.form.Email.focus();
    document.getElementById("errorEmail").innerHTML = "* Enter a valid Email";
    return false;
    }


        if (fphone == "" )
   {
    document.form.phonenumber.focus();
    document.getElementById("errorPhone").innerHTML = "* Enter the Mobile Number";
    return false;
    }else if(!phoneregex.test(fphone)){
    document.form.phonenumber.focus();
    document.getElementById("errorPhone").innerHTML = "* Enter a valid Mobile Number";
    return false;
    }

       
        if (faddress == "" )
   {
    document.form.laneaddress.focus();
    document.getElementById("errorAddress").innerHTML = "* Enter the Address";
    return false;
    }else if(!address.test(faddress)){
    document.form.laneaddress.focus();
    document.getElementById("errorAddress").innerHTML = "* Enter a valid Address";
    return false;
    }
     
           if (fcity == "" )
   {
    document.form.city.focus();
    document.getElementById("errorCity").innerHTML = " *Enter the City";
    return false;
    }else if(!cityregex.test(fcity)){
    document.form.city.focus();
    document.getElementById("errorCity").innerHTML = "* Enter a valid City";
    return false;
    }

           if (fstate == "" )
   {
    document.form.state.focus();
    document.getElementById("errorState").innerHTML = "* Enter the State";
    return false;
    }else if(!stateregex.test(fstate)){
    document.form.state.focus();
    document.getElementById("errorState").innerHTML = "* Enter a valid State";
    return false;
    }
   
    if(fname != '' && lname != '' && femail != '' && fphone != '' && faddress !='' ){
     document.getElementById("errorBox").innerHTML = "form submitted successfully";
     }
       
}*/
  var inputElArr = document.getElementsByTagName('input');
  for(i=0;i<inputElArr.length;i++){
    inputElArr[i].onfocus = function(){
      console.log("focused on " + this);
      var spanEl = document.getElementById('errorname');
      var checkInputValue = this.value;
      this.onfocusout = function(){
        console.log("focusout")
        if(checkInputValue === " "){
          spanEl.innerHTML = "Mandatary field";
        }else{
          spanEl.innerHTML = "";
        }
      }
    }

  }
  
 