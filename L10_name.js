let inputtext,name2,hobby2;
let usertext='age',nametext='name',hobbytext='hobby';
let lgbtq=220;
function setup(){
    createCanvas(600,400);
    textSize(24)
    textAlign(CENTER,CENTER)
    
    inputtext=createInput();
    inputtext.position(100,350);
    inputtext.input(user);
    name2=createInput();
    name2.position(100,330);
    name2.input(muder)
    lgbtq=createColorPicker();
    lgbtq.position(100,370)
    // hobby2=createInput();
    // hobby2.position(100,380);
    // hobby2.input(kill);
}

function draw(){
    background(lgbtq.value())
    textSize(20)
    fill('white')
    text('name:',70,340)
    text('age:',70,360)
    text('')
    text('')
    textSize(24)
 
    
    rect(150,100,300,200,10)
    fill('black')
    text(usertext,width/2,height/2);
    text(nametext,width/2,height/2-24)
    // text(hobbytext,width/2,height/2+24)
    }

function user(){
    usertext=this.value();
}
function muder(){
    nametext=this.value();
}
// function kill(){
//     hobbytext=this.value();
// }