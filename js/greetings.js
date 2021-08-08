const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem("USERNAME_KEY", username);
	paintGreetings(username);
};

function paintGreetings(username){
  greeting.innerText = `${username}, HACK EVERYTHING.`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	document.querySelector(".todo").classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else if (savedUsername !== null) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
};