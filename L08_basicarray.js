let x=300;
let xspeed=3;
let y=200;
let yspeed=3;
function setup(){
    createCanvas(600,400);
    background(220);
    textSize(32);
    // textAlign(LEFT,CENTER)
}
function draw(){
background(220)
text('ssssssssssssssss',x,200);
x=x+xspeed;
    if (x>=width-200){
    xspeed=xspeed*-1
   
    }
    else if (x==0){
    xspeed=xspeed*-1
    }
}