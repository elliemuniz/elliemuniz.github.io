let boatX=205; //variable to determine horizontal boat position( declared outside of any function to make it a global variable)

function setup() {
  createCanvas(400, 400);// creating an HTML element with a width & height of 400px
}

function draw() {
  background(3,37,126);//rgb values of background fill color
noStroke();//removes the stroke from subsequent shapes
  fill(255,255,255);
  ellipse(300,100,75,75);// the parameters of the ellipse function are x,y,width and height
  fill(0,0,0);//blue fill for street
  rect(0,340,400,60);//street
  fill(255,255,255); //white fill for stripe
  rect(boatX-120,360,40,10);//stripe
  rect(boatX-180,360,40,10);//stripe
  rect(boatX-240,360,40,10);//stripe
  rect(boatX-300,360,40,10);//stripe
  rect(boatX-360,360,40,10);//stripe
console.log(mouseX + "," + mouseY);//console.log will print the value specified beetween parentheses to the console
  boatX=boatX+1
}

//event for when the mouse is pressed, we will print some text to the console
function mousePressed(){
  if(mouseX<200){
  console.log("ahoy matey!")
  }
}