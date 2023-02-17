"use strict";

window.onresize = drawOrange;

/* drawLine(); */
drawOrange();
//maakt mooie tekeningen
function drawLine() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.fillStyle = "darkblue";
	context.lineWidth = 5;
	context.beginPath();
	context.rect(50, 50, 100, 100);
	context.fill();
	context.stroke();

	context.beginPath();
	context.fillStyle = "yellow";
	context.ellipse(200, 200, 100, 50, Math.PI / 4, 0, Math.PI * 2);
	context.fill();
	context.stroke();
}

function drawOrange() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.beginPath();
	context.fillStyle = "orange";
	context.arc(100, 100, 50, 0, Math.PI * 2);
	context.fill();
}
