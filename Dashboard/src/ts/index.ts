declare function require(value: string): any;

const sysInfo = require("systeminformation");
const weather = require("weather-js");

const display = (string: string): void => {
	document.getElementsByTagName("body")[0].innerHTML += `${string}<br>`;
}

const clear = (): void => {
	document.getElementsByTagName("body")[0].innerHTML = "";
}

// BEGIN CLOCK MANAGEMENT
const refreshTime = (): any => {
	const padLeft = (value: number) => value < 10 ? `0${value}` : `${value}`;
	const now: Date = new Date();

	return {
		hours: padLeft(now.getHours()),
		minutes: padLeft(now.getMinutes()),
		seconds: padLeft(now.getSeconds()),
	};
}

const refreshClock = (): void => {
	clear();
	const time: any = refreshTime();
	display(`${time.hours}:${time.minutes}:${time.seconds}`);
}

// refreshClock();
// setInterval(refreshClock, 1000);
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