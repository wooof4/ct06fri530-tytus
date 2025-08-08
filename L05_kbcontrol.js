// write your codes here
let moveY=0;
function setup() {
    createCanvas(1280,640);
    background(220);
   // noLoop(); // Stops continuous drawing
  }
function draw(){
    background('light blue')
noStroke()
fill(0,0,0)
rect(width/2,height/2+moveY,10,10)
}

function keyPressed(){
if (key==='w'){
moveY = moveY-10;
} 
}