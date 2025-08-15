let moveY=200;
let moveX=200;
function setup() {
    createCanvas(400,400);
   // background(220);
   // noLoop(); // Stops continuous drawing
  }
function draw(){
    //background('light blue')
    //noStroke()
    fill(0,0,0)
    // rect(width/2+moveX,height/2+moveY,10,10)
    
    rect(moveX,moveY,10,10)

    if (keyIsDown('w')){
        moveY=moveY+10;
    }
    else if (keyIsDown('s')){
        moveY=moveY-10;
    }
    else if (keyIsDown('a')){
        moveX=moveX+10;
    }
    else if (keyIsDown('d')){
        moveX=moveX-10;
    }
}