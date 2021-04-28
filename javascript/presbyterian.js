
console.log("This Is Chacha");
let hamburger=document.querySelector('.hamburger');
let menu=document.querySelector('.primary-nav');
let body=document.querySelector('.wrapper');
let today = new Date();
let month_number = today.getMonth();
let year = today.getFullYear();

hamburger.addEventListener('click', (event)=>{

	if(menu.style.top=="-30vh"){
		body.style.top="30vh";
		menu.style.top="10vh";
	}else{
		menu.style.top="-30vh";
		body.style.top="0";
	}

});

const getMonthName = function(number){
    let month;
    switch (month_number){
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    return month;
}

let text = `${ getMonthName(today.getMonth()) }, ${today.getFullYear()}`;
let textNode = document.createTextNode(text);
let footer = document.querySelector('.acknowlegement > p');
footer.appendChild(textNode);