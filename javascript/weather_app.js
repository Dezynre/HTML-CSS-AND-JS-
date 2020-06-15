


	let condition=document.querySelector("#condition");
	let humidity=document.querySelector("#humidity");
	let temperature=document.querySelector("#temperature");
	fetch("http://api.openweathermap.org/data/2.5/weather?lat=-1.2833&lon=36.8167&APPID=05dec21edd849f280c3d7382a4fbfe82").then(function(res){
		return res.json();
	}).then(function(json){

		let descriptionNode=document.createTextNode(json.weather[0].description);
		condition.appendChild(descriptionNode);
		let humidityNode=document.createTextNode(json.main.humidity+"mmHg");
		humidity.appendChild(humidityNode);
		let temperatureNode=document.createTextNode(json.main.temp+"Kelvins");
		temperature.appendChild(temperatureNode);
		console.log(json);
	}).catch(function(err){
		console.log(`Error:\t${err.message}`);
	});

