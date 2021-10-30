var hr,nm,sc; 
var scAngle, hrAngle, mnAngle; 
var img, picaImg; 

function preload(){
  
  picaImg = loadImage("./pica1.png");

}
function setup() {
  
  createCanvas(800,400);
  
  img = createSprite(0, 0, 10, 10);
  
  rotate(90);
  img.addImage(picaImg);
  img.scale = 0.11
   // to use angle in degrees 
  angleMode(DEGREES); 
  
}

function draw() {
  background(0,0,0); 
  //rotate(90);
  img.shapeColor = 'white'; 
  // Calculating time using predifined func from p5.js
  hr = hour(); 
  mn = minute(); 
  sc = second(); 
  
  // compute angle for seconds minutes and hours 
  scAngle = map(sc,0,60,0,360); 
  hrAngle = map(hr%12,0,60,0,360); 
  mnAngle = map(mn,0,60,0,360); 

  // translate function so hands can be drawn 0,0
  translate(400,200); 
  rotate(-90); 
  //drawing clock hands using line function 
  push(); 
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);  
  line(0,0,100,0);
  pop(); 
  
  push(); 
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(7);  
  line(0,0,100,0);
  pop();

  push(); 
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(7);  
  line(0,0,100,0);
  pop();
   

 // draw arcs 
 noFill(); 
 stroke(255,0,0);
 strokeWeight(7);
 arc(0, 0, 300, 300, 0, scAngle);
 
 noFill(); 
 stroke(0,0,255);
 strokeWeight(7);
 arc(0, 0, 280, 280, 0, mnAngle);

 noFill(); 
 stroke(0,255,0);
 strokeWeight(7);
 arc(0, 0, 260, 260, 0, hrAngle);

  drawSprites();
}