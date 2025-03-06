// Declare a variable in global scope called customerName
var customerName = "bob";

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Function to overwrite bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant in global scope
const leastFavoriteCustomer = "some customer";

// Function to attempt changing the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  throw new Error("Assignment to constant variable.");
}
