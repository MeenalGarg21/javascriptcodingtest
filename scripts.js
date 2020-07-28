'use strict'
function ValidateForm()
{
    let username=document.getElementById("username")
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    let confirmPassword=document.getElementById("confirmPassword")
    if(username.value.length<3)
        {
            email.className="wrong-input";
            email.nextElementSibling.innerHTML="usernamecant be less than 3";
            valid=false;
    } 
    

else{
    username.className="right-input";
    valid=true;

}
if(email.value==0)
{
    email.className="wrong-input";
    email.nextElementSibling.innerHTML="email format is not correct";
    valid=false;
}
else{
    email.className="right-input";
    valid=true;

}
if(password.value.length<6)
{
    
        password.className="wrong-input";
        password.nextElementSibling.innerHTML="password cant be less than 6";
        valid=false;
}
else{
    username.className="right-input";
    valid=true;

}
if(password.value!=confirmPassword.value)
{
    confirmPassword.className="wrong-input";
    confirmPassword.nextElementSibling.innerHTML="password cant be less than 6";
    valid=false;
}
else{
    username.className="right-input";
    valid=true;

}
return valid;
}
