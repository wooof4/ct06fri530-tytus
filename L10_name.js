let inputtext,name2;
let usertext='age';
let name='name';
function setup(){
    createCanvas(600,400);
    textSize(24)
    textAlign(CENTER,CENTER)
    inputtext=createInput();
    inputtext.position(100,360);
    inputtext.input(user);
    name2=createInput();
    name2.position(100,380);
    name2.input(muder)
}

function draw(){
    background(220);

    text(usertext,width/2,height/2);
    text(nametext,width/2,height/2+24)
    }

function user(){
    usertext=this.value();
    
}
function muder(){
    nametext=this.value();
}