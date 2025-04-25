let s = function(p) {}
new p5(s);


// Mouse to draw!
let img;


function preload() {
 // Load the image
 img = loadImage("pbg.png");
}


function setup() {
 let cnv = createCanvas(5000, 5000);
 cnv.position (0,0);
 cnv.style ('z-index', '-2');
 cnv.style ('position', 'absolute');
 imageMode(CENTER);
 background (0, 0, 0, 0);
}


function draw() {


 // Draw an image at your mouse position
 image(img, mouseX, mouseY, 100,100);


}

