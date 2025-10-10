let noun,verb,adjective,adverb,place

function setup(){
    createCanvas(400,600);
    noun = createInput();
    verb = createInput();
    adjective = createInput();
    adverb = createInput();
    place = createInput();
    
    noun.position(200,50);
    verb.position(200,100);
    adjective.position(200,150);
    adverb.position(200,200);
    place.position(200,250);
}
function draw(){
    background(220);
    textAlign(LEFT,TOP);
    textSize(18);
    text('noun:',150,50);
    text('verb:',150,100); 
    text('adjective:',120,150)
    text('adverb:',135,200)
    text('place:',150,250)
}