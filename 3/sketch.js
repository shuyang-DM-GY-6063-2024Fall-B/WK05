// TODO: animation across the screen
//       wrap around
//       bounce
let x = 0;
let y =0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  // for (let x = 0; x < width; x += 2) {
  //   ellipse(x, height / 2, 100);
}

function draw() {
  background(20)
  

// draw stuff
  ellipse((x+frameCount)%width,height/2+sin(frameCount/30)*100,100)
  // x = (x + 10)% Width;
  // y = y+10
  // check if is greater than screen 
  // if( x > windowWidth){
  //   x= 0
  // }
 

}
