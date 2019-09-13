// helpful visualization  https://adamnizol.github.io/Transformation-Visualization-in-Processing/
// https://www.khanacademy.org/computer-programming/spin-off-of-vertex-shape-drawing-tool/4996753861607424

var screenFactor = 0.6;

function setup() {
    createCanvas(displayWidth*screenFactor,displayHeight*screenFactor); // screenWidth, screenHeight);
    angleMode(DEGREES);
    //rectMode(CENTER);
    //frameRate(10);

    

    
} // end setup


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

var smallBoxSize = 10;


var xBox=800*0.5; // x starts in the middle of the screen at the top
var yBox=smallBoxSize;

var buffer = smallBoxSize*2;



function draw() {
    background(0);
    var screenWidth=displayWidth*screenFactor; //800;
    var screenHeight=displayHeight*screenFactor; //400;
    
    //let startX = screenWidthTemp/2;
    
    /*
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

    */

    push();
        fill(0, 0, 255);
        translate(xBox, yBox); // +300
        //translate(30, 10);
        //rotate(-angle * 3);  
        //translate(-30, -10);
        drawNewPiece(smallBoxSize, xBox, yBox);

    pop();

    yBox+=1; // I previously used smallBoxSize

    if (mouseIsPressed){
        if(mouseX>xBox+buffer){  // move right
            xBox+=smallBoxSize;
        } else if (mouseX<xBox-buffer){
            xBox-=smallBoxSize;
        }
    }


    
    
 
    
} // end main draw function

function getRndInteger(min, max) {
    return Math.floor(random(min, max)) + min;
}

function drawNewPiece(_smallBoxSize, _xBox, _yBox){
    drawBox(_smallBoxSize, _xBox, _yBox);

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
  
function drawBox(smallBoxSizeTemp, startXtemp,startYtemp){
    // By default, the first two parameters set the location of the upper-left corner, 
    // the third sets the side size of the square. The way these parameters are 
    // interpreted, however, may be changed with the rectMode() function.
    
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    
    //print('smallBox: '+smallBox);
    //print('startX: '+startX);
    
    // to make the box shape for tetris I need 4 adjacent squares
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX,smallBox,startY+smallBox);
    square(startX+smallBox,startY+smallBox,smallBox);

}

