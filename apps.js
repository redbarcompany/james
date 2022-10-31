let wrapper = document.querySelector(".container");
let btn = document.querySelector(".active");
let bttn = document.querySelector(".buttonTwo");
let menubtn = document.querySelector("#buttonC");
let menu = document.querySelector("#contact");
let buttons = document.querySelectorAll("#button");

buttons.forEach((button , index) =>{
	button.addEventListener("click" , () =>{
		wrapper.style.transform = `translateX(${-100 * index}vw)`;});
});

menubtn.addEventListener("click", ()=>{
	if (menu.style.right == ""){
		menu.style.right = "0";
	}else{
		menu.style.right = "";
	}
});

function h(){
	btn.style.background = "red";
	bttn.style.background = "transparent";
}
function g(){
	btn.style.background = "transparent";
	bttn.style.background = "red";
}