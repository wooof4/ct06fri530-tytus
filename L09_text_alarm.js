
// function setup(){
//     createCanvas(600,400)
//     textAlign(CENTER,CENTER)
// }
// function draw(){
    
// }

//task 2+3
let bgmusic;
let countdown=5;
let interval;
let bgcolor= 'gray';

function preload(){
    bgmusic=loadSound('assets/bossaNova.mp3');
}
function setup(){
   createCanvas(600,400);
   textAlign(CENTER,CENTER); 

}
function draw(){
    background(bgcolor);
    textSize(32);
    text('click me to start timer',width/2,height/2+50);
    text(countdown,300,200);
   
    fill(0)
    textSize(72)
    let h=hour();
    let m=minute();
    let s=second();
    let timestring=nf(h,2)+ ':'+ nf(m,2) + ':' + nf(s,2)
    text(timestring,300,100)
}
function mousePressed(){
    interval=setInterval(countdownUpdate,1000);    
}
function countdownUpdate(){
    if(countdown>0){
        countdown-=1;
    }
    else{
        clearInterval(interval);
        c
        change=setInterval(help,50000000000000000000000000000000000000000000000000000000000000000000000000000)
    }
}
function changeMB(){
    bgcolor=color(random(255),random(255),random(255))
}
function help(){
    if(countdown==0){
        bgmusic.play();
    }
}
function keyPressed(){
    if (keycode=32){
        clearInterval(change)
        bgmusic.stop()
        bgcolor=220
        countdown=5
    }
}