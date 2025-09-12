let x=300;
let xspeed=3;
function setup(){
    createCanvas(600,400);
    background(220);
    textSize(32);
}
function draw(){
background(220)
text('DVD',x,200);
x=x+xspeed;
    if (x>=width-70){
    xspeed=xspeed*-1
    }
    else if (x==0){

    }
}