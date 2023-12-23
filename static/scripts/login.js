let submitButton_animation = document.getElementById("Submit-div");
let submitButton = document.getElementById("Submit-btn"); 

const userData={
    mail:"",
    password:""
}
function addSubmitAnimation(){
    if((userData.mail.length >0) && (userData.password.length > 5)){
        submitButton_animation.classList.add("submit-anim");
        submitButton.classList.add("button")
    }else{
        submitButton_animation.classList.remove("submit-anim");
        submitButton.classList.remove("button")
    }
}

function button_click(e){
    console.log(submitButton);
}

function handleMail(e){
    userData.mail=e.target.value;
    console.log(userData.mail);
    addSubmitAnimation()
}

function handlePassword(e){
    userData.password = e.target.value;
    console.log(userData.password);
    addSubmitAnimation()
}

