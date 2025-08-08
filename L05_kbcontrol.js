// write your codes here
let moveY=300;
let moveX=600;
function setup() {
    createCanvas(1200,600);
    background(220);
   // noLoop(); // Stops continuous drawing
  }
function draw(){
    // background('light blue')
    noStroke()
    fill(0,0,0)
    // rect(width/2+moveX,height/2+moveY,10,10)
    
    rect(moveX,moveY,10,10)

    if (keyIsDown(83)){
        moveY=moveY+1;
    }
    else if (keyIsDown(87)){
        moveY=moveY-1;
    }
    else if (keyIsDown(68)){
        moveX=moveX+1;
    }
    else if (keyIsDown(65)){
        moveX=moveX-1
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