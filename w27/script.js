// function to show/hide agendas on click
function collapse(id) {
    let week = document.getElementById(id);
    if (jsQ) {
        if (week.style.display == "block") {
            week.style.display = "none"
        } else {
            week.style.display = "block"
        }
    } else {
        week.style.display = "block"
    }
}


///////////////////////////////////////////////////


// state variables
htmlQ = true;
cssQ = true;
jsQ = true;


// collect all inner text to display when HTML is off
let contentDiv = document.getElementById("content");
let elements = contentDiv.getElementsByTagName("*");
let text = "";
for (let i = 0; i < elements.length; i++) {
	text = text + elements[i].innerText;
};
let textDiv = document.getElementById("text")
textDiv.innerText = text;


// functions to toggle HTML, CSS, and JS
function toggleHTML() {
    htmlQ = !htmlQ;
    if (htmlQ) {
        contentDiv.style.display = "block";
        textDiv.style.display = "none"
    } else {
        contentDiv.style.display = "none";
        textDiv.style.display = "block";
    };
    buttonColor("html", htmlQ)
}

function toggleCSS() {
    cssQ = !cssQ;
    let link = document.getElementById("csslink");
    if (cssQ) {
        link.href = "styles.css"
    } else {
        link.href = ""
    };
    buttonColor("css", cssQ)
}

function toggleJS() {
    jsQ = !jsQ;
    ["w1", "w2", "w3", "w4", "w5"].map(e => collapse(e));
    buttonColor("js", jsQ);
    stars()
}


// function to toggle color of button based on state variables
function buttonColor(id, bool) {
    let b = document.getElementById(id);
    if (bool) {
        b.style.backgroundColor = "darksalmon"
    } else {
        b.style.backgroundColor = "slategray"
    }
}


///////////////////////////////////////////////////


// function to place/remove random stars
let numStars = 100;
function stars() {
    if (jsQ) {
        for (let i = 0; i < numStars; i++) {
            let x = Math.random() * 2 * window.screen.width/2;
            let y = Math.random() * window.screen.height;
            let s = document.createElement("h2");
            s.innerText = "★";
            s.className = "star";
            s.style = "position: fixed; left: " + x + "px; top: " + y + "px; z-index: -1; opacity: 0.75; color: " + randomColor();
            setTimeout(() => {
                if (jsQ) { document.body.appendChild(s) }
            }, i * 800);
        }
    } else {
        let stars = document.getElementsByClassName("star");
        let len = stars.length;
        for (let i = len - 1; i >= 0; i--) {
            let s = stars[i];
            s.remove()
        }
    }
}

function randomColor() {
    let colors = ["darksalmon", "palevioletred", "goldenrod", "plum", "burlywood", "moccasin"];
    return colors[Math.floor(Math.random() * colors.length)]
}


///////////////////////////////////////////////////


// function to pick random order for final crit
function pickOrder(roster) {
    let res = roster.sort(
        function(a, b) {return 0.5 - Math.random()}
    );
    document.getElementById('critOrder').innerText = res.join(", ");
}