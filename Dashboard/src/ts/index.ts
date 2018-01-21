declare function require(value: string): any;

const sysInfo = require("systeminformation");
const weather = require("weather-js");

// BEGIN CLOCK MANAGEMENT

const refreshClock = (): void => {
	const time: Date = new Date();
	const hours: number = time.getHours();
	const minutes: number = time.getMinutes();
	const seconds: number = time.getSeconds();

	let clockString: string = `${hours}`;
	clockString += seconds % 2 === 0 ? " " : ":";
	clockString += minutes < 10 ? `0${minutes}` : `${minutes}`;

	document.getElementsByClassName("clock")[0].innerHTML = clockString;
}

refreshClock();
setInterval(refreshClock, 1000);
// END CLOCK MANAGEMENT

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

// BEGIN WEATHER
weather.find(
	{
		search: "Lincoln, NE",
		degreeType: "F",
	},
	(err: any, result: any): void => {
		if (err) {
			console.log(err);
		}

		console.log(result);
	}
);
// END WEATHER