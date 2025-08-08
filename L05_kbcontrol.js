// write your codes here
let moveY=0;
function setup() {
    createCanvas(1200,650);
    background(220);
   // noLoop(); // Stops continuous drawing
  }
function draw(){
noStroke()
fill(0,0,0)
rect(width/2,height/2+moveY,100,100)
}

function keyPressed(){
moveY+10;
}