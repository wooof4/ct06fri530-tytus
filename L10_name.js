let inputtext,name2;
let usertext,nametext='user text here';

function setup(){
    createCanvas(600,400);
    textSize(24)
    textAlign(CENTER,CENTER)
    inputtext=createInput();
    inputtext.position(0,height);
    inputtext.input(user);
    name2=createInput();
    name2.position(0,360);
    name2.input(user);
}

function draw(){
    background(220);

    text(usertext,width/2,height/2);
    text(nametext,width/2,height/2+24)
    }

function user(){
    usertext=this.value(inputtext);
    nametext=this.value(name2);
}