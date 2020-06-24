//Understanding strings
//Created by asxyzp

//Creating strings
var firstName = 'Aashish';
var middleName = "Loknath";
var lastName = `Panigrahi`;		//Using backticks
console.log(firstName,middleName,lastName);

//Escape characters
console.log("Hello, \"world\"!");
console.log('Hello, \'world\'!');
console.log("First line\nSecond line");
console.log("There will be \tbefore this");
console.log("C\\MyDocuments\\CatPhotos\\meow.png");

//String concatenation
var jai = "Jai";
var shree = "Shree";
var ram = "Ram";
var space = " ";
console.log(jai+space+shree+space+ram);
jai = "जय";
shree = "श्री";
ram = "श्राम"
console.log(jai+space+shree+space+ram);

//Template literals
function anthnoyGonsalves(){
	return "Anthony Gonsalves";
}
console.log(`My name is ${anthnoyGonsalves()}.`);