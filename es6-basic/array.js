const oldArray = [1,2,3];

//slice(分割)原本是用在分割陣列為子陣列用的，當用0當參數或不加參數，相當於淺拷貝，這個方式是目前是效率較好的方式
const newArray = oldArray.slice();
console.log(newArray);

//判斷是否為array, 推薦使用
console.log(Array.isArray(newArray));//true

//使用constructor判斷是否為array
console.log(newArray.constructor===Array);//true

//清空陣列
let aArray = ['apple', 'banana', 'orange', 'mongo']

//第一種
aArray = []

//第二種
aArray.length = 0

//第三種
while(aArray.length > 0) {
    aArray.pop();
}

//第四種
aArray.splice(0, aArray.length)
console.log(Array);

//array indexof
const bArray = ['a', 'b', 'c', 'a', 'c', 'c'];
console.log(bArray.indexOf('a')) //0
console.log(bArray.indexOf('c')) //2
console.log(bArray.indexOf('c', 3)) //4
console.log(bArray.indexOf('a', -3)) //3，-3代表要從索引值3開始搜尋

//pop and push
const cArray = [1,2,3];
const popValue = cArray.pop();
console.log(cArray);//[1,2]
console.log(popValue);//3

const dArray = [1,2,3];
dArray.push(4);
console.log(dArray);//[1,2,3,4]

const pushValue = dArray.push(5);
console.log(pushValue);//5 

//print array
const eArray = [1,2,3,4,5];
eArray.forEach(function(value,index,array){
    console.log(index,value);
});

//map
const fArray = [1,2,3,4,5];
const mapArray = fArray.map(function(value,index,array){
    return 100+ value;
});
console.log(mapArray);//[ 101, 102, 103, 104, 105 ]

//reduce
const gArray = [0,1,2,3,4];
const total = gArray.reduce(function(pValue,value,index,array){
    console.log('pValue = ' , pValue, ' value = ', value, ' index = ', index);
    return pValue + value;
})

console.log(gArray);//[0,1,2,3,4]
console.log(total);//10

const total2 = gArray.reduce(function(pValue,value,index,array){
    console.log('pValue = ', pValue, ' value = ', value, ' index = ', index);
    return pValue + value;
},10);

console.log(total2);//20

//order
const fruitArray = ['蘋果', '芒果', '櫻桃', '香蕉', '大香蕉', '小香蕉' ];

fruitArray.sort();
console.log(fruitArray);//[ '大香蕉', '小香蕉', '櫻桃', '芒果', '蘋果', '香蕉' ]

fruitArray.sort(function(a,b){
    return a.localeCompare(b,'zh-Hans-TW');
});
console.log(fruitArray);//["大香蕉", "芒果", "蘋果", "香蕉", "小香蕉", "櫻桃"]

fruitArray.sort(function(a,b){
    return a.localeCompare(b,'zh-Hant-TW-u-co-stroke');
});
console.log(fruitArray);//["大香蕉", "芒果", "蘋果", "香蕉", "小香蕉", "櫻桃"]

//filter
const hArray = [1,3,5,7,10,22];
const iArray = hArray.filter(function(value,index,array){
    return value>6;
});

console.log(hArray);//[1,3,5,7,10,22];
console.log(iArray);//[7,10,22];



