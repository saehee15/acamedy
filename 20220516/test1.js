// node.js 로 출력

let a = 1;
let b = 2;
let c;

c = a + b;
console.log(c);

let arr = [1,2,3,4,5,6,7,8,9,10]
arr.filter(a => a%2==0).forEach(element => {
    console.log(element)
})