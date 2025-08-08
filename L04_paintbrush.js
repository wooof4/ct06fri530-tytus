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
//    fill('black')
//        circle(width/2,height/2,0+mouseY)
//            diameter = mouseY+mouseX;

}

function mouseDragged(){
// fill(random(255),random(255),random(255))
// circle(mouseX+random(50),mouseY+random(50),random(25))
// fill(random(255),random(255),random(255))
// circle(mouseX+random(50),mouseY+random(50),random(25))
// fill(random(255),random(255),random(255))
// circle(mouseX+random(50),mouseY+random(50),random(25))
// fill(random(255),random(255),random(255))
// circle(mouseX+random(50),mouseY+random(50),random(25))
// fill(random(255),random(255),random(255))
// circle(mouseX+random(50),mouseY+random(50),random(25))
fill(shapecolor)
circle(mouseX,mouseY,s);

}