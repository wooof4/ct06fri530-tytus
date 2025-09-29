let bg = 'gray';
function setup(){
    createCanvas(400,400)
    
}
function draw(){
    background(bg);
    let s=59-second()
    textSize(100)
    text(s,200,200);
    interval
}
function changeMB(){
    bg=color(random(255),random(255),random(255))
}