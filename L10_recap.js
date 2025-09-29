let countdown=60;
let s =second();
let bg =220;
function setup(){
    createCanvas(600,400)
    
}
function draw(){
    background(bg)
}
function mousePressed(){
change=setInterval(changeMB,500);
}
function changeMB(){
    bg=color(random(255),random(255),random(255))
}