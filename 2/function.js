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

