// write your codes here
let moveY=100;
let moveX=100;
function setup() {
    createCanvas(600,400);
    background(220);
   // noLoop(); // Stops continuous drawing
  }
function draw(){
    background('light blue')
    noStroke()
    fill(0,0,0)
    // rect(width/2+moveX,height/2+moveY,10,10)
    rect(moveX,moveY,10,10)

    if (keyIsDown(83)){
        moveY=moveY+1;
    }

}

// function keyPressed(){
// if (key==='w'){
// moveY = moveY-10;
// }
// else if (key==='s'){
// moveY = moveY+10;
// }
// else if (key==='a'){
// moveX = moveX-10;
// }
// else if (key==='d'){
// moveX = moveX+10;
// }
// }