//Understandind Static number methods
//Created by asxyzp

//Number() converts non-number primitive types to numbers
/*
	Return :
	String containing numeric values - Number
	String containing numeric values w/ exponential notation - Number
	String containing non-numeric values - NaN
	String containing true - 1
	String containing false - 0
*/
console.log(Number("1234567890"));
console.log(Number("1.23456789"));
console.log(Number("12e3"))
console.log(Number("abcdefghij"));
console.log(Number(true));
console.log(Number(false));
console.log("\n-----\n")

//Number.parseInt(str,base) parses string argument & returns a integer numeric value
/*
	Return :
	- String containing integer numeric values w/ base 10 = Integer
	- String containing float numeric values w/ base 10 = Float
	- String containing integer numeric values at the beginning w/ some numeric characters & containing non-numeric characters w/ base 10 = Integer, but only till the first non-numeric character
	- String containing non-numeric characters w/ base 10 = NaN
	- String containg float = Integer w/ truncated float part

	- String containg hex nos. (w/ 0x) from 0-9, A-F = Integer
	- String containing hex nos. from 0-9, A-F & non-numeric characters not beloning from the range (0-9,A-F) = Integer, but only till the first non-hex character
	- Strining starting with non-hex characters = NaN

	- String only containing numeric characters, 0 & 1, w/ base 2 = Integer
	- String beginning w/ 0 or 1, but containing non-binary characters = Integer, but only till the first non-binary character
	- String beginning with non-binary characters = NaN
*/

//Base 10 - Decimal numbers
console.log(Number.parseInt("1234567890",10));		//1234567890
console.log(Number.parseInt("1234.56789",10));		//1234.56789
console.log(Number.parseInt("123456789A",10));		//123456789
console.log(Number.parseInt("ABCDEDFGHI",10));		//NaN

//Base 16 - Hexadecimal numbers
console.log(Number.parseInt("0xFFFF",16));			//65535
console.log(Number.parseInt("0xFFFFXYZ",16));		//65535
console.log(Number.parseInt("0xZZZZ",16));			//NaN

//Base 2- Binary numbers
console.log(Number.parseInt("11111111",2));			//255
console.log(Number.parseInt("1234567890",2));		//1
console.log(Number.parseInt("321",2));				//NaN
console.log("\n-----\n");

//Number.parseFloat(str) parses string argument & returns float/NaN
/*
	Return :
	String containg numeric values = Float
	String beginning w/ numeric values, but containing non-numeric characters = Float, but only till the first non-numeric character
	String beginning with non-numeric characters = NaN
*/
console.log(Number.parseFloat("1234567890"));	//1234567890
console.log(Number.parseFloat("12345678AB"));	//12345678
console.log(Number.parseFloat("1234.56789"));	//1234.56789
console.log(Number.parseFloat("1234.567AB"));	//1234.567
console.log(Number.parseFloat("ABCDEFGHIJ"));	//NaN
console.log("\n-----\n");

//Number.isFinite() parses arg. to return true/false depending on whether argument is finte/+/-Infinite
console.log(Number.isFinite(1));
console.log(Number.isFinite(1/0));
console.log(Number.isFinite(1/-0));
console.log(Number.isFinite(+Infinity));
console.log(Number.isFinite(-Infinity));
console.log("\n-----\n");

//Number.isNaN() passes arg. to return true/false depending on whether the argument is NaN/Number
console.log(Number.isNaN(true));
console.log(Number.isNaN(false));
console.log(Number.isNaN("Hello, World!"));
console.log(Number.isNaN(1.234));
console.log(Number.isNaN(12345));
console.log(Number.isNaN(+Infinity));
console.log(Number.isNaN(-Infinity));

console.log(Number.isNaN(0/0));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(0*+Infinity));
console.log(Number.isNaN(0*-Infinity));
console.log(Number.isNaN(Number.parseInt("BLABLABLA")));
console.log(Number.isNaN(Number.parseFloat("BLABLABLA")));
console.log(Number.isNaN(Math.sqrt(-1)));
console.log("\n-----\n");

//Number.isInteger() returns true if arg. is an integer, otherwise not
console.log(Number.isInteger(123456789));
console.log(Number.isInteger(1.2345678));
console.log("\n-----\n");

//Number.isSafeInteger() returns true if arg. is in safe range, otherwise false
console.log(Number.isSafeInteger(1));
console.log(Number.isSafeInteger(1e10));
console.log(Number.isSafeInteger(1e20));
console.log(Number.isSafeInteger(-1e10));
console.log(Number.isSafeInteger(-1e20));