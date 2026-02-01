const apiKey = "e48cf03f59b6cb89d073828ac385f34d"; 

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText =
        `Temperature: ${data.main.temp} °C`;

      document.getElementById("humidity").innerText =
        `Humidity: ${data.main.humidity}%`;

      document.getElementById("wind").innerText =
        `Wind Speed: ${data.wind.speed} m/s`;

      const weatherCondition = data.weather[0].main;
      const icon = document.getElementById("weatherIcon");

      if (weatherCondition === "Clear") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
      } else if (weatherCondition === "Clouds") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
      } else if (weatherCondition === "Rain") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/3076/3076129.png";
      } else if (weatherCondition === "Snow") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png";
      } else {
        icon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
      }
    })
    .catch(error => {
      alert("City not found");
    });
}
document.getElementById("cityInput")
.addEventListener("keypress",function(event){
  if(event.key === "Enter"){
    getWeather();
  }
});