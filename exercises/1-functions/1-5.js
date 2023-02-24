"use strict";
let context;

set_up();


drawSky();
drawSun();
drawSea();


function set_up(){
    let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawSky(){
    context.fillStyle = "orange";
    context.beginPath();
    context.rect(50,50,250,250);

    context.fill();
}

function drawSun(){
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(175, 225, 75, 0, Math.PI, true);
    context.fill();
}

function drawSea(){
    context.fillStyle = "blue";
    context.beginPath();
    context.rect(50, 225, 250, 75);
    context.fill();
}



