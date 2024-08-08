function setup() {
  createCanvas(400, 400);
  background("orange");
  
}

function draw() {
  
  stroke("black")
  fill("gray")
  
  // console.log(mouseIsPressed);
  
  if(mouseIsPressed) {
  rect(mouseX,mouseY,20,40);
  }
 }
