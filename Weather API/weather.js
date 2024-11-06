const API_KEY = 'bca1c9cd6720d56b878dfc42aee68f2b'
const feelLikeDisplay = document.querySelector(".feel-like > span");
const windDisplay = document.querySelector(".wind > span");
const weatherDisplay = document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span");
//const weatherSelect = document.querySelector("#weather-select");
const weatherInput = document.querySelector('#weather-input');
const info = document.querySelector(".info");
const weatherType = document.querySelector(".weather > span")


/*weatherSelect.addEventListener("change",(e)=>{
  //console.log(e.target.value)
  getWeather(e.target.value)
})*/

//함수화

const getWeather = async (city = 'seoul') => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  const response = await axios.get(url);
  console.log(response, response.data.name)
  const { name, main, weather, wind } = response.data; //destructuring 구조화를 깬다, 우변에 들어있는 좌변 이름으로 바로 접근 할 수 있다.
  locationDisplay.innerText = name;//response.data.name;
  temperatureDisplay.innerText = transferTemperature(main.temp);//response.data.main.temp);
  feelLikeDisplay.innerText = transferTemperature(main.feels_like);
  windDisplay.innerText = wind.speed;
  weatherDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}.png`);//src 속성을 바꾸기 위한 setAttribute
  weatherType.innerText = weather[0].main;

}
//async await 은 데이터를 불러오고 다음 동작을 실행하게끔 기다려준다

const transferTemperature = (temp) => {
  return (temp - 273.15).toFixed(1);
}

weatherInput.addEventListener('change', ()=>{
  const city = weatherInput.value;
  getWeather(city);
})

//한글 이름으로 전부 검색하려면 geocoding의 locan_name 을 전부 불러와서 dictionary를 만들어야할거다;;

getWeather();