let ballX = 300;
let ballY = 200;
let ballxspeed = 40;
let ballyspeed = 40;
let ballwidth = 120;
let r,g,b;

function setup(){
    createCanvas(600,400)
    background('lightblue')
    r=random(255);
    g=random(255);
    b=random(255);
}
function draw(){
    //background(220)
    noStroke();
    fill(r,g,b);
    circle(ballX,ballY,ballwidth);
    ballX=ballX+ballxspeed;
    ballY=ballY+ballyspeed;

    if (ballX+ballwidth/2>=width){
        ballxspeed=ballxspeed * -1;
        r=random(255);
        g=random(255);
        b=random(255);
    }
    
    if (ballX-ballwidth/2<=0){
        ballxspeed=ballxspeed * -1;
        r=random(255);
        g=random(255);
        b=random(255);
    }

    if (ballY+ballwidth/2>=height){
        ballyspeed=ballyspeed * -1;
        r=random(255);
        g=random(255);
        b=random(255);
    }
    
    if (ballY-ballwidth/2<=0){
        ballyspeed=ballyspeed * -1;
        r=random(255);
        g=random(255);
        b=random(255);
    }
}