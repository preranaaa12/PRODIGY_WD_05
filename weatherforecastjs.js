const apiKey = "6b2a8ed792083ac4eeffb531cd604100";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	if (response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	}
	else {
		var data = await response.json();

		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "C:\Users\hp\Downloads\cloudy.png";
		}
		else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "C:\Users\hp\Downloads\clear.png";
		}
		else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "C:\Users\hp\Downloads\raining2.png";
		}
		else if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "C:\Users\hp\Downloads\drizzling.png";
		}
		else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "C:\Users\hp\Downloads\mist.png";
		}
		else if (data.weather[0].main == "Snow") {
			weatherIcon.src = "C:\Users\hp\Downloads\mist.jpg";
		}

		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";

	}
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
})