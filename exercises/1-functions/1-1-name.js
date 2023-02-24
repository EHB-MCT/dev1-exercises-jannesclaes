"use strict";
let context;

setup();

drawJ();
drawA();
drawNy();
drawNg();
drawE();
drawS();

function setup(){
    let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawJ(){
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(35, 20);
    context.lineTo(35,55);
    context.lineTo(15,55); 
    context.stroke();
}

function drawA(){
    context.strokeStyle = "orange";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(50, 20);
    context.lineTo(50, 60);
    context.moveTo(50,25);
    context.lineTo(75,25)
    context.lineTo(75, 60);
    context.moveTo(50, 40);
    context.lineTo(75, 40);
    context.stroke();
}

function drawNy(){
    context.strokeStyle = "yellow";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(90, 60);
    context.lineTo(90, 20);
    context.moveTo(90, 28);
    context.lineTo(115, 28);
    context.lineTo(115, 60);
    context.stroke();
}

function drawNg(){
    context.strokeStyle = "green";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(130, 20);
    context.lineTo(130, 60);
    context.moveTo(130, 28);
    context.lineTo(155, 28);
    context.lineTo(155, 60);
    context.stroke();
}

function drawE(){
    context.strokeStyle = "blue";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(170, 20);
    context.lineTo(170, 55);
    context.lineTo(195, 55);
    context.moveTo(170, 25);
    context.lineTo(195, 25)
    context.moveTo(170, 40);
    context.lineTo(185, 40);
    context.stroke();
}

function drawS(){
    context.strokeStyle = "indigo";
    context.lineWidth =10;
    context.beginPath();
    context.moveTo(230, 25);
    context.lineTo(205, 25);
    context.lineTo(205, 40);
    context.lineTo(225, 40);
    context.lineTo(225, 55);
    context.lineTo(200, 55);
    context.stroke();
}