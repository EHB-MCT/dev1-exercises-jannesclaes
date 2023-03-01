"use strict";
let context;

set_up();

drawrectangele();
drawrectangele2();
drawrectangele3();
drawrectangele4();
drawrectangele5();
drawrectangele6();
drawrectangele7();
drawrectangele8();

function set_up() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function getRandomColor() {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function drawrectangele() {
	context.fillStyle = getRandomColor();
	context.beginPath();
	context.rect(50, 50, 500, 500);
	context.fill();
}

function drawrectangele2() {
	context.fillStyle = getRandomColor();
	context.beginPath();
	context.rect(80, 80, 440, 440);
	context.fill();
}

function drawrectangele3() {
	context.fillStyle = getRandomColor();
	context.beginPath();
	context.rect(110, 110, 380, 380);
	context.fill();
}

function drawrectangele4() {
	context.fillStyle = getRandomColor();
	context.beginPath();
	context.rect(140, 140, 320, 320);
	context.fill();
}
function drawrectangele5() {
	context.fillStyle = getRandomColor();
	context.beginPath();
	context.rect(170, 170, 260, 260);
	context.fill();
}
function drawrectangele6() {
	context.fillStyle = getRandomColor();
	context.beginPath();
	context.rect(200, 200, 200, 200);
	context.fill();
}
function drawrectangele7() {
	context.fillStyle = getRandomColor();
	context.beginPath();
	context.rect(230, 230, 140, 140);
	context.fill();
}
function drawrectangele8() {
	context.fillStyle = getRandomColor();
	context.beginPath();
	context.rect(260, 260, 80, 80);
	context.fill();
}
