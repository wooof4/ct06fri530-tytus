let inputtext;
let usertext='user text here';
function setup(){
    createCanvas(600,400);
    textSize(24)
    textAlign(CENTER,CENTER)
    inputtext=createInput();
    inputtext.position(0,height);
    inputtext.input(user);
    
}
function draw(){
    background(220);

    text(usertext,width/2,height/2);
    }
function user(){
usertext=this.valu;
}