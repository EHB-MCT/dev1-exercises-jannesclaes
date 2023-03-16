"use strict";

import context from "../../scripts/context.js";
import even from "../../scripts/utils";

drawBricks();

function drawBricks() {
    for (let i = 0; i <= 6; i++){
        context.fillStyle = "brown";
        
            
        for(let j = 0;j <= 6; j++){
            context.beginPath();
            even(i);
            context.fillRect(x+j *80,50+i*35,75,30);
        }

    }
}