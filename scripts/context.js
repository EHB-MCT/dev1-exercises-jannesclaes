"use strict";


/** @type {CanvasRenderingContext2D} */
let context;

getCanavasContext();

export default context;

function getCanavasContext(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}