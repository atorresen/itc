//////////////////////////////
///////// arithmetic /////////
console.log(["1 + 1", 1 + 1]);

console.log(["(6 + (4 * 2))/7", (6 + (4 * 2))/7]);


///////////////////////////
///////// mod (%) /////////

//// (n % m) returns the remainder when n is divided by m

// console.log(["17 % 4", 17 % 4]);
// console.log(["16 % 4", 16 % 4]);

// let n = 5;
// if (n % 2 == 0) {
//     console.log([n, " is even"])
// } else {
//     console.log([n, " is odd"])
// }


/////////////////////////////////
///////// Math.random() /////////

//// Math.random() returns a random decimal between 0 and 1
// console.log(["Math.random()", Math.random()]);

//// get a random decimal between 0 and 5
// console.log(["5 * Math.random()", 5 * Math.random()]);

//// get a random decimal between 3 and 8
// console.log(["5 * Math.random() + 3", 5 * Math.random() + 3]);


//////////////////////////////////////////////////////////////
///////// Math.round(), Math.floor(), Math.ceiling() /////////

//// Math.round(n) returns the closest whole number to n
// console.log(["Math.round(4.8)", Math.round(4.8)]);
//// get a random whole number ("intger") between 0 and 5
// console.log(["round(5 * Math.random())", Math.round(5 * Math.random())]);

//// Math.floor(n) (the floor function) returns the integer directly below n
// console.log(["Math.floor(4.8)", Math.floor(4.8)]);

//// Math.ceil(n) (the ceiling function) returns the integer directly above n
// console.log(["Math.ceil(4.8)", Math.ceil(4.8)]);


//////////////////////////////////////////
///////// Math.cos(), Math.sin() /////////

//// cosine and sine are trigonometric functions that are 
//// useful for describing positions around a circle
function setup() {
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent("cossinSketch");
}

function draw() {
    background("cyan");
    fill(0);
    translate(width/2, height/2);
    let angles = [];
    for (let i = 0; i < 2 * Math.PI; i += 0.5) {
        angles.push(i);
    };
    let radius = 100;
    for (let i = 0; i < angles.length; i++) {
        let x = radius * Math.cos(angles[i]);
        let y = radius * Math.sin(angles[i]);
        line(0, 0, x, y);
        circle(x, y, 5);
    }
}


