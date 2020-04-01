import { getColorFilter } from "./utils"

let getMapMarkerHtml = function (color = 'red', icon = "checkbox-blank-circle") {
	let html = `<div>
	<img src="map-marker.svg" style="height:40px; width:40px; margin-top:-40px; margin-left:-20px;filter:${getColorFilter(color)}"/>
	<img src= "icons/${icon}.png" style="position:relative; top:-44px;left:-12px; transform:scale(0.8)"/>
	</div>
	`
	return html
}

export { getMapMarkerHtml }
