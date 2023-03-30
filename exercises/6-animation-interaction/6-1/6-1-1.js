"use strict";
import context from "./context.js";
/**
 * 
 * @param {number} x1  x start
 * @param {number} y1  y start
 * @param {number} x2  x einde
 * @param {number} y2  y einde
 /
export function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function strokeCircle(x,y,r){
    context.beginPath();
    context.strokeStyle = "white";
    context.arc(x,y,r,0,Math.PI2,false);
    context.stroke();
}



export function fillCircle(x,y,r){
    context.beginPath();
    context.arc(x,y,r,0,2*Math.PI);
    context.fill();
}

export function calculateDistance(x1,y1,x2,y2){
    return Math.hypot(x2 - x1, y2 - y1);
}

export function crossH(x1,y1,x2,y2){
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
hier i het de laatste dat ik heb aangemaakt voor die crosshair
en dan
"use strict";

import context from "../../../scripts/context.js"
import * as Utils from "../../../scripts/utils.js"

let width = context.canvas.width;
let height = context.canvas.height;


window.onmousemove = move;

context.fillRect(0,0,width,height);

/**
 * 
 * @param {MouseEvent} eventData
 /
function move(eventData){
    let x = eventData.pageX;
    let y = eventData.pageY;

    //clear canvas
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);

    context.fillStyle = "red";
    Utils.crossH(x,y,width+5000,y)      // horizontaal rechts
    Utils.crossH(x,y,width-5000,y)      // horizontaal links
    Utils.crossH(x,y,x,height+5000)     //verticaal onder
    Utils.crossH(x,y,x,height-5000)     // verticaal boven

   /  Utils.fillCircle(x,y,25); // moet crosshair worden */

