/*
const x="10";

console.log(x)

if (x==10){
  console.log("x is 10")
}

if (x===10){
  console.log("x is 10")
  //출력 안 됨. 자료형도 일치해야함. 세개 사용 습관
} else if (x === 20){
  console.log("x is 20")
} else {
  console.log("x is not 10")
}
*/

/*
const age = 20;
let group = ""
age > 20 ? group = "senior" : group = "junior";

console.log(group)
*/
/*
const animal = "monkey";

switch(animal){
  case 'lion':
    console.log("lion is king of jungle")
    break;
  case 'tiger':
    break;
  case 'monkey':
    console.log('medium');
}
*/

/*
function add(a, b){
 return a+b;
}
console.log(add(5,6))
console.log(add())
console.log(add(a=0,b=0))
//여기다 적으면 window 객체에 담겨서 안정적이지 않음
*/

const sum = function(a,b){return a+b}

const add = (a,b) => { return a+b}
//const에 담았기 때문에 window 객체에 포함되지 않음
const added = a=>a+5;


console.log(window)