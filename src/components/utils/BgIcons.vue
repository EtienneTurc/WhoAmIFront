<template>
	<div class="bg-icons-class" id="bg-icons-id"></div>
</template>

<script>
export default {
	data() {
		return {
			icons: ["bike", "car"],
			nb_icons: 5,
			elements: [],
			height: 0,
			width: 0
		}
	},
	mounted() {
		this.initialize()
		this.animate()
	},
	methods: {
		initialize() {
			this.height = this.getHeight()
			this.width = this.getWidth()

			for (let i = 0; i < this.nb_icons; i++) {
				this.newElement()
			}
		},
		newElement() {
			let icon = this.icons[Math.floor(Math.random() * this.icons.length)]
			let img = document.createElement("img")
			img.src = `icons/${icon}.png`
			img.style.position = "absolute"

			let x = Math.floor(Math.random() * this.width)
			let y = Math.floor(Math.random() * this.height)
			img.style.left = `${x}px`
			img.style.top = `${y}px`
			img.style.left = `300px`
			img.style.top = `500px`

			let theta = Math.floor(Math.random() * 90 - 45)
			img.style.transform = `rotate(${theta}deg)`

			let direction = [Math.random() * 2 - 1, Math.random() * 2 - 1]
			let element = {
				html: img,
				x: x,
				y: y,
				theha: theta,
				direction: direction
			}
			document.getElementById("bg-icons-id").appendChild(img)
			this.elements.push(element)
			return element
		},
		animate() {
			let id = setInterval(this.frame, 50)
		},
		frame() {
			for (let el of this.elements) {
				if (Math.random() < 0.01) {
					el.direction[0] = Math.random() * 2 - 1
					el.direction[1] = Math.random() * 2 - 1
				}

				el.x += el.direction[0] / 2
				el.x = this.mod(el.x, this.width)
				el.y += el.direction[1] / 2
				el.y = this.mod(el.y, this.height)

				el.html.style.left = `${el.x}px`
				el.html.style.top = `${el.y}px`
			}
		},
		getWidth() {
			return Math.max(
				document.body.scrollWidth,
				document.documentElement.scrollWidth,
				document.documentElement.offsetWidth,
				document.documentElement.clientWidth
			)
		},
		getHeight() {
			return Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight,
				document.documentElement.clientHeight
			)
		},
		mod(x, n) {
			return ((x % n) + n) % n
		}
	}
}
</script>

<style>
</style>
