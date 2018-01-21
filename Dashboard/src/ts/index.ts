const display = (string: string): void => {
	document.getElementsByTagName("body")[0].innerHTML += `<br>${string}`;
}

const clear = (): void => {
	document.getElementsByTagName("body")[0].innerHTML = "";
}

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
	const time = refreshTime();
	display(`${time.hours}:${time.minutes}:${time.seconds}`);
}

setInterval(refreshClock, 1000);
