
function setup() {
    createCanvas(15000, 650);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
for(let i = 0;i <256; i++){
  fill(255-i,0+i,0)
circle(10*i,400,50)
}
for(let a = 0;a <256; a++){
  fill(0,255-a,0+a)
circle(2550+10*a,400,50)
}
for(let b = 0;b <256; b++){
  fill(255-b,0+i,0)
circle(5100+10*i,400,50)
}
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}