let countdown=60;
let s =second();
let bg = 'lightgray';
function setup(){
    createCanvas(400,400)
    
}
function draw(){
    background(bg)
    text(countdown,200,200);
}
function changeMB(){
    bg=color(random(255),random(255),random(255))
}