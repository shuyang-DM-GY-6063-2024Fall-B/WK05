// TODO: use mouseX and mouseY

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255, 20, 120);
  // fill(random(255));
  let x = 100;
  let y = 200;
  rect(mouseX, mouseY, 100);
}
