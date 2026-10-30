function setup() {
    // define a variable to hold your canvas
    var myCanvas = createCanvas(400, 400);

    //place your canvas inside the parent <div> with id="mySketch"
    myCanvas.parent("mySketch");
}

function draw() {
    background(220);

    for (let x = 0; x <= width; x += 10) {
        for (let y = 0; y <= height; y += 10) {
            // fill(x/width * 255, y/height * 255, 0);
            circle(x, y, 10)
        }
    };


    // let xSpace = 20;
    // let ySpace = 20;
    // noFill();
    // for (let x = 0; x <= width; x += xSpace) {
    //     for (let y = 0; y <= height; y += ySpace) {
    //         circle(x, y, 10);
    //         // rect(x, y, 10);
    //     }
    // };


    // for (let x = 0; x <= width; x += xSpace) {
    //     for (let y = 0; y <= height; y += ySpace) {
    //         let x1, y1, x2, y2;
    //         if (x < width/2) {x1 = x} else {x1 = x + xSpace/2};
    //         if (y < height/2) {y1 = y} else {y1 = y + ySpace/2};
    //         if (x < width/2) {x2 = x + xSpace/2} else {x2 = x};
    //         if (y < height/2) {y2 = y + ySpace/2} else {y2 = y};
    //         line(x1, y1, x2, y2)
    //     }
    // };


    // for (let x = 0; x <= width; x += xSpace) {
    //     for (let y = 0; y <= height; y += ySpace) {
    //         ellipse(x, y, random(1, xSpace), random(1, ySpace))
    //     }
    // };

    // control random() by constructing ellipse values outside of the looping draw()
    
    // for (let i = 0; i < ovals.length; i++) {
    //     ovals[i].show();
    // }
}

// define a class called an Oval that gives an ellipse with random radii
class Oval {
    constructor(xInput, yInput) {
       this.x = xInput;
       this.y = yInput;
       // outside of draw(), use the JS Math.random() function instead of p5.js random()
       this.rX = 20 * Math.random();
       this.rY = 20 * Math.random();
    }

    show() {
        ellipse(this.x, this.y, this.rX, this.rY)
    }
}

// define variables outside of draw() so they have a global scope
let xSpace = 20;
let ySpace = 20;
let w = 400;
let h = 400;

// create an array of ovals centered at each grid point (x,y)
let ovals = [];
for (let x = 0; x <= w; x += xSpace) {
    for (let y = 0; y <= h; y += ySpace) {
        let oval = new Oval(x, y);
        ovals.push(oval);
    }
};
// ^^^ for fun: try putting this for-loop in mousePressed()...