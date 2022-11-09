// Name : Roshan Dhimal
// Project2: Creative Research


// create image variable
let img;
let img2;
let img3;
// decalare array for colors
let arrayColors = ["#83da6a","#D5253E64", "#E0C127FF","#E3547CFF", "#C0A93CFF"];
let chooseColor;
let detect = false;
let winWidth = 1290; winHeight = 720;
let fontSize;
let fontColor;
let sizeX;
let sizeY;
let button1;  // california
let button2;  //   florida
let button3;  // great lake
let startButton;  // start
let button;
let takeString;
let func;
let v;

// preload the image
function preload() {
    img = loadImage('map.png');
    img2 = loadImage('human27.png');
    img3 = loadImage('intro.png');
}
// resize the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// create button for the sketch
function btn(button, takeString, sizeX, sizeY, func, fontSize, fontColor){
    button = createButton(takeString);
    button.position(sizeX,sizeY);
    button.mousePressed(func);
    button.style('font-size', fontSize);
    button.style('background-color', fontColor);
}


function setup(){
    // making a resolution
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.addClass('centered'); // making the canvas centers refrence to style.css
    //make button for the program
    // btn(startButton, "Start", 800, 800, startFile, '12', '#83da6a');
    startButton = createButton("Start");
    // startButton.position(700,1200)
    startButton.position(1050,windowHeight + 150);
    startButton.mousePressed(startFile);
    startButton.style('font-size', 12);
    startButton.style('background-color', '#83da6a');
    frameRate(1);

}
// : #505091
function draw(){
    background("#3c3c7c");
    // background("rgb(192,169,60)");
    img.resize(winWidth, winHeight);
    // call background
    makeHeat();
    image(img2, mouseX, mouseY);
    console.log(windowWidth, windowHeight);
    console.log("mouse",mouseX, mouseY);
}

// move to new window
function gotolink() {
    window.open("california.html");
}
function gotolink2() {
    window.open("FloridaStory.html");
}
function gotolink3() {
    window.open("Go.html");
}
// draws background for image to show
function drawback(){

}
function startFile(){

    btn(button1, "California", 320, 850,gotolink, '12','#bbb165' );
    btn(button2, "Florida", 1250, 1100,gotolink2, '12', '#b9ab63' );
    btn(button3, "Destination", 1050, 700,gotolink3, '12', '#b9ab63' );
    startButton.hide();
    detect = true;
}
// draw a heat map in the window
function makeHeat(){

    // if block to change the positon of the image
    // As the window size changes
    if (detect == false){
        if (windowWidth > 1886){
            image(img3,700,0);
        }
        else{
            image(img3,400,0);
        }
    }
    else{
        if (windowWidth > 1886){
            image(img,600,0);
        }
        else{
            image(img,250,0);
        }
    }

}