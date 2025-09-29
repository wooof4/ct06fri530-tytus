let bg = 'gray';
function setup(){
    createCanvas(400,400)
    
}
function draw(){
    background(bg);
    let s=59-second()
    text(countdown,200,200);
}
function changeMB(){
    bg=color(random(255),random(255),random(255))
}