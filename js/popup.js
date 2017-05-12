var open = document.querySelector(".contact-button");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close");
var form = popup.querySelector("form");
var username = form.querySelector("[name=username]");
var mail = form.querySelector("[name=mail]");
var storage = localStorage.getItem("username");

open.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("popup-show");
	if (storage) {
		username.value = storage;
		mail.focus();
	} else {
		username.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("popup-show");
	popup.classList.remove("popup-error");
	mail.classList.remove("error");
	username.classList.remove("error");
});

form.addEventListener("submit", function (evt) {
	if (!username.value || !mail.value) {
		evt.preventDefault();
		popup.classList.remove("popup-error");
		popup.offsetWidth = popup.offsetWidth;
		mail.classList.remove("error");
		mail.offsetWidth = mail.offsetWidth;
		username.classList.remove("error");
		username.offsetWidth = username.offsetWidth;
		popup.classList.add("popup-error");
		mail.classList.add("error");
		username.classList.add("error");
	} else {
		localStorage.setItem("username", username.value);
	}
});

mail.addEventListener("input", function (evt) {
	mail.classList.remove("error");
});

username.addEventListener("input", function (evt) {
	username.classList.remove("error");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("popup-show")) {
			popup.classList.remove("popup-show");
			popup.classList.remove("popup-error");
			mail.classList.remove("error");
			username.classList.remove("error");
		}
	}
});