"use strict";
let context;

set_up();




drawOrangeBack();
drawWhiteBall1();
drawWhiteBall2();
drawWhiteBall3();
drawWhiteBall4();
drawBorder();
drawDiagonalToR();
drawDiagonalToL()




function set_up(){
    let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawOrangeBack(){
    context.fillStyle = "orange";
    context.beginPath();
    context.rect(50,50,300,300);

    context.fill();
}

function drawWhiteBall1(){
    context.fillStyle = "white";
    context.beginPath();
    context.arc(50,50,150,0,Math.PI);
    context.fill();
}

function drawWhiteBall2(){
    context.beginPath();
    context.arc(50,350,150,0,Math.PI, true);
    context.fill();
}

function drawWhiteBall3(){
    context.beginPath();
    context.arc(350,50,150,0,Math.PI);
    context.fill();
}

function drawWhiteBall4(){
    context.beginPath();
    context.arc(350,350,150, 0, Math.PI,true);
    context.fill();
}

function drawBorder(){
    context.strokeStyle = "orange";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(55,55);
    context.lineTo(55,345);
    context.lineTo(345,345);
    context.lineTo(345,55);
    context.lineTo(52.5,55);
    context.stroke();
}

function drawDiagonalToR(){
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(60,60);
    context.lineTo(180,180);

    context.moveTo(220,220);
    context.lineTo(340,340)

    context.moveTo(60,97.5);
    context.lineTo(302.5, 340);

    context.moveTo(60,135);
    context.lineTo(265,340);

    context.moveTo(97.5, 60);
    context.lineTo(340,302.5);

    context.moveTo(135,60);
    context.lineTo(340,265);

    context.stroke();
}

function drawDiagonalToL(){
    context.beginPath();
    context.moveTo(340,60);
    context.lineTo(220,180);

    context.moveTo(180,220);
    context.lineTo(60,340)

    context.moveTo(302.5,60);
    context.lineTo(60, 302.5);

    context.moveTo(265,60);
    context.lineTo(60,265);

    context.moveTo(340, 97.5);
    context.lineTo(97.5,340);

    context.moveTo(340,135);
    context.lineTo(135,340);

    context.stroke();
}