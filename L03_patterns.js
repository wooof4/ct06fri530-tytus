
function setup() {
    createCanvas(1500, 650);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
//for(let i = 0;i <256; i++){
  //fill(255-i,0+i,0)
//circle(10*i,400,50)
//}
//for(let a = 0;a <256; a++){
  //fill(0,255-a,0+a)
//circle(2550+10*a,400,50)
//}
//for(let b = 0;b <256; b++){
//  fill(0+b,0,255-b)
//circle(5100+10*b,400,50)
//}
let count = 0;
let boxwidth = width / 5
for (let i=0;i<10; i++){
  if (count%2==0){
    fill(0)
  }
  else{
    fill(255)
  }
  count+=1
  React(i)
}
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}