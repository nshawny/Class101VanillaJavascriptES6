// Object key, value
const animal = {
  name: "monkey",
  weight: 10,
  food: ["banana","grape","nuts"],
  location: {
    country: "Congo",
    home: "forest",
    isAfrica: true,
  },
}

console.log(animal["weight"])
console.log(animal.food[1])
console.log(animal.location.country)

//const {name, weight, food }=animal;
//deconstructor 임

//alert(animal)//object object를 알려줘버림..

//JSON
const animalJSON = JSON.stringify(animal)
console.log(animalJSON)
console.log(animalJSON.name)
console.log(JSON.parse(animalJSON).name)
//파싱: 정보 추출 가공