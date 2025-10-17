favfood=['ramen','dog','cat','plate','chair','table','wall','block']
let x=300;
let y=200;
let xchange=10;
function setup(){
    createCanvas(600,400)
    
    textSize(32)
}
function draw(){
    background(220)
    // for(let i = 0; i<8; i++){
    //     text(favfood[i],250,50+32*i)
    //     }
    circle(x,y,100)
    x=x+xchange
    if (x===600-100){
        xchange=!x
    }
    }
