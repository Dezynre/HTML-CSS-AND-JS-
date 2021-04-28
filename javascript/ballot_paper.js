


let ballot_paper=document.querySelector('.ballot-paper');
let button=document.querySelector('.btn');
let confirm_text;
let confirm=document.querySelector('#confirm');
let message=document.querySelector('#message');
let yes=document.querySelector("#yes");
let no=document.querySelector("#no");
let candidate_of_choice;



//The Cast Vote button
button.addEventListener('click', (e)=>{
	e.preventDefault();
	confirm.style.top="4em";
	if (ballot_paper.cate.checked==true){
		candidate_of_choice="Cate"
		confirm_text="Are you sure you want to vote for WEISIKO CATHERINE MARWA. Remember you can only vote once!"
		message.textContent=confirm_text
	}else{
		candidate_of_choice="Budah"
		confirm_text="Are you sure you want to vote for BUDAH SYLVANUS MARIBA. Remember you can only vote once!"
		message.textContent=confirm_text
	}
})

//NO button
no.addEventListener('click', (e)=>{
	confirm.style.top="-25em";
})


//YES button
yes.addEventListener('click', (e)=>{

	fetch('/vote',{ method:'POST', headers:{ 'Content-Type': 'application/json'}, body:JSON.stringify({choice: candidate_of_choice})})
	.then(response => response.json())
	.then((data)=>{
		console.log(data);
	});

})

//Ballot paper checkbox
ballot_paper.cate.addEventListener('change', (e)=>{
	if (ballot_paper.cate.checked==true){
	ballot_paper.sylvanus.checked=false
	} else if (ballot_paper.sylvanus.checked==true){
	ballot_paper.cate.checked=false
}
})

ballot_paper.sylvanus.addEventListener('change', (e)=>{
	if (ballot_paper.sylvanus.checked==true){
	ballot_paper.cate.checked=false
	} else if (ballot_paper.cate.checked==true){
	ballot_paper.sylvanus.checked=false
}
})

