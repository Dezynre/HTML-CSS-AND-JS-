
let hamburger=document.querySelector('.hamburger');
let menu=document.querySelector('.primary-nav');

hamburger.addEventListener('click', (event)=>{

	if(menu.style.top=="-30vh"){
		menu.style.top="10vh";
	}else{
		menu.style.top="-30vh";
	}

});