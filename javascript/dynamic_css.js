console.log("Bravo!");

let red=document.querySelector("#red");
let blue=document.querySelector("#blue");
let div=document.querySelector("div");



red.addEventListener('click', (event)=>{
	div.classList.add("red");
	div.classList.remove("blue");
});

blue.addEventListener('click', (event)=>{
	div.classList.add("blue");
	div.classList.remove("red");
});