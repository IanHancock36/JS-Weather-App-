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
    //prevents default form behaving patters
    e.preventDefault();
})
// the function that returns the day of the week

function dayOfWeek(day, month, year){
    const weekDay = [
        "Sunday",
        "Monday",
        "TuesDay",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]; 
    return weekday[new Date(`${day},${month},${year}`.getDay())]
}

function fetchWeatherData(){
    fetch(`http://api.weatherapi.com/v1/current.jsonkey=d579175e97444fc0b54111008211310=${cityInput}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        temp.innerHTML = data.current.temp_f + "&#176;"
        conditionOutput.innerHTML = data.current.condition.text;
        const date = data.location.localtime;
        const y = parseInt(date.substring(0,4))
        //parsing the string returning the integre
        const m = parseInt(date.substring(5,2))
        const d = parseInt(date.substring(8,2))
        const time = date.substring(11);
        dateOutput.innerHTML =`${dayOfWeek(d,m,y)} ${d},${m},${y}`
        timeOutput.innerHTML = time;
        nameOutput.innerHTML = data.locatio.name;
        const icon= data.current.condition.icon.substring(
            "//cdn.weatherapi.com/weather/64x64/".length)
            icon.src = "./icons" + iconId
            cloudOutput.innerHTM = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidty + "%"
            windOutput.innerHTML = data.current.wind_mph + "mph"
            
    })
}

// maybe look at using createTextNode instead of innerHtml... 

