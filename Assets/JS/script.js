// This changes the border to #1478b1 when the input is selected by the user.
// onclick? or something else?



// mouse over/ mouse away
// this turns the submit button a different color on mouse-over

var button = document.getElementById("button");

button.addEventListener("mouseenter", function(){
   if (button.style.background = "#10689a"){
   button.style.background = "#1478b1"}
}, false);
button.addEventListener("mouseleave", function(){
   if (button.style.background = "#1478b1"){
   button.style.background = "#10689a"}
}, false);


//this code will need to:

//listen for the submit button

//when the submit button is clicked (event listner "click"):
// get the input in all the forms, and log it to console.
// break this down.

//button variable already declared (button)
