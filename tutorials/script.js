let name = document.head.id;
let nav = document.createElement("nav");

let home = document.createElement("a");
home.href = "../index.html";
home.className = "home";
home.innerText = "home";

nav.appendChild(home);

let tutorials = ["html", "css", "files", "github", "p5.js", "logic", "loops", "javascript", "bootstrap", "details"];
let links = [];

for ( let i = 0; i < tutorials.length; i++ ) {
    let e = document.createElement("a");
    let txt = tutorials[i];
    e.innerText = "  " + txt;
    if ( txt == name) {
        e.href = "#";
        e.className = "here"
    } else {
        e.href = (txt + ".html")
    }
    nav.appendChild(e)
}

document.body.prepend(nav);

let contact = document.createElement("footer");
contact.innerHTML = "If you find an error or have a suggestion for improving this tutorial, please email <a href='mailto:atorre04@risd.edu'>atorre04@risd.edu</a>.";
document.body.appendChild(contact);

function show(t, string) {
    if (t.innerText == string) {
        t.innerText = "?"
    } else {
        t.innerText = string
    }
}