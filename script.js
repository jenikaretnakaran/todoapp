const form = document.getElementById("form");
const userId = document.getElementById("userInput");
const pwdId = document.getElementById("pwdInput");

form.addEventListener('submit',(e)=>
{
    checkInputs();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         e.preventDefault();
     };
    

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('#input');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
};

const setError = (element,message) => {
    const displayRed= element.parentElement;
    if(displayRed.classList.contains('success')){
        displayRed.classList.remove('success');
    }
    displayRed.classList.add('error');
    const errorDisplay= displayRed.querySelector('.warning');
    errorDisplay.innerText=message;
    displayRed.querySelector(".warning").style.color="red";
};

const setSuccess = (element) => {
    const display = element.parentElement;
    if(display.classList.contains('error')){
        display.classList.remove('error');
    }
    display.classList.add('success');
    const successDisplay = display.querySelector('.warning');
    successDisplay.innerText = "";
};

const checkInputs =() => {
    const userIdValue = userId.value.trim();
    const pwdIdValue = pwdId.value.trim();

    // useridvalidation

    if(userIdValue === "") {
        setError(userId, 'Email is required');
    } 
    else if (userIdValue==="admin") {
        setSuccess(userId);
    } 
    else {
        setError(userId,"username is invalid");
        
    };
    // password

    if (pwdIdValue==="") {
        setError(pwdId,"Password is required");
    }
    else if (pwdIdValue==="12345") {
        setSuccess(pwdId);
    }
    else {
        setError(pwdId,"Password  is invalid");
    };

};   
    
    

