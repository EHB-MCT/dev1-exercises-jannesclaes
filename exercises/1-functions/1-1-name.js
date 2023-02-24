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
    context.fillStyle = "red";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(30, 20, 10,50);
    context.rect(15, 60, 15,10); 
    context.fill();
}

function drawA(){
    context.fillStyle = "orange";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(50, 20, 10,50);
    context.rect(75, 20, 10,50);
    context.rect(50, 20, 25,10);
    context.rect(50, 40, 25,10);
    context.fill();
}

function drawNy(){
    context.fillStyle = "yellow";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(95, 20, 10, 50);
    context.rect(120, 25, 10, 45);
    context.rect(95, 25, 25, 10);
    context.fill();
}

function drawNg(){
    context.fillStyle = "green";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(140, 20, 10, 50);
    context.rect(165, 25, 10, 45);
    context.rect(140, 25, 25, 10);
    context.fill();
}

function drawE(){
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(185, 20, 10, 50);
    context.rect(185, 20, 30, 10);
    context.rect(185, 40, 30, 10);
    context.rect(185, 60, 30, 10);
    context.fill();
}

function drawS(){
    context.fillStyle = "indigo";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(225, 20, 30, 10);
    context.rect(225, 20, 10, 20);
    context.rect(225, 40, 30, 10);
    context.rect(245, 40, 10, 20);
    context.rect(225, 60, 30, 10);
    context.fill();
}