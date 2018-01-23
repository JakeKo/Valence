declare function require(value: string): any;

const sysInfo = require("systeminformation");
const weather = require("weather-js");

// BEGIN CLOCK MANAGEMENT
const updateClock = (): void => {
	const time: Date = new Date();
	const hours: number = time.getHours();
	const minutes: number = time.getMinutes();

	let clock: string = hours < 10 ? `0${hours}:` : `${hours}:`;
	clock += minutes < 10 ? `0${minutes}` : `${minutes}`;

	document.getElementsByClassName("clock")[0].innerHTML = clock;
}
// END CLOCK MANAGEMENT

// BEGIN WEATHER MANAGEMENT
const updateWeather = (): void => {
	weather.find(
		{
			search: "Lincoln, NE",
			degreeType: "F",
		},
		(error: any, result: any): void => {
			if (error) {
				console.error(error);
				return;
			}

			console.log(result[0]);
			const current: any = result[0].current;
			const forecast: any = result[0].forecast;
			const location: any = result[0].location;

			document.getElementsByClassName("weather-day-label")[0].innerHTML = current.day.toUpperCase();
			document.getElementsByClassName("weather-current-temp")[0].innerHTML = `${current.temperature}&deg;`;
			document.getElementsByClassName("weather-current-location")[0].innerHTML = location.name.toUpperCase();

			document.getElementsByClassName("weather-forecast")[0].innerHTML = "";
			forecast.slice(2).forEach((report: any): void => {
				document.getElementsByClassName("weather-forecast")[0].innerHTML +=
				`<div class="weather-forecast-card">
					<div class="weather-day-label">${report.shortday.toUpperCase()}</div>
					<img class="weather-forecast-symbol" src="./img/CloudSnowMoon.svg">
					<div class="weather-forecast-temp">${report.low} - ${report.high}</div>
				</div>`;
			});
		}
	);
}
// END WEATHER MANAGEMENT

window.onload = (): void => {
	updateClock();
	updateWeather();
	setInterval([updateClock, updateWeather], 60000);
}
















// BEGIN SYSTEM INFORMATION
sysInfo.mem((data: any) => {
	console.log("Memory:");
	console.log(data);
});

sysInfo.battery((data: any) => {
	console.log("Battery:");
	console.log(data);
});

sysInfo.networkInterfaces((data: any) => {
	console.log("Network:");
	console.log(data);
});
// END SYSTEM INFORMATION