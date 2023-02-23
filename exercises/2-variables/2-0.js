"use strict";
let context;

setup();
drawHouse();
drawTree(300,500);
drawTree(400,200);
drawTree(400,400);



function setup() {
    let canvas = document.querySelector('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext('2d');

}

function drawTree(x,y){
    
    context.fillStyle = "#a0522d";
    context.fillRect(x,y,20,100);
    context.fillStyle = "#3cb371"
    context.beginPath();
    context.ellipse(x + 10, y - 50,40,80,0,0, Math.PI * 2);
    context.fill();

}



function drawHouse() {
    

    let x = 200;
    let y = 200;

	context.fillStyle = "#a52a2a"
	context.fillRect(x, y, 100, 100);

    context.fillStyle = "#af8a5a"
    context.fillRect(x + 50, y + 50 ,25,50)

    context.fillStyle = "#666666";
    context.beginPath();
    context.moveTo(x ,y);
    context.lineTo(x + 50 ,y - 50);
    context.lineTo(x + 100 ,y);
    context.fill();

}
