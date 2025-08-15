// write your codes here
let moveY=200;
let moveX=200;
let picoImg,bgmusic,soundpop;
function preload(){
    picoImg=loadImage('assets/pico-a.png');
    bgmusic=loadSound('assets/bossaNova.mp3')
    soundpop=loadSound('assets/pop.mp3')
}
function setup(){
    createCanvas(1200,700)

//bgmusic.loop();
}
function mousePressed(){
soundpop.play();
}
function draw(){
    background('lightblue')
    image(picoImg,moveX,moveY,110,133)

     if (keyIsDown(83)){
        moveY=moveY+10;
    }
    if (keyIsDown(87)){
        moveY=moveY-10;
    }
    if (keyIsDown(68)){
        moveX=moveX+10;
    }
    if (keyIsDown(65)){
        moveX=moveX-10;
    }
        if (moveY >= 400){
        moveY=400-30;
    }
    if (moveY<=0){
        moveY=0;
        
    }
    if (moveX>=400){
        moveX=400-30;
    }
    if (moveX<=0){
        moveX=0;
    }
}
