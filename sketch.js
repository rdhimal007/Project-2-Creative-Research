// Name : Roshan Dhimal
// Project2: Creative Research


// create image
let img;
// preload the image
function preload() {
    img = loadImage('temp1.jpg');
}
fu
function setup(){
    // making a 720p resolution
    createCanvas(1290,720);


}
function draw(){
    background("blue");
    // create a blue border wall
    fill("white");
    rect(12, 10, 1265, 700);

    noFill();
    image(img,320,200);
}