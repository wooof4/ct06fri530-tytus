// write your codes here
let picoImg;
function preload(){
    picoImg=loadImage('assets/pico.png');
}
function setup(){
    createCanvas(1200,700)
background('lightblue')
}

function draw(){
    image(picoImg,200,100,110,133)
}