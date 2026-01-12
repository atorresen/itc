function setup() {
    // define a variable to hold your canvas
    var myCanvas = createCanvas(400, 400);

    //place your canvas inside the parent <div> with id="mySketch"
    myCanvas.parent("mySketch");
}

function draw() {
   background("orange");
   
   rectMode(CENTER);
   if(mouseX < width/2) {
        fill("pink")
    } else {
        fill("yellow")
    };
   rect(width/2, height/2, 200, 100);
   
   textAlign(CENTER);
   fill("black");
   text("this is a p5.js canvas!", width/2, height/2);
}