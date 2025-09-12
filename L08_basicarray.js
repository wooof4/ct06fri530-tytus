let x=300;
let xspeed=0;
function setup(){
    createCanvas(600,400);
    background(220);
    textSize(32);
}
function draw(){
background(220)
text('DVD',x,200);
x=x+xspeed;
xspeed=xspeed+10
    if (xspeed==width){
    xspeed=xspeed*-1
    }
}