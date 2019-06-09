const sum = (a, b) =>  a + b;
console.log(sum(1,2));//3

const link = function (point = 10, url = 'http://google.com') {
    console.log(point);
    console.log(url);
}

link();//point=10, url=http://google.com
link(1,'this is url');//point=1,url=this is url

const addOne = function(value){
    return value + 1;
}

const addOneAndTwo = function(value, fn){
    return fn(value) + 2;
}

console.log(addOneAndTwo(10, addOne)) //13


// 是函式的一種隱藏機制，實際上對於傳入的參數值是有一個隱藏在背後的物件，
// 名稱為arguments，它會對傳入參數實際值進行保存，可以直接在函式內的語句中直接取用。
// arguments雖是一個物件資料類型，但它有"陣列"的一些基本特性，
// 不過缺少大部份陣列中的方法，所以被稱作"pseudo-array"(偽陣列)。
// function total(){
//     return arguments[0] + arguments[1];
// }

// console.log(total(1,100));//101

//建議不使用 arguments

function count(...value){
    return value.reduce((pre,curr)=>pre + curr);
}

console.log(count(1, 2, 3))  //6
console.log(count(1, 2))    //3
console.log(count(1, 2, 3, 4))  //10
console.log(count('1', '2', '3'))  //123
console.log(count('1', '2')) //12
console.log(count('1', '2', '3', '4'))  //1234