// write your codes here
let sw,boolflag,favfood;
function preload(){
    sw=loadSound('assets/star_wars_theme_8_bit.mp3')
}
function setup(){
    createCanvas(600,400)
    background('black')
    fill('white')
    textSize(32)
    textAlign(CENTER,CENTER)
    // text('Im Tytus and im gay',width/2,100)
    // text('Im 13 and Im gay',width/2,height/2)
    // text('I play games and Im gay',width/2,300)
    text('favourite food:',width/2,70)
    favfood=['ramen','dog','cat','plate','chair','table','wall','block']
    for (let i=0; i<favfood.length; i++){
    
    text(i+1+"."+favfood[i],width/2,i*35+100)
}
}
function draw(){

}
function mousePressed(){
    if(boolflag){
    sw.play()
}
    else{
    sw.stop()
    }
    boolflag=!boolflag
}
// function mouseReleased(){
    
// }
