const burger = document.querySelector('.burger');

burger.addEventListener("click", () => {
	if (burger.classList.contains("fa-bars")) {
		burger.classList.replace("fa-bars", "fa-times");
	} else {
		burger.classList.replace("fa-times", "fa-bars");
	}
});