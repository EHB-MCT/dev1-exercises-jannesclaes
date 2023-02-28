"use strict";
let context;

set_up();
drawSpring(120,25);

function set_up() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}


function drawSpring(x,y){
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo((canvas.width)/2, y);
    context.lineTo(((canvas.width)/2)+x, y);
    context.lineTo(((canvas.width)/2)-x, y*2);
    context.lineTo(((canvas.width)/2)+x, y*2);
    context.lineTo(((canvas.width)/2)-x, y*3);
    context.lineTo(((canvas.width)/2)+x, y*3);
    context.lineTo(((canvas.width)/2)-x, y*4);
    context.lineTo(((canvas.width)/2)+x, y*4);
    context.lineTo(((canvas.width)/2)-x, y*5);
    context.lineTo(((canvas.width)/2)+x, y*5);
    context.lineTo(((canvas.width)/2)-x, y);
    context.lineTo(((canvas.width))/2,y);
    context.stroke();
}
