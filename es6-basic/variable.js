//const的變數是不可變的
const a = 10;

//這邊若在改成a則會出錯
//a = 11;

//let變數是可變的
let b = 5;

b = 3;
console.log(b);

//單行註解

/*
多行註解
*/

console.log(1=='1');//it will be true
console.log(1==="1");//it will be false

console.log(typeof 37);// number
console.log(typeof NaN);// number
console.log(typeof '') //'string'
console.log(typeof (typeof 1)) //'string'
console.log(typeof true) //'boolean'
console.log(typeof null) //'object'
console.log(typeof function(){}) //'function'

console.log(1/0) //Infinity
console.log(1/-0) //-Infinity，0有分+0與-0，這有點算陷阱
console.log(Infinity - Infinity) //NaN


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

const d = ~10 //d is -11
console.log(d);

const x = 0.2 + 0.1
console.log(x)//0.30000000000000004
const y = 0.3 - 0.1
console.log(y)//0.19999999999999998

const firstName = 'Eddy'
console.log(`Hello ${firstName}!
Do you want some
rabbits tonight?`)