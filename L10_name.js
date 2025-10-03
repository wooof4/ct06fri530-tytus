let inputtext;
let usertext='user text here';
function setup(){
    createCanvas(600,400);
    textSize(24)
}
function draw(){
    background(220);
    input=createInput();
    inputtext.position(width/2,height/2);
    inputtext.input(user);
    usertext=inputtext;
    text(usertext,width/2,height/2);
    }
