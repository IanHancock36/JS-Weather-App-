const app = document.querySelector(".weather-app")
const temp = document.querySelector(".temp")
const dateOutput = document.querySelector(".date")
const timeOutput = document.querySelector(".time")
const conditionOutput = document.querySelector(".condition")
const nameOutput = document.querySelector(".name")
const icon = document.querySelector(".icon")
const cloudOutput = document.querySelector(".cloud")
const humidityOutput = document.querySelector(".humidity")
const windOutput = document.querySelector(".wind")
const form = document.getElementById('.locationInput')
const search = document.querySelector(".search")
const btn = document.querySelector(".submit")
const cities = document.querySelector(".city")

// Default city when page loads 
let cityInput = "Nikiski"
//Add the click event to each city in the panel
cities.forEach((city)=> {
    city.addEventListener('click',(e)=>{
        cityInput = e.target.innerHtml 
// this is the function below that fetches the weather data from the api call.
        fetchWeatherData()
        app.style.opacity = "0"    
    })
})
// The submit event to the form below

form.addEventListener('submit', (e)=> {
    if(search.value.length == 0 ){
        alert('Please enter a city name')
    }else{
        cityInput = search.value
        fetchWeatherData()
        search.value = ""
        app.style.opacity ="0"

    }
})