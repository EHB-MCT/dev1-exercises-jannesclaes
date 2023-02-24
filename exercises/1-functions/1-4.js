"use strict";
let context;

set_up();

drawBigBlue();
drawL();

function set_up(){
    let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawBigBlue(){
    context.fillStyle = "lightblue";
    context.strokeWidth = 2;
    context.strokStyle = "black";
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();
    context.stroke();
}

function drawL(){
    context.beginPath();

    context.moveTo(300, 50);
    context.lineTo(300, 300);
    context.lineTo(50, 300);

    context.moveTo(100,50);
    context.lineTo(100, 250);
    context.lineTo(300, 250);

    context.moveTo(150, 250);
    context.lineTo(150, 100);
    context.lineTo(300, 100);

    context.moveTo(150, 150);
    context.lineTo(250, 150);
    context.lineTo(250, 250);

    context.stroke();
}