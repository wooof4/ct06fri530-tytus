favfood=['ramen','dog','cat','plate','chair','table','wall','block']

function setup(){
    createCanvas(600,400)
    background(220)
    textSize(32)
}
function draw(){
    for(let i = 0; i<8; i++){
        text(favfood[i],250,50+32*i)
        }
    }
