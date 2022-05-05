function replaceString(city) {
    let newCity = city.replace(city.charAt(0),city.charAt(0).toLowerCase());
    newCity = newCity.replaceAll(" ","-");
    return newCity;
}

async function getWeather() {
    var cities = document.getElementsByClassName("city");

    for (var i = 0; i < cities.length; i++) {
        city = cities[i].innerHTML
        console.log(city);
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=384930302351abf321c53f16b66e07ea&units=metric",
        {method:"GET"});
    
        let jsonObj = await response.json();
        city = replaceString(city);
        document.getElementById("weather-temp-"+city).innerText= "La temperatura di oggi è " + jsonObj.main.temp + "°";
    }
}

getWeather();