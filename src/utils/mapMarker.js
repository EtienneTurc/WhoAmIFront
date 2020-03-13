// TO get colors get to this site:
// https://codepen.io/sosuke/pen/Pjoqqp

var colors = {
	"red": 'invert(49%) sepia(13%) saturate(4018%) hue-rotate(312deg) brightness(74%) contrast(96%)',
	"blue-dark": "invert(18%) sepia(40%) saturate(503%) hue-rotate(168deg) brightness(99%) contrast(88%)"
}

exports.getMapMarkerHtml = function (color = 'red', icon = "checkbox-blank-circle") {
	let html = `<div>
	<img src="map-marker.svg" style="height:40px; width:40px; margin-top:-40px; margin-left:-20px;filter:${colors[color]}"/>
	<img src= "icons/${icon}.png" style="position:relative; top:-44px;left:-12px; transform:scale(0.8)"/>
	</div>
	`
	return html
}
