// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing

//Sarah Wang | DES 157 Winter 2016 | Glenda Drew
//click on the banner to reveal general class information in black and white

console.log("Testing Console");

function setup() {
  createCanvas(800, 250);
  cursor(CROSS);
}

function draw() {

  fill(0);
textSize(12);
textFont("Georgia");
text("Georgia", 12, 30);
textFont("Helvetica");
text("Helvetica", 12, 60);


  if (mouseIsPressed) {
   background (0);
   fill(255);
   text("DES 157 | Winter 2017 | Glenda Drew", 500, 125);
 } else {
   background (255);
   noStroke();
   fill("cyan");
   rectMode(CENTER);
   rect(400, 125, 800, 250);
   fill(0);
   textSize(48);
   textFont("Helvetica");
   text("Sarah Wang", 85, 135);
 }
}
