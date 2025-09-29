let bg = 'gray';
function setup(){
    createCanvas(400,400)
    interval=setInterval(changeMB,1000)
}
function draw(){
    background(bg);
    let s=59-second()
    textSize(100)
    text(s,100,200);
    
}
function changeMB(){
    bg=color(random(255),random(255),random(255))
}