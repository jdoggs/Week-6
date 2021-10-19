// 
let daytime = true;


function setup() {
  const myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.parent("canvas-container");
  rectMode(CENTER);
  
}

function draw() {
  background (random(50, 255), random(50, 150), random(50, 255));
  //background(0,255,0,150);  

  // constantly checking the value of daytime
  if (daytime) {
    fill(255);
    background (0,255,0);
  } else {
    fill(0);
    background (255,0,0);
  }

  rect(width / 2, height / 2, 200);
}

// setting the value of daytime
// toggline the state back and forth
function mousePressed() {
  
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {

    
    if (daytime) {
      // if daytime is true, set it to false
      daytime = false; 
    
    } else {
      // othewise, if daytime is false, set it to true
      daytime = true;
     
    }

  // a shortcut for lines 31 - 37
    // daytime = !daytime;
  }

}