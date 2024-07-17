let p = document.querySelector('.time')
let secondHand = document.querySelector('.second-hand')
let minHand = document.querySelector('.min-hand')
let hourHand = document.querySelector('.hour-hand')

function setCurrentTime() {
	const time = getTime()
	const secGrads = (time.seconds * 360) / 60 - 90
	const minGrads = (time.minutes * 360) / 60 - 90
	const hourGrads = (time.hours * 360) / 12 - 90
	secondHand.style.transform = `rotate(${secGrads}deg)`
	minHand.style.transform = `rotate(${minGrads}deg)`
	hourHand.style.transform = `rotate(${hourGrads}deg)`
}

function setTime() {
	const time = getTime()
	p.innerText = `${time.hours} : ${time.minutes} : ${time.seconds}`

	const secGrads = (time.seconds / 60) * 360 - 90
	const minGrads = (time.minutes * 360) / 60 - 90
	const hourGrads = (time.hours * 360) / 12 - 90
	secondHand.style.transform = `rotate(${secGrads}deg)`
	minHand.style.transform = `rotate(${minGrads}deg)`
	hourHand.style.transform = `rotate(${hourGrads}deg)`
	// const grads = (time.seconds * 360) / 60 - 90
	// secondHand.style.transform = `rotate(${grads}deg)`
	// console.log({ grads })
}
function setMinutes() {
	const time = getTime()
	const grads = (time.minutes * 360) / 60 - 90
	minHand.style.transform = `rotate(${grads}deg)`
}
function setHour() {
	const time = getTime()
	const grads = (time.hours * 360) / 12
	minHand.style.transform = `rotate(${grads}deg)`
}

setInterval(setTime, 1000)

// utils

function getTime() {
	const date = new Date()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	return { hours, minutes, seconds }
}

window.addEventListener('DOMContentLoaded', () => {
	setCurrentTime()
})
