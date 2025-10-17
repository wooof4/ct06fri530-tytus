favfood=['ramen','dog','cat','plate','chair','table','wall','block']

function setup(){
    createCanvas(600,400)
    background(220)
}
function draw(){
    for(let i = 0; i<8; i++){
        text(favfood[i],300,50+10*i)
        }
    }
