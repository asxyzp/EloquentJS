//Understanding arithmetic operators
//Created by asxyzp

//Addition
console.log(true+true, true+false, false+true, false+false);
console.log(1+0);
console.log(1.0+1.0);
console.log("Hello, "+"world!");
console.log(2+3+"Hello", "Hello"+2+3);
console.log(""+Number.NaN, ""+undefined);
console.log(Infinity+Infinity, Infinity+(-Infinity), Infinity+NaN, Infinity+undefined);

//Subtraction
console.log(1-1, 1-"Hello");

//Multiplication
console.log(1*1, +Infinity*(-Infinity), -Infinity*-Infinity, Infinity*NaN, -Infinity*NaN, "" , "Hello"*1);

//Division
console.log(1/1, 1/0, 1/-0, 1/"Hello");

//Remainder
function evenOrOdd(number)
{
	if(number%2==0)
		console.log("EVEN");
	else if (number%2==1)
		console.log("ODD")
}
evenOrOdd(1);
evenOrOdd(2);