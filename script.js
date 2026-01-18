const Apikey = "e48cf03f59b6cb89d073828ac385f34d";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const responce = await fetch(ApiUrl + city + `&appid=${Apikey}` )

    if(responce.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await responce.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

    }

 
}


SearchBtn.addEventListener("click", ()=>{
    checkWeather(SearchBox.value);
})

