let sw,boolflag,favfood;
function preload(){
    sw=loadSound('assets/star_wars_theme_8_bit.mp3')
}
let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!",
    "",
    "",
    "", 
    "",
    "",
    "", 
    "",
    "",
    "", 
    "",
    "",
    "", 
    "im gay"
];
console.log(storyText.length)
let ypos,ymove;

function setup(){
    createCanvas(600,400);
    ypos=height/2
}

function draw(){
    
    background(0);
    fill('yellow');
    textSize(16);
    textAlign(CENTER,CENTER);
    for(let i = 0; i<storyText.length;i++){
        
        let sentence=storyText[i];
        if (i===storyText.length-1){
            push();
            textSize(200);
            let sentence=storyText[i];
            text(sentence,300,ypos+i*20);
            pop();
        }
        
        text(sentence,300,ypos+i*20);
}
    ypos=ypos-1.5
    function mousePressed(){
    if(boolflag){
    sw.play()
}
    else{
    sw.stop()
    }
    boolflag=!boolflag
}

}