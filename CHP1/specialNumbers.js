//Understanding special numbers
//Created by asxyzp

//Operations of +Infinity w/ +ve real numbers
console.log(+Infinity+1);	//+Infinity
console.log(+Infinity-1);	//+Infinity
console.log(+Infinity*1);	//+Infinity
console.log(+Infinity/1);	//+Infinity

//Operations of -Infinity w/ +ve real numbers
console.log(-Infinity+1);	//-Infinity
console.log(-Infinity-1);	//-Infinity
console.log(-Infinity*1);	//-Infinity
console.log(-Infinity/1);	//-Infinity

//Operations of +Infinity w/ 0
console.log(+Infinity+0);	//+Infinity
console.log(+Infinity-0);	//+Infinity
console.log(+Infinity/0);	//+Infinity

//Operations of -Infinity w/ +ve real numbers
console.log(-Infinity+0);	//-Infinity
console.log(-Infinity-0);	//-Infinity
console.log(-Infinity/0);	//-Infinity

console.log(-Infinity*0);	//NaN
console.log(+Infinity*0);	//NaN

//Operations of Infinities 
console.log(+Infinity+Infinity);	//+Infinity
console.log(+Infinity-Infinity);	//NaN
console.log(+Infinity*(+Infinity)); //+Infinity
console.log(+Infinity*(-Infinity)); //-Infinity
console.log(+Infinity/(+Infinity)); //NaN
console.log(+Infinity/(-Infinity)); //NaN			