let moveY=300;
let moveX=600;
function setup() {
    createCanvas(1200,600);
    background(220);
   // noLoop(); // Stops continuous drawing
  }
function draw(){
    /
    noStroke()
    fill(0,0,0)
    // rect(width/2+moveX,height/2+moveY,10,10)
    
    rect(moveX,moveY,100,100 )

    if (keyIsDown('w')){
        moveY=moveY+100;
    }
    else if (keyIsDown('s')){
        moveY=moveY-100;
    }
    else if (keyIsDown('a')){
        moveX=moveX+100;
    }
    else if (keyIsDown('d')){
        moveX=moveX-100;
    }
}