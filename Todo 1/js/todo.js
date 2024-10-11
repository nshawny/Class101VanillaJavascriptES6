const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const todoFavs = document.querySelector(".todo-fav");


//console.log({todoInput})
/*likebutton.addEventListener("click", () => {
  console.log("like clicked");
}) //아직 리스트가 생기기 전이어서 like 가 없는데 뭘 읽어*/



//todoInput.addEventListener("행동","함수")
todoInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    //console.log(todoInput.value)
    /*const li = document.createElement("li");
    li.innerText=todoInput.value;
    todoList.appendChild(li);*/
    generateTodo(todoInput.value)
    todoInput.value = ""
  }
})

const generateTodo = (todo) => {
  const li = document.createElement("li");
  const likeSpan = generateLike();
  const itemSpan = generateItem(todo);
  const manageSpan = generateManage();
  li.appendChild(likeSpan);
  li.appendChild(itemSpan);
  li.appendChild(manageSpan);
  todoList.appendChild(li);
}

const generateDummy = () => {
  generateTodo('더미')
}

const generateLike = () => {
  const span = document.createElement("span");
  span.classList.add("todo-like")
  const icon = document.createElement("i");
  icon.classList.add("material-icons")
  icon.classList.add("like")
  icon.innerText = "favorite_border"
  span.appendChild(icon);
  span.addEventListener("click", (e) => {
    if (icon.innerText === 'favorite_border') {
      icon.innerText = "favorite"
      const li = e.target.parentNode.parentNode;
      todoFavs.appendChild(li)
    } else{
      icon.innerText = "favorite_border"
      const li = e.target.parentNode.parentNode;
      todoList.appendChild(li)
    }
  })
  //console.log(span)
  return span;
}

const generateItem = (todo) => {
  const span = document.createElement("span");
  span.classList.add("todo-item")
  span.innerText = todo;
  return span;
}

const generateManage = () => {
  const spans = document.createElement("span");
  spans.classList.add("todo-manage")
  const icon1 = document.createElement("i");
  icon1.classList.add("material-icons")
  icon1.classList.add("check")
  icon1.innerText = "check"
  const icon2 = document.createElement("i");
  icon2.classList.add("material-icons")
  icon2.classList.add("clear")
  icon2.innerText = "clear"

  icon1.addEventListener("click", (e) => {
    //console.log(e) 타겟(아이콘)의 부모의 부모가 li 이걸 조작
    const li = e.target.parentNode.parentNode;
    li.classList.add('done')
    li.parentNode.appendChild(li)
    //console.log(li)
  })

  icon2.addEventListener("click", (e) => {
    //console.log(e) 타겟(아이콘)의 부모의 부모가 li 이걸 조작
    const li = e.target.parentNode.parentNode;
    li.parentNode.removeChild(li)
    //console.log(li)
  })

  spans.appendChild(icon1);
  spans.appendChild(icon2);
  return spans;
}

generateDummy();