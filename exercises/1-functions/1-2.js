"use strict";
let context;

setup();
drawCross();
drawBox();

function setup(){
    let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawBox(){
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.beginPath()
    context.moveTo(50,50);
    context.lineTo(50, 200);
    context.lineTo(200,200)
    context.lineTo(200,50);
    context.lineTo(50, 50);
    context.stroke();
}

function drawCross(){
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.moveTo(200,50);
    context.lineTo(50,200);
    context.stroke();

}