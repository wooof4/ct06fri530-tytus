let sw,boolflag,favfood;

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

function preload(){
    sw=loadSound('assets/star_wars_theme_8_bit.mp3');
}

// console.log(storyText.length)
let ypos;

function setup(){
    createCanvas(600,400);
    ypos=height/2;
    boolflag=false;
}

function draw(){
    
    background(0);
    fill('yellow');
    textSize(16);
    
    textAlign(CENTER,CENTER);
    if(boolflag){
        
        for(let i = 0; i<storyText.length;i++){
            let sentence=storyText[i];
            if (i===storyText.length-1){
                push();
                textSize(200);
                let sentence=storyText[i];
                text(sentence,300,ypos+i*20);
                pop();
                sw.stop
            }
        text(sentence,300,ypos+i*20);
        }
        ypos = ypos-1;
        console.log()
    }
    
}

function mousePressed(){
    boolflag=!boolflag;
    if(boolflag){
        sw.play()
    }
    else{
            sw.stop();
            ypos=height/2;
    }
    
        
}