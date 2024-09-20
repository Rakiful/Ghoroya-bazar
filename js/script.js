function updateAlert(){
    alert("Its completion is still in progress. It will be completed very soon.")
};


//Admin login method
const adminLoginForm = document.getElementById('admin-login-form');

adminLoginForm.addEventListener("submit",function(){
    event.preventDefault();

    let hasError = false ;

    // Get all input Values
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    
    // clear all error
    document.getElementById("usernameError").innerText="";
    document.getElementById("passError").innerText="";

    // Set All Error
    if (username === ""){
        document.getElementById("usernameError").innerText="Username is Requred";
        hasError = true;
    }
    if (password === ""){
        document.getElementById("passError").innerText="Password is Requred";
        hasError = true ;
    }
    
    const realUsername = "arif";
    const realPassword = "aharon@shop";

    if(!hasError){
        if (username === realUsername & password === realPassword){
            document.querySelector(".admin-panel-login").style.display="none"
            document.querySelector(".admin-panel").style.display="block"
            alert("Login Sucessfull");
        }else if(username === realUsername & password !== realPassword){
            document.getElementById("passError").innerText="Invalid Password";
        }else{
            document.getElementById("usernameError").innerText="Invalid Username";
            document.getElementById("passError").innerText="Invalid Password";
        }
    }

});

// function loginSubmit(){
    
// }