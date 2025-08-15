// write your codes here
 function setup() {
    createCanvas(1200,600);
 }


    if (keyIsDown(83)){
        moveY=moveY+100;
    }
    else if (keyIsDown(87)){
        moveY=moveY-100;
    }
    else if (keyIsDown(68)){
        moveX=moveX+100;
    }
    else if (keyIsDown(65)){
        moveX=moveX-100;
    }