function getDayInSeconds(date) {
	let millisecondsInDay = 1000 * 3600 * 24;
	return Math.floor(date / millisecondsInDay) * millisecondsInDay;
}

// TO get colors get to this site:
// https://codepen.io/sosuke/pen/Pjoqqp
var colors = {
	"red": 'invert(49%) sepia(13%) saturate(4018%) hue-rotate(312deg) brightness(74%) contrast(96%)',
	"blue-dark": "invert(18%) sepia(40%) saturate(503%) hue-rotate(168deg) brightness(99%) contrast(88%)",
	"white": "invert(99%) sepia(1%) saturate(7500%) hue-rotate(191deg) brightness(107%) contrast(102%)"
}

function getColorFilter(color) {
	return colors[color]
}

export { getColorFilter, getDayInSeconds };
