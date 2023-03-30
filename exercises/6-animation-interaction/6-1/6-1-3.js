"use strict";

import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let fx =  width / 2;
let fy =  (4.6 * height) / 5;
let frameCount = 0;

window.onekeyup = up;

/**
 * 
 * @param {KeyboardEvent} eventData
 */

drawGrass();

// carDriving();
drawRoad();
drawCar(10,215);
drawCar(1610, 600);
up();

function drawGrass() {
	context.fillStyle = "lightgreen";
	context.beginPath();
	context.fillRect(0, 0, width, height);
}

function drawRoad() {
	context.fillStyle = "grey";
	context.beginPath();
	context.fillRect(0, height / 5, width, 3 * (height / 5));

	context.fillStyle = "lightgrey";
	context.beginPath();
	context.fillRect(0, 2 * (height / 5), width, height / 5);
}

function drawFrog(x, y) {
	context.fillStyle = "darkgreen";
	context.beginPath();
	Utils.fillCircle(x, y, 50);
	Utils.fillCircle(x, y - 70, 30);
	Utils.fillCircle(x - 55, y - 30, 15);
	Utils.fillCircle(x - 55, y + 30, 15);
	Utils.fillCircle(x + 55, y - 30, 15);
	Utils.fillCircle(x + 55, y + 30, 15);
}

function drawCar(x, y) {
	context.fillStyle = "red";
	context.beginPath();
	context.fillRect(x, y, 300, 150);

	context.fillStyle = "lightblue";
	context.beginPath();
	context.fillRect(x + 200, y + 10, 80, 130);

	context.beginPath();
	context.fillRect(x + 10, y + 10, 40, 130);
}

// function carDriveFront() {
// 	frameCount++;
// 	drawRoad();

// 	if (frameCount > width - 300) {
// 		frameCount = width - 300;
// 		drawCar(frameCount, 220);
// 		drawCar(width - 300 - frameCount, 600);
// 	} else {
// 		drawCar(frameCount, 220);
// 		drawCar(width - 300 - frameCount, 600);
// 	}

// 	requestAnimationFrame(carDriveFront);
// }



function up(eventData) {
    

    if(eventData.code == "ArrowUp"){
        fy -= 5;
    }

    drawFrog(fx,fy);
}