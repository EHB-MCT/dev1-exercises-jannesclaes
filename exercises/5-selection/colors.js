"use strict";
import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let width = context.canvas.width;

let height = context.canvas.height;

drawRandomCircles();

function drawRandomCircles(){
    context.fillRect(0,0,width,height);


    for(let i = 0; i < 10000; i++){
        let x = Math.random() * width;
        let y = Math.random() * height;

        let disctance = Utils.calculateDistance(x,y,width/2,height/2);
        if (disctance < 150){

            if(y < height/2 && x < width/2){
                context.fillStyle = "red";
            }else if(y < height / 2 && x > width / 2){
                context.fillStyle = "yellow";
            }
            else if(y > height / 2 && x < width / 2){
            context.fillStyle = "green";
            }
            else{
                context.fillStyle = "blue";
            }
        }
        else {
            context.fillStyle = "black";
        }

                Utils.fillCircle(x,y,5);
        }
        
      
}