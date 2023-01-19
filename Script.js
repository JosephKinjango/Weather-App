let weather = {
    apiKey: "2f5af5d0266632eb24a778e21be69e52",
    fecthWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city 
            + "&units=metric&appid="
            + this.apiKey
            ).then((Response) => Response.json()).then((data) =>this.displayWeather(data));

    },
    displayWeather: function(data){
        const {name }= data;
        const {icon , description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
    
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity+"%";document.querySelector(".wind").innerText = "Wind speed " + speed +" km/h"; 
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+ name +"')"
        
    },
    search: function() {
        this.fecthWeather(document.querySelector(".search-bar").value);
    }
};
    document
    .querySelector(".search button")
    .addEventListener("click", function (){
    weather.search();
});
    document.querySelector(".search-bar")
    .addEventListener("keyup", function (event){
    if (event.key == "Enter"){
        weather.search();
    }
});
weather.fecthWeather("Seattle");