"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	drawHourGlass();
}

function drawHourGlass() {
	let i = 0;
	while (i <= 30) {
		Utils.drawLine(50 + i * 10, 50, 350 - 10 * i, 350);
		i++;
	}
}
