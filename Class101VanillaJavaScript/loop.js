const animals = [
  {name: "monkey", size: "medium", isAggressive: false, weight :20},
  {name: "lion", size: "big", isAggressive: true, weight :100},
  {name: "tiger", size: "big", isAggressive: true, weight :200},
  {name: "hippo", size: "big", isAggressive: true, weight :1000},
  {name: "cat", size: "small", isAggressive: false, weight :10},
]
//console.log(animals)
//old
/*
for (let i=0; i<animals.length; i++){
  console.log(animals[i])
}
for (let animal of animals){
  console.log(animal.size)
}
*/
//forEach, map, reduce, filter

//forEach
/*
animals.forEach(function(animal, index){
  console.log(animal, index)
})
*/

//map

  /*
const mappedAnimal = animals.map(function(animal){
  //return {name: animal.name, size: animal.size}
  return `${animal.name} is ${animal.size}`
})
*/
//arrow function 으로 많은걸 생략할수있다.
/*
const mappedAnimal = animals.map(animal=>
  //return {name: animal.name, size: animal.size}
  `${animal.name} is ${animal.size}`
)
console.log(mappedAnimal)
*/

//filter
const filteredAnimal = animals.filter(animal=>animal.weight>=200&&animal.size==='big')
console.log(filteredAnimal)

//reduce
const reducedAnimal = animals.reduce((acc, cur)=>acc+cur.weight,0)
console.log(reducedAnimal)