 let fname=document.getElementById('name')
 let fusername=document.getElementById('username')
 let femail=document.getElementById('email')
 let number = document.getElementById("number")
 let pwd = document.getElementById("password")
 let cnfpwd = document.getElementById("confermpassword")
 
 
 
 
function formValidate(){
    let returnVal = true
    if(fname.value >3){
        document.getElementById('nameerror').innerHTML="*Must be three character"
        returnVal = false
    }
    if(fname.value.match(/[A-Z]/)){
        returnVal = false
    }
    else{
        document.getElementById('nameerror').innerHTML="*First letter Must be capital  "
    }
    if(fusername.value.includes(" ")){
        document.getElementById('usernameerror').innerHTML="*No space in username "
        returnVal = false
    }
    if(fusername.value.match(/[a-z]/)){
        returnVal = false
    }
    else{
        document.getElementById('usernameerror').innerHTML="*all letter Must be in lower case"
    }
    if(!femail.value.includes("@")){
        document.getElementById('emailerror').innerHTML="*must be @"
returnVal = false
    }
    if(number.value.length < 10){
        document.getElementById('numbererror').innerHTML="*must be 10 character"
        returnVal = false 
    }
    if(number.value.match(/[0-9]/)){
        returnVal = false
    }
    else{
        document.getElementById('numbererror').innerHTML="*Plese enter in number"
    }
    if(pwd.value.length < 8){
        document.getElementById('passworderror').innerHTML="*must be 8 character"
        returnVal = false 

    }
    if(pwd.value != cnfpwd.value){
        document.getElementById('confermpassworderror').innerHTML="*Password not match please reconferm your password "
        returnVal = false 
    }
    return returnVal;
}