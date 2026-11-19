let contentDiv = document.getElementById("content");
let elements = contentDiv.getElementsByTagName("*");
let textDiv = document.getElementById("text");
let text = "";
for (let i = 0; i < elements.length; i++) {
	text = text + elements[i].innerText;
};

htmlQ = true;
function htmlToggle() {
    htmlQ = !htmlQ;
    button("html", htmlQ);
    if (htmlQ) {
        textDiv.innerHTML = "";
        contentDiv.style.display = "block";
    } else {
        textDiv.innerHTML = text;
        contentDiv.style.display = "none";
    }
}

cssQ = true;
function cssToggle() {
    cssQ = !cssQ;
    button("css", cssQ);
    if (cssQ) {
        let head = document.getElementsByTagName("head")[0];
        head.innerHTML += "<link rel='stylesheet' href='styles.css' id='csslink'></link>";
    } else {
        document.getElementById('csslink').remove();
    }
}

jsQ = true;
function jsToggle() {
    jsQ = !jsQ;
    button("js", jsQ);
    matrix();
    let alldata = document.getElementsByClassName("data");
    for (let i = 0; i < alldata.length; i++) {
        let data = alldata[i];
        if (jsQ) {
            data.style.display = "none";
        } else {
            data.style.display = "block";
        }
    }
}

function button(id, bool) {
    let b = document.getElementById(id);
    if (bool) {
        b.style = "background-color: limegreen";
    } else {
        b.style = "background-color: gray"
    }
}

function collapse(id) {
    if (jsQ) {
        let data = document.getElementById(id);
        let disp = data.style.display;
        if (disp == "block") {
            data.style.display = "none"
        } else {
            data.style.display = "block"
        }
    }
}


let m = 0;

function matrix() {
    if(jsQ) {
        setTimeout(
            function() {
                let screenWidth = window.screen.width;
                let colWidth = screenWidth/50;
                for (let i = 0; i < screenWidth; i += colWidth) {
                    let c = document.createElement("div");
                    c.className = "c";
                    c.innerHTML = randomString();
                    c.style = "position: fixed; left: " + i + "px; top: 0; z-index: -1; max-width: 10px; word-wrap: break-word; font-family: monospace; background: #111; color: " + randomColor();
                    document.body.appendChild(c)
                }
                m++;
                if (m < 10) {
                matrix();
                }
            },
            100
        )
    } else {
        let cols = document.getElementsByClassName("c");
        let len = cols.length;
        for (let i = len - 1; i >= 0; i--) {
            let s = cols[i];
            s.remove()
        }
        m = 0;
    }
}

function randomString() {
    let res = "";
    let len = 20 + Math.random() * 80;
    for (let i = 0; i < len; i++) {
        res += String.fromCharCode(Math.random() * 128);
    }
    return res
}

function randomColor() {
    let colors = ["green", "limegreen", "lime", "darkgreen", "darkslategray"];
    return colors[Math.floor(Math.random() * colors.length)]
}