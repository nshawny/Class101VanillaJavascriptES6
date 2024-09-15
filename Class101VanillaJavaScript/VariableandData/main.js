console.log("hello")

// var, let, const
// var 은 let과 const로 대체

//var myName="june";
//console.log(window)
//윈도우 객체에 myName이 들어간건 좋지 않아서 let과 const 쓰는게 좋다

//{var}
//괄호 밖에서 재선언 될 수 있는 단점

/*
let name = "june";
name= "mike"
console.log(name)
*/
/*
const name = "june";
name= "mike"
console.log(name)
*/
//상수는 재선언 불가
// 게임 점수들은 let, 바뀔필요없는건 const (오류줄이기)

const name = "june Lee";
const age = 35;
/*
const weight = 86.3;
const isMale = true;
const money = null;
const girlFriend = undefined;
let boyFriend;

console.log(typeof girlFriend)
console.log(typeof boyFriend)
*/
//null은 빈 값, undefined는 미선언
/*
console.log("제 이름은"+name+"이고, 나이는"+age+"입니다.")
console.log(`제 이름은 ${name}이고 "나이" 는 ${age}입니다.`)
*/

console.log(name.substring(0,4).toUpperCase())
console.log(name.split(" "))
const hobbies = ["game","programming","tv","youtube"];
console.log(hobbies.join().split(","))
const homework = "eng,kor,math,history"
console.log(homework.split(",")[0])

//String, Number, boolean, null, undefined, symbol