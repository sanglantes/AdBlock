document.getElementById("activate").addEventListener("click", myFunction);
let status = false;
function myFunction() {
	document.getElementById("activate").innerHTML = document.cookie || "<b>Currently blocking ads.</b>";
	const element = document.querySelector('.activate-button');
	element.style.backgroundColor = '#ACD1AF';
}
