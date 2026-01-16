//// to connect this js file to an html file,
//// add a script tag to the bottom of the <body> with
//// src pointing to the correct file path, e.g., 
//// <script src="basics_of_js.js"></script>

console.log("hello world!");

//// exercise: log stuff in the console
//// -- log your name
//// -- log the numbers 1-20 without typing each number individually
//// -- log "beep" if the current time is more than 30 minutes after the hour
////      log "boop" if the current time is less than or equal to 30 minutes after the hour
////      hint: https://www.w3schools.com/js/js_date_methods.asp


////// "DOM manipulation", a.k.a. using JS to change HTML /////

//// access elements by id, class, or tag

// let example = document.getElementById("greeting");
// console.log(example);

// document.getElementsByClassName("greenText");
// document.getElementsByTagName("li");


//// get and modify element content
// let greeting = document.getElementById("greeting");
// let greetingText = greeting.innerText;
// console.log(greetingText);

// greeting.innerText = "howdy universe";


//// make all list items (li) cyan
// let listItems = document.getElementsByTagName("li");
// //// ^^^ returns an array

// for (let i = 0; i < listItems.length; i++) {
// 	item = listItems[i];
// 	item.style.color = "cyan";
// }

//// write a function that runs when an HTML element is clicked

function turnRed () {
	let greenElements = document.getElementsByClassName("greenText");
    for (let i = 0; i < greenElements.length; i++) {
        greenElements[i].style.color = "red";
    }
}

//// note: the code in the html file that triggers the turnRed() function is:
//// <button onclick="turnRed()">click me!</button>

