//Understanding comparison operators
//Created by asxyzp

//<
console.log(1<2);
console.log(1<0);
console.log(1<'2');
console.log();

//>
console.log(1>0);
console.log(1>2);
console.log(1>'2');
console.log();

//<=
console.log(1<=1);
console.log(1<=2);
console.log(1<=0);
console.log(1<='0');
console.log();

//>=
console.log(1>=0);
console.log(1>=1);
console.log(1>=2);
console.log(1>='2');
console.log();

//==
console.log(1==1);
console.log(1==0);
console.log(1=='1');
console.log();

//!=
console.log(1!=1);
console.log(1!=0);
console.log(1!='1');
console.log(1!='2');
console.log();

//String comparison
console.log("AAAAAB"<"AAAAAC");
console.log("AAAAAC"<"AAAAAB");
console.log("a">"A");
console.log();

//NaN is a product of nonsensical computation
console.log(NaN===NaN);
console.log(NaN!==NaN);