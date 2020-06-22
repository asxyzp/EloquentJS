//Understandinf instance methods for number objects

//toExponential()
var num1 = 123456;
var num2 = 1.23456;
console.log(num1.toExponential(),typeof(num1),typeof(num1.toExponential()));
console.log(num2.toExponential(),typeof(num2),typeof(num2.toExponential()));

//toFixed()
console.log(0.6666666.toFixed(3), 0.3333333.toFixed(3), 0.0004.toFixed(3), (123456).toFixed(3));

//toString()
console.log((123456).toString(10),(123456).toString(16), (123456).toString(2));

//valueOf()
const one = new Number("1");
console.log("One = ",one.valueOf());
console.log("Data type of one = ",typeof(one));