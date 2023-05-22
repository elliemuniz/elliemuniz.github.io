let stripeX=0; //variable to determine horizontal boat position( declared outside of any function to make it a global variable)
let stripe2X=100; //variable to determine horizontal boat position( declared outside of any function to make it a global variable)
let stripe3X=200; //variable to determine horizontal boat position( declared outside of any function to make it a global variable)
let stripe4X=300; //variable to determine horizontal boat position( declared outside of any function to make it a global variable)
let stripe5X=400; //variable to determine horizontal boat position( declared outside of any function to make it a global variable)
let stripe6X=500; //variable to determine horizontal boat position( declared outside of any function to make it a global variable)

let carX = 50;
let carY = 350;
let wheelSize = 20;
let carSpeed = 0.5;
let carDirection = 4;

let cubeX = 200;
let cubeY = 200;
let cubeSize = 50;
let isCubeGreen = true;

let collisionTimer = 1;
const collisionDuration = 60; // Number of frames for the cube to stay red


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
  rect(stripeX,370,50,10);//stripe
  rect(stripe2X,370,50,10);//stripe
  rect(stripe3X,370,50,10);//stripe
  rect(stripe4X,370,50,10);//stripe
  rect(stripe5X,370,50,10);//stripe
  rect(stripe6X,370,50,10);//stripe
  
  // Update the car's y position to follow the mouse
  carY = mouseY;
  
  // Draw the car at its current position
  fill('yellow');
  rect(carX, carY, 100, 50);

  // Draw the windows
  fill('black');
  rect(carX + 10, carY + 10, 30, 30);
  rect(carX + 60, carY + 10, 30, 30);
// Draw the wheels at the corners of the car
  fill('grey');
  ellipse(carX + wheelSize, carY + 50, wheelSize);
  ellipse(carX + 4 * wheelSize, carY + 50, wheelSize);
  
   // Update the car's x position based on its velocity
  carX += carSpeed * carDirection;

  // If the car reaches the left or right edge of the canvas, reverse its direction
  if (carX < 0 || carX + 100 > width) 
    carDirection *= -1;
  // Update the car's y position to follow the mouse, but only if it's not too high
  if (mouseY < height -50) 
    carY = mouseY;
  
// Check for collision between the car and the cube
  if (carX + 100 > cubeX && carX < cubeX + cubeSize && carY + 50 > cubeY && carY < cubeY + cubeSize) {
    isCubeGreen = false;
  collisionTimer = collisionDuration;
    fill(0,255,0);
  }
  else{
    fill(255,0,0);
  }
  // Decrement the collision timer if it is greater than 0
  if (isCubeGreen) {
    collisionTimer--;
  // fill(0,255,0);
  }

    if (collisionTimer === 0) 
      isCubeGreen = true;
    
    // Draw the cube in either green or red
  // fill(isCubeGreen ? 'green' : 'red');
  rect(cubeX, cubeY, cubeSize, cubeSize);

  
console.log( mouseX +"," + mouseY);//console.log will print the value specified beetween parentheses to the console
  stripeX = stripeX + 1
  stripe2X = stripe2X + 1
  stripe3X = stripe3X + 1
  stripe4X = stripe4X + 1
  stripe5X = stripe5X + 1
  stripe6X = stripe6X + 1
  

  
  
  if (stripeX > 400){
    stripeX = -90;
  }
  if (stripe2X > 400){
    stripe2X = -90;
  }
  if (stripe3X > 400){
    stripe3X = -90;
  }
  if (stripe4X > 400){
    stripe4X = -90;
  }
  if (stripe5X > 400){
    stripe5X = -90;
  }
  if (stripe6X >400){
    stripe6X = -90;
  }
}