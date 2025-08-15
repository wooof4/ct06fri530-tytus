let moveY=200;
let moveX=200;
function setup() {
    createCanvas(400,400);
   // background(220);
    //noLoop(); // Stops continuous drawing
  }
function draw(){
  background('light blue')
    noStroke()
    fill(0,0,0)
    // rect(width/2+moveX,height/2+moveY,10,10)
    
    rect(moveX,moveY,10,10)

    if (keyIsDown(83)){
        moveY=moveY+10;
    }
    if (keyIsDown(87)){
        moveY=moveY-10;
    }
    if (keyIsDown(68)){
        moveX=moveX+10;
    }
    if (keyIsDown(65)){
        moveX=moveX-10;
    }

    if (moveY===400){
        moveY=400;
    }
    if (moveY===0){
        moveY=0;
    }
    if (moveX===400){
        moveX=400;
    }
    if (moveX===0){
        moveX=0;
    }
}