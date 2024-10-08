// TODO: time with map() and mod
let r = 0
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(20);
  let P = 3000
  let counter = millis() % P;
  let md =map(counter,0,P,10,500);
  let mr = map(counter,0,P,0,255);
  fill(50,mr,50)
  ellipse(width / 2, height / 2, md);
}
