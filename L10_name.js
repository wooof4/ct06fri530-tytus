let inputtext;
let usertext='user text here';
function setup(){
    createCanvas(600,400);
    input=createInput();
    inputtext.position(width/2,height/2);
    inputtext.input(user);
}
function draw(){
    background(220);
    // usertext=inputtext;
    text(usertext,width/2,height/2);
    }
