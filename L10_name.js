let inputtext;
let usertext='user text here';
function setup(){
    createCanvas(600,400);
    textSize(24)
    textAlign(CENTER,CENTER)
}
function draw(){
    background(220);
    inputtext=createInput();
    inputtext.position(width,height);
    inputtext.input(user);
    usertext=inputtext;
    text(usertext,width/2,height/2);
    }
function user(){

}