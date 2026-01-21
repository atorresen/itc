//// to connect this js file to an html file,
//// add a script tag to the bottom of the <body> with
//// src pointing to the correct file path, e.g., 
//// <script src="basics_of_js.js"></script>

// console.log("hello world!");

//// exercise: log stuff in the console
//// -- log your name
//// -- log the numbers 1-20 without typing each number individually
//// -- log "beep" if the current time is more than 30 minutes after the hour
////      log "boop" if the current time is less than or equal to 30 minutes after the hour
////      hint: https://www.w3schools.com/js/js_date_methods.asp



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////// "DOM manipulation", a.k.a. using JS to change HTML /////
///////////////////////////////////////////////////////////////

//// access elements by id, class, or tag

// var example1 = document.getElementById("greeting");
// console.log(example1);

// let example2 = document.getElementsByClassName("greenText");
// console.log(example2);

// let example3 = document.getElementsByTagName("li");
// console.log(example3);


//// get and modify element content
// let greeting = document.getElementById("greeting");
// console.log(greeting.innerText);

// greeting.innerText = "howdy universe";


// make all elements with class “greenText” have green text
// let greenElements = document.getElementsByClassName("greenText");
//// ^^^ returns an array
// for (let i = 0; i < greenElements.length; i++) {
// 	greenElements[i].style.color = "green";
// }


//// write a function that runs when an HTML element is clicked
//// turn all of the list items red
function turnRed () {
	let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "red";
    }
}

//// note: the code in the html file that triggers the turnRed() function is:
//// <button onclick="turnRed()">click me!</button>
