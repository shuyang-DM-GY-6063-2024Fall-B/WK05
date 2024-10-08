// TODO: use map() to change shape's size

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
  rectMode(CENTER);
  background(255, 20, 120);
  
}

function draw() {
  // background(255, 20, 120);
  let d = mouseX / width * 270 +10
  let f = mouseY / height * 270 +10


  let mx = map(mouseY,0,width/2,600,32)  
  rect(width / 2, height / 2, mx,mx);

}

function mouseClicked(){
  background(random(255),random(255),random(255))
}
