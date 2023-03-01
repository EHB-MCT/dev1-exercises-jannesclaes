"use strict";
let context;

set_up();
drawG()
drawRed();
drawDBlue();
drawLBlue();


function set_up() {
	let canvas = document.querySelector("canvas");
	canvas.width = 1080;
	canvas.height = 1920;
	context = canvas.getContext("2d");
}

function drawG() {
    context.fillStyle = "lightgrey";
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();
}

function drawRed(){
    
    context.fillStyle = "red";
    context.beginPath();
    context.rect(50,100,300,100); 
    context.fill();
}

function drawDBlue(){
    context.fillStyle = "darkblue";
    context.beginPath();
    context.rect(50,50,100,50);
    context.rect(250,50,100,50);
    context.rect(50,200,100,50);
    context.rect(250,200,100,50);
    context.fill()
}

function drawLBlue(){
    context.fillStyle = "lightblue";
    context.beginPath();
    context.rect(50,250,100,100);
    context.rect(250,250,100,100);
    context.fill();
}