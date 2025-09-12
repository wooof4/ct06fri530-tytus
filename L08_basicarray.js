let x=300;
function setup(){
    createCanvas(600,400);
    background(220);
    textSize(32);
}
function draw(){
background(220)
text('DVD',x,200);
x=x+10;
    if (x==width){
    x=x*-1
    }
}