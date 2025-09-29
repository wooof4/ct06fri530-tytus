
function setup(){
    createCanvas(600,400)
    textAlign(CENTER,CENTER)
}
function draw(){
    background(220)
    fill(0)
    let h=hour();
    let m=minute();
    let s=second();
    let timestring=nf(h,2)+ ':'+ nf(m,2) + ':' + nf
}