"use strict";

import context from "../../scripts/context.js";

import * as utils from"../../scripts/utils.js";


/**@type {CanvasRenderingContext2D}*/

drawCircles();

function drawCircles(){
    let i = 1;

    while(i <= 4){
        utils.fillCircle(i*100, i *100,50);
        i++;
    }
}


