// Array

const users = ["june", "mike", "james", "jane", 10, 22];
//console.log(users[users.length-1])
users[6] = "chulsoo"
users.push("soo")
users.unshift("me")

console.log(users)

console.log(users.indexOf("chulsoo"))
users[users.indexOf("chulsoo")] = "kim"

console.log(users)

console.log(Array.isArray(users))
console.log(Array.isArray("soo"))

users.splice(0, 1);
users.splice(2, 2);
//0번부터 하나, 2번부터 2개
console.log(users)

// const 여도 바꿀 수 있는 이유? 참조 요소를 변경한거지 변수 자체를 재정의한게 아니기 때문

console.log(...users)
//spread operator