// write your codes here
let picoimg;
function preload(){
    picoimg=loadImage('assets/pico.png');
}
function setup(){
    createCanvas(1200,700)
background('lightblue')
}

function draw(){
    image(picoimg,200,100,110,133)
}