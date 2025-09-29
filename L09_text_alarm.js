
// function setup(){
//     createCanvas(600,400)
//     textAlign(CENTER,CENTER)
// }
// function draw(){
//     background(220)
//     fill(0)
//     textSize(72)
//     let h=hour();
//     let m=minute();
//     let s=second();
//     let timestring=nf(h,2)+ ':'+ nf(m,2) + ':' + nf(s,2)
//     text(timestring,300,200)
// }

//task 2+3
let bgmusic;
let countdown=5;
let interval;
let bgcolor=220;
function preload(){
    bgmusic=loadSound('assets/bossaNova.mp3');
}
function setup(){
   createCanvas(600,400)
   textAlign(CENTER,CENTER) 
   if(countdown==0)
   bgmusic.play();
}
function draw(){
    background(bgcolor);
    textSize(32);
    text('click me to start timer',width/2,height/2+50);
    text(countdown,300,200);
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
        change=setInterval(changeMB,500);
    }
}
function changeMB(){
    
    bgcolor=color(random(255),random(255),random(255))

}