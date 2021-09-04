const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    greeting.innerText= `Hello! ${username}`;
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    greeting.classList.toggle(HIDDEN_CLASSNAME);
}

loginForm.classList.toggle(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);
