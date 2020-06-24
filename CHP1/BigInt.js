//Understanding BigInt
//Created by asxyzp

var maxSafeInt = Number.MAX_SAFE_INTEGER;
var biggerThanMaxSafeInt = BigInt(maxSafeInt+1);
console.log(typeof(maxSafeInt), Number.isSafeInteger(maxSafeInt));
console.log(typeof(biggerThanMaxSafeInt), Number.isSafeInteger(biggerThanMaxSafeInt));