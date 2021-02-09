function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  cnv.style('z-index', '-1');
  cnv.position(0,0)

  redColor = color('#BD391C');
  yellowColor = color('#F4AA1A');
  greenColor = color('#81C880');
  blueColor = color('#7E8ACB');
  purpleColor = color('#8D5D7D');

  blackColor = color('#000000');

  brushColor = redColor;
  brushWidth = 30;
}

function draw() {
  noStroke();

  fill(blackColor);
  rect(90, windowHeight - 60, 30, 30);

  fill(purpleColor);
  rect(90, windowHeight - 120, 30, 30);

  fill(blueColor);
  rect(90, windowHeight - 180, 30, 30);

  fill(greenColor);
  rect(30, windowHeight - 60, 30, 30);

  fill(yellowColor);
  rect(30, windowHeight - 120, 30, 30);

  fill(redColor);
  rect(30, windowHeight - 180, 30, 30);

  stroke(redColor);
  strokeWeight(3);
  line(60, windowHeight - 240, 90, windowHeight - 210);
  line(90, windowHeight - 240, 60, windowHeight - 210);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  if (mouseX >= 30 && mouseX <= 60 && mouseY >= windowHeight - 180 && mouseY <= windowHeight - 120) {
    brushColor = redColor;
  } else if (mouseX >= 30 && mouseX <= 60 && mouseY >= windowHeight - 120 && mouseY <= windowHeight - 90) {
    brushColor = yellowColor;
  } else if (mouseX >= 30 && mouseX <= 60 && mouseY >= windowHeight - 60 && mouseY <= windowHeight - 30) {
    brushColor = greenColor;
  } else if (mouseX >= 90 && mouseX <= 120 && mouseY >= windowHeight - 180 && mouseY <= windowHeight - 120) {
    brushColor = blueColor;
  } else if (mouseX >= 90 && mouseX <= 120 && mouseY >= windowHeight - 120 && mouseY <= windowHeight - 90) {
    brushColor = purpleColor;
  } else if (mouseX >= 90 && mouseX <= 120 && mouseY >= windowHeight - 60 && mouseY <= windowHeight - 30) {
    brushColor = blackColor;
  } else if (mouseX >= 60 && mouseX <= 90 && mouseY >= windowHeight - 240 && mouseY <= windowHeight - 210) {
    clear();
  }
}

function mouseDragged() {
 stroke(brushColor);
 strokeWeight(brushWidth);
 line(mouseX, mouseY, pmouseX, pmouseY)
}
