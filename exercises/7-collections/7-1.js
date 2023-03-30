"use strict";

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let number = [];

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

setup();
calculateAverage();

function setup(){
    for (let i = 0; i < 1000; i++) {
        number[i] = getRandomInt(100);
    }
}

function calculateAverage(){
    let summ = number.reduce((a, b) => {
        return a + b;
      });

    let average = summ/number.length;

    console.log(average);
}