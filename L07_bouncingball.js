let ballX = 300;
let ballY = 200;
let ballxspeed = 100;
let ballyspeed = 100;
let ballwidth = 30;

function setup(){
    createCanvas(600,400)
    background('lightblue')
}
function draw(){
    background(220)
    noStroke();
    fill('red');
    circle(ballX,ballY,ballwidth);
    ballX=ballX+ballxspeed;
    ballY=ballY+ballyspeed;

    if (ballX+ballwidth/2>=width){
        ballxspeed=ballxspeed * -1;
    }
    
    if (ballX-ballwidth/2<=0){
        ballxspeed=ballxspeed * -1;
    }

    if (ballY+ballwidth/2>=height){
        ballyspeed=ballyspeed * -1;
    }
    
    if (ballY-ballwidth/2<=0){
        ballyspeed=ballyspeed * -1;
    }
}