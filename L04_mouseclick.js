let shapecolor='blue';

// write your codes here
function setup() {
    createCanvas(1500,650);
    background(220);
   // noLoop(); // Stops continuous drawing
  }
  
function draw() {
// Recap 1: Repeating Circles
//for(let i = 0;i <256; i++){
//fill(255-i,0+i,0)
//circle(10*i,400,50)
//}
//for(let a = 0;a <256; a++){
//fill(0,255-a,0+a)
//circle(2550+10*a,400,50)
//}
//for(let b = 0;b <256; b++){
 // fill(0+b,0,255-b)
//circle(5100+10*b,400,50)
//}
//for(let i =0;i<256; i++){
//fill(0+i,0+i,0+i)
//circle(0+i*10,0+i*10,50)
//}
fill(shapecolor)
circle(width/2,height/2,325)
}



function mousePressed(){
    shapecolor=color(random(255));
}
function mouseReleased(){
    shapecolor='blue';
}