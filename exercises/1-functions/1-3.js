"use strict";
let context;

setup();

drawBigRed();
drawBigBlack();
drawSmallRed();
drawSmallBlack();

function setup(){
    let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawBigRed(){
    context.strokeStyle = "red";
    context.strokWidth = 1;
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,50);
    context.lineTo(200, 200);
    context.lineTo(50,200);
    context.lineTo(50,50);

    context.moveTo(200,200);
    context.lineTo(200,350);
    context.lineTo(350,350);
    context.lineTo(350,200);
    context.lineTo(200,200);
    context.stroke();
}

function drawBigBlack(){
    context.fillStyle = "black";
    context.beginPath();
    context.rect(125,125,150,150);
    context.fill();
}

function drawSmallRed(){
    context.strokeStyle = "red";
    context.strokWidth = 1;
    context.beginPath();
    context.moveTo(275,125);
    context.lineTo(325,125);
    context.lineTo(325,75);
    context.lineTo(275, 75);
    context.lineTo(275,125);

    context.moveTo(125,275);
    context.lineTo(125, 325);
    context.lineTo(75,325);
    context.lineTo(75,275);
    context.lineTo(125,275);

    context.stroke();
}

function drawSmallBlack(){
    context.fillStyle = "black";
    context.beginPath();
    context.rect(325, 50 , 25, 25);
    context.rect(50,325 ,25,25);
    context.fill();
}