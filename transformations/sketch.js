// helpful visualization  https://adamnizol.github.io/Transformation-Visualization-in-Processing/
// https://www.khanacademy.org/computer-programming/spin-off-of-vertex-shape-drawing-tool/4996753861607424



let angle = 0;
let x = 0;
let y = 0;
let xSpeed = 3;
let ySpeed = 2;

let bufferX = 50+27*2;
let bufferXrect = 300+30*2;

let xRect=0;
let yRect=0;
let xSpeedRect=xSpeed;
let ySpeedRect=-5;


function setup() {
  createCanvas(displayWidth*0.9,displayHeight*0.8); // screenWidth, screenHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
    background(0);
    let screenWidth=displayWidth*0.9; //800;
    let screenHeight=displayHeight*0.8; //400;
    
    push();
        fill(255, 0, 0);
        translate(x+50, y+ 50);
        translate(27, 20); //26.6666
        rotate(angle);
        translate(-27, -20); //26.6666     
        drawLshape(); 
    pop();



    push();
        fill(0, 0, 255);
        translate(xRect+300, yRect+300); // +300
        translate(30, 10);
        rotate(-angle * 3);  
        translate(-30, -10);
        drawRect();          
    pop();


    angle += 1;

    x += xSpeed;
    y += ySpeed;

    xRect += xSpeedRect;
    yRect += ySpeedRect;

    print("x: " + x);
    print("y: " + y);
    print("xSpeed: " + xSpeed);
    print("xSpeedRect: " + xSpeedRect);
    print("xRect: " + xRect);
    print("mouseY: " + mouseY);
    print("");
    
    if (mouseIsPressed) {

        if(mouseY<screenHeight/2){
            xSpeed = xSpeed*(-1);
        } 
        if (mouseY>screenHeight/2) {
            xSpeedRect = xSpeedRect*(-1);
        }        
    }


    if(x>=screenWidth-bufferX ){ // || x<bufferX 
        xSpeed = xSpeed*(-1);
    } 
    if (xRect>=screenWidth-bufferXrect ){ // || x<bufferXrect 
        xSpeedRect = xSpeedRect*(-1);
    }   


    if(x<-50  && xSpeed<0){ // || *2+bufferX 
        xSpeed = xSpeed*(-1);
    } 
    if (xRect<-300 && xSpeedRect<0){ // || *2+bufferXrect 
        xSpeedRect = xSpeedRect*(-1);
    }  


    if(y>=screenHeight-bufferX ){ // || x<bufferX 
        ySpeed = ySpeed*(-1);
    } 
    if (yRect>=screenHeight-bufferXrect ){ // || x<bufferXrect 
        ySpeedRect = ySpeedRect*(-1);
    }   


    if(y<-50  ){ // || *2+bufferX     && xSpeed<0 
        ySpeed = ySpeed*(-1);
    } 
    if (yRect<-300 ){ // || *2+bufferXrect     && xSpeedRect<0 
        ySpeedRect = ySpeedRect*(-1);
    } 

    
 
    
}

function drawLshape(){
    beginShape();
      vertex(0, 0);
      vertex(20, 0);
      vertex(20, 20);
      vertex(60, 20);
      vertex(60, 40);
      vertex(0, 40);
    endShape(CLOSE);
}

  
function drawRect(){
    beginShape();
      vertex(0, 0);
      vertex(60, 0);
      vertex(60, 20);
      vertex(0, 20);
    endShape(CLOSE);
}
  
