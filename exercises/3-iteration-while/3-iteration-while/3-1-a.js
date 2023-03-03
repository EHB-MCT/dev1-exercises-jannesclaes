"use strict";
import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	context.strokeStyle = "white";
	drawLines();
}

function drawLines() {
	let i = 3;
	while (i <= 13) {
		console.log(i);
		//This drawLine function does not exist yet!
		//Add it to the utils script:
		//The function draws a line between 2 points
		//And has the following parameters: x1, y1, x2, y2
		Utils.drawLine(75, i * 25, 325, i * 25);
		i++;
	}
}
