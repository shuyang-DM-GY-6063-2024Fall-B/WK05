// TODO: mouse hover effect

function overlapRect(x,y,w,h,c){
  let betweenX = (mouseX>x) && (mouseX<x+w)
  let betweenY = (mouseY>y) && (mouseY<y+h)
  push()
  if(betweenX && betweenY){
    fill(c)
  }
  else{
    fill('white')
  } 
  rect(x,y,w,h);
  pop()
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  // rect(100, 50, 400, 200);
  // ellipse(200, 500, 300);
  push()
  if(mouseX >= 100 && mouseX <= 500 && mouseY >= 50 && mouseY <= 250){
    fill('deeppink')
  }
  else{
    fill('white')
  } 
  rect(100, 50, 400, 200);
  pop()
  
  push()
  if(dist(mouseX,mouseY,200,500) <= 150){
    fill('IndianRed')
  }
  else{
    fill('white')
  } 
  ellipse(200, 500, 300);
  pop()

  overlapRect(200,350,50,50,'DarkViolet')


}
