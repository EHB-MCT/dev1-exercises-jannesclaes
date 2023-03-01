"use strict";
let context;

set_up();

drawLines();

function set_up() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawLines(){
    let margin = 250;
    let width = window.innerWidth - (2 * margin);
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(margin, 20);
    context.lineTo((margin + width),20);
    context.lineTo(margin,40);
    context.lineTo((margin + width),40);
    context.lineTo(margin,60);
    context.lineTo((margin + width),60);
    context.lineTo(margin,80);
    context.lineTo((margin + width),80);
    context.lineTo(margin,100);
    context.lineTo((margin + width),100);
    context.lineTo(margin, 20);
    context.stroke();
}