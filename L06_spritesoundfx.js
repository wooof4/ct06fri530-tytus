// write your codes here
let moveY=200;
let moveX=200;
let picoImg,bgmusic;
function preload(){
    picoImg=loadImage('assets/pico-a.png');
    bgmusic=loadSound('assets/bossaNova.mp3')
}
function setup(){
    createCanvas(1200,700)
background('lightblue')
bgmusic.loop();
}

function draw(){
    image(picoImg,600,350,110,133)

}