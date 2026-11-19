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
        b.style = "background-color: cornflowerblue";
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