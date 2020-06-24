//Understanding automatic type conversion
//Created by asxyzp

//Adding numbers w/ string 
console.log(1+2+3+"BogaBoga");	//6BogaBoga
console.log("BogaBoga"+1+2+3);	//BogaBoga123
console.log();

//Multiplying numbers w/ string
console.log("Hello"*2);			//NaN
console.log(2*"Hello");			//NaN
console.log();

//Automatic type conversion of null to 0
console.log(1+null);			//1
console.log(1-null);			//1
console.log(null+1);			//1
console.log(null-1);			//-1
console.log(null*1);			//0
console.log(1*null);			//0
console.log(+1/null);			//+Infinity
console.log(-1/null);			//-Infinity
console.log(""+null);			//null (string)
console.log(null+"");			//null (string)
console.log();

//Automatic type conversion to numbers to true/false
console.log(false==0);
console.log(true==1);
console.log(false===0);
console.log(true===1);
console.log(!23);
console.log(!0);
console.log();

//Automatic type conversion of null/undefined
console.log(null == null);
console.log(null == undefined);
console.log(undefined == null);
console.log(undefined == undefined);
console.log(null == 0);
console.log(undefined == 0);
console.log();

//Type conversion of string/numbers/undefined/null to boolean
var strToBool = new Boolean("Hello");
console.log(strToBool, typeof strToBool , strToBool.valueOf(), typeof strToBool.valueOf());
strToBool = new Boolean("");
console.log(strToBool, typeof strToBool , strToBool.valueOf(), typeof strToBool.valueOf());
strToBool = new Boolean(null);
console.log(strToBool, typeof strToBool , strToBool.valueOf(), typeof strToBool.valueOf());
strToBool = new Boolean(undefined);
console.log(strToBool, typeof strToBool , strToBool.valueOf(), typeof strToBool.valueOf());
strToBool = new Boolean(23);
console.log(strToBool, typeof strToBool , strToBool.valueOf(), typeof strToBool.valueOf());
strToBool = new Boolean(0);
console.log(strToBool, typeof strToBool , strToBool.valueOf(), typeof strToBool.valueOf());
console.log();

//Type conversion of null/undefined to boolean
var nullToBool = new Boolean(null);
console.log(nullToBool, typeof nullToBool, nullToBool.valueOf(), typeof nullToBool.valueOf());
var undefinedToBool = new Boolean(undefined);
console.log(undefinedToBool, typeof undefinedToBool, undefinedToBool.valueOf(), typeof undefinedToBool.valueOf());
console.log();

//Logical OR w/ LHO & RHO having different data types
console.log(null||"user");	//null = false, "user" = true
console.log(""||"user");	//"" = false, "user" = true
console.log("user"||null);	//"user" = true, null = false
//When both values are true then LHO will be returned
console.log("user"||123);
console.log(123||"user");
//When both values are false then RHO will be returned
console.log(""||0);
console.log(0||null);