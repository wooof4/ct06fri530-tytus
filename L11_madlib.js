let noun,verb,adjective,adverb,place

function setup(){
    createCanvas(400,600);
    noun=createInput();
    verb=createInput();
    adjective=createInput()
    adverb=createInput()
    place=createInput()
    noun.position(200,50)
    verb.position(200,100)
    adjective.position(200,150)
    adverb.position(200,200)
    place.posisition(200,250)
}
function draw(){
    background(220)
    Text('noun:',100,60)
}