const animals = [
  {name: "monkey", size: "big", isAggressive: false, weight :20},
  {name: "lion", size: "big", isAggressive: true, weight :100},
  {name: "tiger", size: "big", isAggressive: true, weight :200},
  {name: "hippo", size: "big", isAggressive: true, weight :20},
  {name: "cat", size: "big", isAggressive: false, weight :20},
]

console.log(animals)
//old
for (let i=0; i,animals.length; i++){
  console.log(animals[i])
}

for (let animal of animals){
  console.log(animal.size)
}