// save HTML content as text (to be displayed when HTML is removed)
var contentDiv = document.getElementById("content");
var allElements = contentDiv.getElementsByTagName("*");
var allContent = "";
for (var i = 0; i < allElements.length; i++) {
	allContent = allContent + allElements[i].innerText;
};
var textOnly = document.getElementById("textOnly");
textOnly.innerText = allContent;

// toggle HTML
var htmlQ = true;
function addHTML () {
	var head = document.getElementsByTagName("head")[0];
	var button = document.getElementById("html");
	if (htmlQ) {
		// if HTML is already added, remove it
		contentDiv.style.display = "none";
		textOnly.style.display = "block";
		button.style.backgroundColor = "";
	} else {
		// if HTML is not added, add it
		contentDiv.style.display = "block";
		textOnly.style.display = "none";
		button.style.backgroundColor = "#628AD4";
	};
	htmlQ = !htmlQ;
}


// toggle CSS
var cssQ = true;
function addCSS () {
	var head = document.getElementsByTagName("head")[0];
	var button = document.getElementById("css");
	if (cssQ) {
		// if CSS is already linked, unlink it
		document.getElementById('csslink').remove();
		button.style.backgroundColor = "";
	} else {
		// if CSS is not linked, link it
		head.innerHTML += "<link rel='stylesheet' href='styles.css' id='csslink'></link>";
		button.style.backgroundColor = "#628AD4";
	};
	cssQ = !cssQ;
}


// toggle JS
var jsQ = false;
function addJS () {
	var head = document.getElementsByTagName("head")[0];
	var button = document.getElementById("js");
	if (jsQ) {
		// if JS is already active, reload the page
		location.reload();
		button.style.backgroundColor = "lightgray";
	} else {
		// if JS is not active, run the collapse() function defined below
		collapse();
		button.style.backgroundColor = "#628AD4";
	};
	jsQ = !jsQ;
}


// collapse functionality for weekly schedules
function collapse () {
	// get an array of all of the "week" divs in the schedule
	var weeks = document.getElementsByClassName("week");

	// for each week
	for (var w of weeks) {
		// add a toggle symbol to the heading for the week
		var heading = w.getElementsByTagName("h3")[0];
		heading.innerText = heading.innerText + " ▲";
		heading.style = "cursor: pointer";

		// trigger the show function when the week's div is clicked
		w.onclick = show;
		w.click();
	}

	// hide the manual table of contents
	var toc = document.getElementById("toc");
	toc.style.display = "none";
}

function show() {
	// get the div that holds the week's content and its heading
	var div = this.getElementsByTagName("div")[0];
	var heading = this.getElementsByTagName("h3")[0];

	// toggle between hidden and displayed and heading symbol
	if (div.style.display == "none") {
		div.style.display = "block";
		heading.innerText = heading.innerText.replace("▼", "▲");
	} else {
		div.style.display = "none";
		heading.innerText = heading.innerText.replace("▲", "▼");
	}
}
