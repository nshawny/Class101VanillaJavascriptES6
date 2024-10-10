const output = document.getElementById("output")
const wrapper = document.getElementsByClassName("wrapper")
const button = document.querySelector("#button")
const wrapper1 = document.querySelector(".wrapper")
const items = document.querySelectorAll(".item")
const target = document.querySelector(".target")
const title = document.querySelector("h1")
const userID = document.querySelector("#userID")
const point = document.querySelector(".point")
//output.innerText="전송"
//console.log({output})

// wrapper[0].innerText="html"
// console.log(wrapper) 

//console.log(items)

console.log({target})
target.style.color="red";
target.style.fontSize = "36px"//camelcase로 적어야됨. 대쉬 못 이해함

title.addEventListener("click", function(){
  title.style.color="red"
})
//click이 발생할때 function을 발동

userID.addEventListener("input", function(e){
  //console.log(this.value)
  //console.log(e)
  target.innerText = this.value
})
//이벤트 객체 e. 어떤 이벤트가 일어났는지 기록

button.addEventListener("click", ()=>{
  target.style.width = "50px"
  target.style.height = "50px"
  target.style.backgroundColor = userID.value;
  target.style.borderRadius = "50%"
})
//arrow 함수일때 this를 쓰면 window를 가져와버림

items.forEach(item=>{
  //console.log(item)
  item.addEventListener("click",()=>{
    point.innerHTML = item.innerText
    //innerhtml 은 태그 자체를 바꿔버린다.
  })
})