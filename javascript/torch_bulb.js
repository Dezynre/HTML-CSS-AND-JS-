/*       JSON         */

console.log("JSON");



/*
i created an object student
*/
let student={
	name: "ian",
	yearOfBirth: 1997,
	male: true,
	female: false
}

/* i defined two functions:
	1 to convert a javascript object into a JSON string
	2 to convert a JSON string into a javascript object
*/

let convertToJson=function(javaScriptData)
{
	return JSON.stringify(javaScriptData);
};


let converFromJson=function(json)
{
	return JSON.parse(json);
};

/*
I declared two variables to hold
	1 a JSON string
	2 a javascript object
*/

let json = convertToJson(student);
let javaScriptData = converFromJson(json);

/*
I displayed the results of my computation
*/
console.log(json);
console.log(javaScriptData);