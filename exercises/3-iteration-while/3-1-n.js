"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawBlockyGradient();
    context.strokeRect(50, 50, 300, 300);

}

function drawBlockyGradient() {
    let i = 0;
    while (i < 300 ) {
        
        context.fillStyle = Utils.rgb(n);
        context.fillRect(50,50 ,50 ,300 );
        i += 50;
    }
}