let shapecolor='blue';
let score=0;
let diameter = 0;
let s = 10;
// write your codes here
function setup() {
    createCanvas(1000,650);
    background(220);
   // noLoop(); // Stops continuous drawing
  }
function mousePressed(){
    shapecolor=color(random(255),random(255),random(255));
    score+=1;
}
// function mouseReleased(){
//     shapecolor=color(random(255),random(255),random(255));
// }
function mouseMoved(){
s=s+50;
}

function mouseDragged(){
fill(shapecolor)
circle(mouseX,mouseY,s+5)
}