let submitButton_animation = document.getElementById("Submit-div");
let submitButton = document.getElementById("Submit-btn"); 

const userData={
    name:"",
    password:""
}
function addSubmitAnimation(){
    if((userData.name.length >0) && (userData.password.length > 5)){
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

function handleName(e){
    userData.name=e.target.value;
    console.log(userData.name);
    addSubmitAnimation()
}

function handlePassword(e){
    userData.password = e.target.value;
    console.log(userData.password);
    addSubmitAnimation()
}

