fetch("http://api.openweathermap.org/data/2.5/weather?lat=-1.2833&lon=36.8167&APPID=05dec21edd849f280c3d7382a4fbfe82").then(function(res){
	return res.json();
}).then(function(json){
	let para=document.createElement("p");
	let text=document.createTextNode(json.name)
	para.appendChild(text);
	document.body.appendChild(para);
	console.log(json);
}).catch(function(err)
{
	console.log(`Error:\t${err.message}`);
});

