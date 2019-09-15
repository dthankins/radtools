// helpful visualization  https://adamnizol.github.io/Transformation-Visualization-in-Processing/
// https://www.khanacademy.org/computer-programming/spin-off-of-vertex-shape-drawing-tool/4996753861607424

var screenFactor = 0.6;

function setup() {
    createCanvas(400,800); // screenWidth, screenHeight);
    angleMode(DEGREES);
    //rectMode(CENTER);
    frameRate(30);
    //print("In setup.  frameRate is " + frameRate);

    

    
} // end setup



/*
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
*/

let angle = 0;
var smallBoxSize = 10;

let startX = 200;
var xBox=startX; // x starts in the middle of the screen at the top
var yBox=smallBoxSize;

var buffer = smallBoxSize*6;

var shapeArray = ['L','T','MirrorL','S','Z','rect','box'];
var chosenShape;
chosenShape = shapeArray[Math.floor(Math.random()*shapeArray.length)];

var lastTouchEnd = 0;
var now;


function draw() {
    background(0);
    var screenWidth=400; //displayWidth*screenFactor; //800;
    var screenHeight=800; //displayHeight*screenFactor; //400;

    
    if(yBox==screenHeight){
        chosenShape = shapeArray[Math.floor(Math.random()*shapeArray.length)];
        //print("shapeArray.length = " + shapeArray.length);
        //print("next chosenShape = " + chosenShape);
        yBox=0;
        xBox=startX;
    }
    
    push();
        fill(0, 0, 255);
        translate(xBox, yBox); // +300
        translate(smallBoxSize, smallBoxSize);
        rotate(angle);  
        translate(-smallBoxSize, -smallBoxSize);
        drawNewPiece(chosenShape,smallBoxSize, xBox, yBox);

    pop();

    yBox+=1; // I previously used smallBoxSize

    if (mouseIsPressed){
        if(mouseX>xBox+buffer){  // move right
            xBox+=smallBoxSize;
        } else if (mouseX<xBox-buffer){
            xBox-=smallBoxSize;
        } else if (abs(mouseY-yBox)<=buffer){
            now = (new Date()).getTime();
            if(now-lastTouchEnd>150){
                angle+=90;
            }
            
        }
        lastTouchEnd=now;
    }


    
    
 
    
} // end main draw function

// SHAPES
/*
Seven different shapes called tetrominoes: 
S-shape, Z-shape, T-shape, L-shape, Line-shape, MirroredL-shape, and a Square-shape. 
Each of these shapes is formed with four squares. 
*/

function getRndInteger(min, max) {
    return Math.floor(random(min, max)) + min;
}

function drawNewPiece(_chosenShape,_smallBoxSize, _xBox, _yBox){
    let chosenShape=_chosenShape;

    switch(chosenShape) {
        case "L":
            drawLshape(_smallBoxSize, _xBox, _yBox);
            break;
        case "MirrorL":
            drawMirrorL(_smallBoxSize, _xBox, _yBox);
            break;
        case "S":
            drawSshape(_smallBoxSize, _xBox, _yBox);
            break;
        case "Z":
            drawMirrorS(_smallBoxSize, _xBox, _yBox);
            break;
        case "T":
            drawTshape(_smallBoxSize, _xBox, _yBox);
            break;
        case "rect":
            drawRect(_smallBoxSize, _xBox, _yBox);
            break;
        case "box":
            drawBox(_smallBoxSize, _xBox, _yBox);
            break;
        default:
            print("Something went wrong. chosenShape was: " + chosenShape + ".");
    } // end switch
       

} // end drawNewPiece


function drawSshape(smallBoxSizeTemp, startXtemp,startYtemp){
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the S-shape 
    square(startX,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX+smallBox,startY+smallBox,smallBox);
    square(startX+smallBox,startY+smallBox*2,smallBox);
   
}


function drawMirrorS(smallBoxSizeTemp, startXtemp,startYtemp){
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the S-shape 
    square(startX,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX-smallBox,startY+smallBox,smallBox);
    square(startX-smallBox,startY+smallBox*2,smallBox);
   
}



function drawTshape(smallBoxSizeTemp, startXtemp,startYtemp){
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the L-shape 
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX+2*smallBox,startY,smallBox);
    square(startX+smallBox,startY+smallBox,smallBox);
}



function drawLshape(smallBoxSizeTemp, startXtemp,startYtemp){
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the L-shape 
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX+2*smallBox,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
}


function drawMirrorL(smallBoxSizeTemp, startXtemp,startYtemp){
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the Mirror L-shape 
    square(startX+smallBox,startY+smallBox,smallBox);
    square(startX+2*smallBox,startY+smallBox,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX,startY,smallBox);
}

  
function drawRect(smallBoxSizeTemp, startXtemp,startYtemp){
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    
    //print('smallBox: '+smallBox);
    //print('startX: '+startX);
    
    // to make the RECTANLE shape for tetris I need 4 adjacent squares
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX+2*smallBox,startY,smallBox);
    square(startX+3*smallBox,startY,smallBox);



    /*
    beginShape();
      vertex(0, 0);
      vertex(60, 0);
      vertex(60, 20);
      vertex(0, 20);
    endShape(CLOSE);
    */
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

