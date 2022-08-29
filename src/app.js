const API_KEY='6c67ac8bbcd200cc4e2cd96824e9cc1f'
let input=document.querySelector('input')
let displayAll=document.querySelector('.displayAll')
let cityDisplay=document.querySelector('.cityDisplay')
let tempDisplay=document.querySelector('.tempDisplay')
let iconDisplay=document.querySelector('.iconDisplay')
let appearDisplay=document.querySelector('.appearDisplay')
input.addEventListener('keyup',e=>{
    let value=e.target.value
    if(e.key==='Enter'){
        GetWeatherReport(value)
    }
})
async function GetWeatherReport(city){
    let Base_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    let data=await fetch(Base_url)
    let response=await data.json()
    console.log(response);
        cityDisplay.textContent=`Place Name : ${response.name}`
        tempDisplay.textContent=`Temp : ${Math.round(response.main.temp-273)}deg C`
        iconDisplay.src=`http://openweathermap.org/img/w/${response.weather[0].icon}.png`
        iconDisplay.alt=`${response.weather[0].description}`
        appearDisplay.textContent=`${response.weather[0].main} in ${response.name}`
}

async function getlocation(){
   window.navigator.geolocation.getCurrentPosition(async ele=>{
            let longitude=ele.coords.longitude
            let latitude=ele.coords.latitude
            console.log(longitude,latitude);
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            console.log(url);
            let data = await window.fetch(url);
            let response = await data.json();
            cityDisplay.textContent=`Current location : ${response.name}`
        tempDisplay.textContent=`Temp : ${Math.round(response.main.temp-273)}deg C`
        iconDisplay.src=`http://openweathermap.org/img/w/${response.weather[0].icon}.png`
        iconDisplay.alt=`${response.weather[0].description}`
        appearDisplay.textContent=`${response.weather[0].main} in ${response.name}`
        })
    }
window.addEventListener("DOMContentLoaded", getlocation)