const navSignin = document.querySelector("#nav-signin");
const navSignup = document.querySelector("#nav-signup");
const navBoard = document.querySelector("#nav-board");
const navWrite = document.querySelector("#nav-write");

const pageSignin = document.querySelector("#page-signin");
const pageSignup = document.querySelector("#page-signup");
const pageBoard = document.querySelector("#page-board");
const pageWrite = document.querySelector("#page-write");

// 페이지 전환 함수
function changePages(pageElement) {
	const pages = document.querySelectorAll(".page");
	pages.forEach((page) => {
		page.classList.remove("active");
	});
	pageElement.classList.add("active");
}

navSignin.addEventListener("click", () => {
	changePages(pageSignin);
});
navSignup.addEventListener("click", () => {
	changePages(pageSignup);
});
navBoard.addEventListener("click", () => {
	changePages(pageBoard);
});
navWrite.addEventListener("click", () => {
	changePages(pageWrite);
});
