const a = 10;
const b = 5;
//相當於 const foo = a ? a : b
const foo = a || b;
console.log(foo);

//相當於 const c = a ? a : b
const c = a || b;
console.log(c);

// // 壞寫法
// var isYes = answer === 1 ? true : false

// // 好寫法
// var isYes = answer === 1

// // 壞寫法
// var isNo = answer === 1 ? false : true

// // 好寫法
// var isNo = answer !== 1

// // 壞寫法
// var foo = bar ? bar : 1

// // 好寫法
// var foo = bar || 1