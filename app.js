const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username){
    greeting.innerText = `Hello ${username}!`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
if (savedUsername === null) {
    // Show the login form if no username is saved
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}
else {
    // If a username is saved, show the greeting
    paintGreeting(savedUsername);
}


function onLoginSubmit(e){
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}


loginForm.addEventListener("submit",onLoginSubmit)
