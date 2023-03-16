"use strict";

import context from "../../scripts/context.js";


drawBackground();
drawHorizontal();
drawVertival();


function drawBackground(){
    context.fillStyle = "orange";
    context.beginPath();
    context.fillRect(0,0,600,300)
}

function drawHorizontal(){
    context.strokeStyle = "white";
    context.beginPath();
    for (let i = 0; i < 30; i++ ){
        context.moveTo(0,i*10);
        context.lineTo(600, 300 - i*10);
        context.stroke();
    }
}

function drawVertival(){
    context.beginPath();
    for (let i = 0; i <= 60; i++){
        context.moveTo(i*10, 0);
        context.lineTo(600 - i* 10, 300);
        context.stroke();
    }
}