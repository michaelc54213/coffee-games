//Validate Contact info
//function for empty validation
function checkEmptyString() {
var name = document.getElementById("name").value;
var message = document.getElementById("message").value
if (message === "") {
		console.log("message value was not logged");
		return false;
}
if (name === "") {
		console.log("name value was not logged");
		return false;
}
return true; //if all is validated
}

var button = document.getElementById("submit");
if (button) {
		button.addEventListener("click", checkEmptyString, false);
}
