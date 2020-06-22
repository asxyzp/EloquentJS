//Understanding static properties
//Created by asxyzp
console.log("Smallest interval b/w two nos. : ",Number.EPSILON);

console.log("Maximum safe integer : ",Number.MAX_SAFE_INTEGER);
console.log("Is ",Number.MAX_SAFE_INTEGER," a safe integer? ",Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log("Is ",Number.MAX_SAFE_INTEGER+1," a safe integer? ",Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));

console.log("Minimum safe integer : ",Number.MIN_SAFE_INTEGER);
console.log("Is ",Number.MIN_SAFE_INTEGER," a safe integer? ",Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log("Is ",Number.MIN_SAFE_INTEGER+1," a safe integer? ",Number.isSafeInteger(Number.MIN_SAFE_INTEGER-1));

console.log("Maximum representable value in JS : ",Number.MAX_VALUE);
console.log("Minimum representable value in JS : ",Number.MIN_VALUE);

console.log("Not-a-Number : ",Number.NaN);
console.log("+ve Infinity : ",Number.POSITIVE_INFINITY);
console.log("-ve Infinity : ",Number.NEGATIVE_INFINITY);

console.log(Number.MAX_VALUE+1 == +Number.POSITIVE_INFINITY)
console.log(Number.MAX_VALUE-1 == +Number.NEGATIVE_INFINITY)