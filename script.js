// save HTML content as text (to be displayed when HTML is removed)
var contentDiv = document.getElementById("content");
var allElements = contentDiv.getElementsByTagName("*");
var allContent = "";
for (var i = 0; i < allElements.length; i++) {
	allContent = allContent + allElements[i].innerText;
};
var textOnly = document.getElementById("textOnly");

// toggle HTML
var htmlQ = true;
function addHTML () {
	var head = document.getElementsByTagName("head")[0];
	var button = document.getElementById("html");
	if (htmlQ) {
		// if HTML is already added, remove it
		contentDiv.style.display = "none";
		textOnly.innerText = allContent;
		button.style.backgroundColor = "lightgray";
	} else {
		// if HTML is not added, add it
		contentDiv.style.display = "block";
		textOnly.innerText = "";
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
		button.style.backgroundColor = "lightgray";
	} else {
		// if CSS is not linked, link it
		head.innerHTML += "<link rel='stylesheet' href='styles.css' id='csslink'></link>";
		button.style.backgroundColor = "#628AD4";
	};
	cssQ = !cssQ;
}


// toggle JS
var jsQ = false;

// initially js is disabled (so button is grayed out)
var jsButton = document.getElementById("js");
jsButton.style.backgroundColor = "lightgray";

function addJS () {
	jsQ = !jsQ;

	var head = document.getElementsByTagName("head")[0];
	if (jsQ) {
		initSnow();
		jsButton.style.backgroundColor = "#628AD4";
	} else {
		jsButton.style.backgroundColor = "lightgray";
	};

	// I added this "class='flake' to the document.write() below to make this code work
	let flakes = document.getElementsByClassName("flake");
	for (let i = 0; i < flakes.length; i++) {
		let f = flakes[i];
		if (jsQ) {
			f.innerText = "•"
		} else {
			f.innerText = ""
		};
	}

	// use jsQ to enable/disable the collapse feature defined below
	collapse();
}


// collapse functionality for weekly schedules
function collapse () {
	// get an array of all of the "week" divs in the schedule
	var weeks = document.getElementsByClassName("week");

	//get the table of contents
	var toc = document.getElementById("toc");

	if (jsQ) {
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
		toc.style.display = "none";
	} else {
		// remove toggle symbol and un-collapse each week
		for (var w of weeks) {
			var heading = w.getElementsByTagName("h3")[0];
			heading.innerText = heading.innerText.replace(/▼/i, "");
			var div = w.getElementsByTagName("div")[0]
			div.style.display = "block";
			w.onclick = "";
		}

		// show the manual table of contents
		toc.style.display = "block";
	}
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



// snowflake code downloaded from https://www.cssscript.com/minimalist-falling-snow-effect-with-pure-javascript-snow-js/#google_vignette

/*!
// Snow.js - v0.0.3
// kurisubrooks.com
*/

// Amount of Snowflakes
var snowMax = 100;

// Snowflake Colours
var snowColor = ["#DDD", "#EEE"];

// Snow Entity
var snowEntity = "&#x2022;";

// Falling Velocity
var snowSpeed = 0.75;

// Minimum Flake Size
var snowMinSize = 8;

// Maximum Flake Size
var snowMaxSize = 24;

// Refresh Rate (in milliseconds)
var snowRefresh = 50;

// Additional Styles
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

var snow = [],
	pos = [],
	coords = [],
	lefr = [],
	marginBottom,
	marginRight;

function randomise(range) {
	rand = Math.floor(range * Math.random());
	return rand;
}

function initSnow() {
	var snowSize = snowMaxSize - snowMinSize;
	marginBottom = document.body.scrollHeight - 5;
	marginRight = window.screen.width;

	for (i = 0; i <= snowMax; i++) {
		coords[i] = 0;
		lefr[i] = Math.random() * 15;
		pos[i] = 0.03 + Math.random() / 10;
		snow[i] = document.getElementById("flake" + i);
		snow[i].style.fontFamily = "inherit";
		snow[i].size = randomise(snowSize) + snowMinSize;
		snow[i].style.fontSize = snow[i].size + "px";
		snow[i].style.color = snowColor[randomise(snowColor.length)];
		snow[i].style.zIndex = 1000;
		snow[i].sink = snowSpeed * snow[i].size / 5;
		snow[i].posX = randomise(marginRight - snow[i].size);
		snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
		snow[i].style.left = snow[i].posX + "px";
		snow[i].style.top = snow[i].posY + "px";
	}

	moveSnow();
}

function moveSnow() {
	for (i = 0; i <= snowMax; i++) {
		coords[i] += pos[i];
		snow[i].posY += snow[i].sink;
		snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
		snow[i].style.top = snow[i].posY + "px";

		if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
			snow[i].posX = randomise(marginRight - snow[i].size);
			snow[i].posY = 0;
		}
	}

	setTimeout("moveSnow()", snowRefresh);
}

for (i = 0; i <= snowMax; i++) {
	document.write("<span class='flake' id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
}