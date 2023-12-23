let submitButton_animation = document.getElementById("Submit-div");
let submitButton = document.getElementById("Submit-btn"); 

const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userData={
    name:"",
    mail:"",
    password:""
}
function addSubmitAnimation(){
    if((userData.name.length >0) && (userData.password.length > 5) && (userData.mail.match(regEx))){
        submitButton_animation.classList.add("submit-anim");
        submitButton.classList.add("button")
    }else{
        submitButton_animation.classList.remove("submit-anim");
        submitButton.classList.remove("button")
    }
}

function handleMail(e){
    userData.mail = e.target.value;
    console.log(userData.mail)
    addSubmitAnimation();
}

function handleName(e){
    userData.name=e.target.value;
    console.log(userData.name);
    addSubmitAnimation();
}

function handlePassword(e){
    userData.password = e.target.value;
    console.log(userData.password);
    addSubmitAnimation();
}