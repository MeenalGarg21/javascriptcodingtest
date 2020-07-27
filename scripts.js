function ValidateForm()
{
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var confirm_password=document.getElementById("confirm_password");
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
if(password.value!=confirm_password.value)
{
    confirm_password.className="wrong-input";
    confirm_password.nextElementSibling.innerHTML="password cant be less than 6";
    valid=false;
}
else{
    username.className="right-input";
    valid=true;

}
return valid;
}
