// write your codes here
let picoImg;
function preload(){
    picoImg=loadImage('assets/pico-a.png');
}
function setup(){
    createCanvas(1200,700)
background('lightblue')
}

function draw(){
    image(picoImg,600,350,110,0.5)
}