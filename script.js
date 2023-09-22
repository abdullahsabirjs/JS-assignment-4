// ! CHAP 17 - 20

// ? Q 1
// Declare an empty multidimensional array
// var emptyArray = [];


// ? Q 2
// Declare and initialize a 2x2 matrix
// var matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8]
// ];

// // Display the matrix using document.write()
// document.write("<h2>Matrix:</h2>");
// document.write("<table>");
// for (var i = 0; i < matrix.length; i++) {
//     document.write("<tr>");
//     for (var j = 0; j < matrix[i].length; j++) {
//         document.write("<td>" + matrix[i][j] + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");


// // ? Q 3
// for (var i = 1; i <= 10; i++) {
//     document.write(i);
// }


// ? Q 4
// // Get the number and length from the user
// var multiplicationNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Check if the input is valid
// if (isNaN(multiplicationNumber) || isNaN(tableLength)) {
//     alert("Please enter valid numbers.");
// } else {
//     // Create the multiplication table
//     document.write("<h2>Multiplication Table</h2>");
//     document.write("<table border='1'>");
//     document.write("<tr><th>Number</th><th>Result</th></tr>");

//     for (var i = 1; i <= tableLength; i++) {
//         var result = multiplicationNumber * i;
//         document.write("<tr><td>" + multiplicationNumber + " x " + i + "</td><td>" + result + "</td></tr>");
//     }

//     document.write("</table>");
// }


// ? Q 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// document.write("<h2>Fruits List</h2>");
// document.write("<ul>");

// for (var i = 0; i < fruits.length; i++) {
//     document.write("<li>" + fruits[i] + "</li>");
// }

// document.write("</ul>");


// ? Q 6
// // a. Counting: 1 to 15
// document.write("<h3>a. Counting: 1 to 15</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// // b. Reverse counting: 10 to 1
// document.write("<h3>b. Reverse counting: 10 to 1</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// // c. Even numbers: 0 to 20 (even)
// document.write("<h3>c. Even: 0 to 20</h3>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// // d. Odd numbers: 1 to 19 (odd)
// document.write("<h3>d. Odd: 1 to 19</h3>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h3>e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k</h3>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i * 1000 + "k, ");
// }


//  ? Q 7
// // Given array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Get user input for the item to search
// var userInput = prompt("Enter an item to search:");

// // Convert the user input to lowercase for case-insensitive search
// var userInputLower = userInput.toLowerCase();

// // Check if the item is in the array
// var isItemFound = A.includes(userInputLower);

// // Display the result to the user
// if (isItemFound) {
//     alert(`Yes, "${userInput}" is found in the list.`);
// } else {
//     alert(`No, "${userInput}" is not found in the list.`);
// }


// ? Q 8
// // Given array
// var A = [24, 53, 78, 91, 12];

// // Display the original array
// document.write("Original array A: [" + A.join(", ") + "]<br>");

// // Initialize a variable to store the largest number
// var largestNumber = A[0]; // Assume the first element is the largest

// // Iterate through the array to find the largest number
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }

// // Display the largest number
// document.write("The largest number in the array is: " + largestNumber);


// ? Q 9
// // Given array
// var A = [24, 53, 78, 91, 12];

// // Display the original array
// document.write("Original array A: [" + A.join(", ") + "]<br>");

// // Initialize a variable to store the smallest number
// var smallestNumber = A[0]; // Assume the first element is the smallest

// // Iterate through the array to find the smallest number
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i];
//     }
// }

// // Display the smallest number
// document.write("The smallest number in the array is: " + smallestNumber);


// ? Q 10
// document.write("Multiples of 5 from 1 to 100:<br>");

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ");
//     }
// }


// todo                               X_X_X_X_X_X_X_X_X_X_X



// ! CHAP 21 - 25
// ? Q 1
// // Get first name and last name from the user
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// // Merge first name and last name into fullName
// var fullName = firstName + " " + lastName;

// // Greet the user using the full name
// alert("Hello, " + fullName + "! Welcome.");


// ? Q 2
// // Get the user's favorite mobile phone model
// var favoriteModel = prompt("Enter your favorite mobile phone model:");
// // Calculate and display the length of the input
// var modelLength = favoriteModel.length;
// document.write("The length of your favorite mobile phone model is: " + modelLength);


// ? Q 3
// // Define the word
// var word = "Pakistani";

// // Find the index of the letter "n"
// var indexOfN = word.indexOf("n");

// // Display the result
// document.write("The index of the letter 'n' in the word 'Pakistani' is: " + indexOfN);


// ? Q 4
// var text = "Hello World";
// var lastIndex = text.lastIndexOf("l");
// document.write("The last index of 'l' in 'Hello World' is: " + lastIndex);


// ? Q 5
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("After replacement: " + newCity);


// ? Q 6
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var updatedMessage = message.replace(/and/g, "&");
// document.write("After replacement: " + updatedMessage);


// ? Q 9
// var str = "472";
// var num = parseInt(str);
// document.write("Converted value: " + num + "<br>");
// document.write("Type of converted value: " + typeof num);


// ? Q 10
// // Get user input
// var userInput = prompt("Enter some text:");

// // Convert the input to capital letters
// var capitalizedText = userInput.toUpperCase();

// // Display the capitalized text
// document.write("Input in capital letters: " + capitalizedText);


// ? Q 11
// // Get user input
// var userInput = prompt("Enter some text:");

// // Function to convert text to title case
// function toTitleCase(input) {
//     return input.toLowerCase().split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// }

// // Convert the input to title case
// var titleCaseText = toTitleCase(userInput);

// // Display the text in title case
// document.write("Input in title case: " + titleCaseText);


// ? Q 12
// // Given number
// var num = 35.36;

// // Display the original number
// document.write("Original number: " + num + "<br>");

// // Convert the number to a string
// var numString = num.toString();

// // Remove the dot from the string
// var stringWithoutDot = numString.replace(".", "");

// // Display the result
// document.write("Number as a string without dot: " + stringWithoutDot);



// ? Q 13
// // Get user input for the username
// var username = prompt("Enter your username:");

// // Function to check if the username is valid
// function isValidUsername(username) {
//     for (var i = 0; i < username.length; i++) {
//         var charCode = username.charCodeAt(i);
//         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//             return false;
//         }
//     }
//     return true;
// }

// // Check if the username is valid
// if (isValidUsername(username)) {
//     alert("Username is valid. Welcome, " + username + "!");
// } else {
//     alert("Please enter a valid username without special symbols [@, ., !].");
// }


// ? Q 14
// // Given array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Get user input for the item to search
// var userInput = prompt("Enter an item to search:");

// // Function to perform case-insensitive search
// function caseInsensitiveSearch(arr, item) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase() === item.toLowerCase()) {
//             return true; // Item found
//         }
//     }
//     return false; // Item not found
// }

// // Perform the case-insensitive search
// var isItemFound = caseInsensitiveSearch(A, userInput);

// // Display the result to the user
// if (isItemFound) {
//     alert(`Yes, "${userInput}" is found in the list.`);
// } else {
//     alert(`No, "${userInput}" is not found in the list.`);
// }


// ? Q 15
// // Get user input for the password
// var password = prompt("Enter a password:");

// // Function to validate the password
// function isPasswordValid(password) {
//     // Check if the password contains alphabets and numbers
//     var containsAlphabets = /[a-zA-Z]/.test(password);
//     var containsNumbers = /\d/.test(password);

//     // Check if the password does not start with a number
//     var doesNotStartWithNumber = /^[a-zA-Z]/.test(password);

//     // Check if the password is at least 6 characters long
//     var isAtLeastSixCharacters = password.length >= 6;

//     // Check all conditions
//     return (
//         containsAlphabets &&
//         containsNumbers &&
//         doesNotStartWithNumber &&
//         isAtLeastSixCharacters
//     );
// }

// // Perform password validation
// if (isPasswordValid(password)) {
//     alert("Password is valid.");
// } else {
//     alert("Please enter a valid password that meets the requirements.");
// }


// ? Q 16
// // Given string
// var university = "University of Karachi";

// // Split the string into an array of words
// var wordsArray = university.split(" ");

// // Display the elements of the array
// for (var i = 0; i < wordsArray.length; i++) {
//     document.write("Word " + (i + 1) + ": " + wordsArray[i] + "<br>");
// }


// ? Q 17
// // Get user input
// var userInput = prompt("Enter some text:");

// // Check if the user provided input
// if (userInput !== null && userInput !== "") {
//     // Get the last character of the input
//     var lastCharacter = userInput.charAt(userInput.length - 1);
    
//     // Display the last character
//     alert("The last character of your input is: " + lastCharacter);
// } else {
//     // Handle the case where no input was provided
//     alert("No input provided. Please enter some text.");
// }


// ? Q 18
// // Given string
// var text = "The quick brown fox jumps over the lazy dog";

// // Convert the string to lowercase to perform a case-insensitive search
// var lowerText = text.toLowerCase();

// // Word to search for
// var wordToSearch = "the";

// // Function to count occurrences of a word in a string
// function countOccurrences(text, word) {
//     var count = 0;
//     var position = text.indexOf(word);
//     while (position !== -1) {
//         count++;
//         position = text.indexOf(word, position + 1);
//     }
//     return count;
// }

// // Count the occurrences of "the" in the string
// var occurrences = countOccurrences(lowerText, wordToSearch);

// // Display the result
// document.write("The word 'the' appears " + occurrences + " times in the given string.");


// todo                               X_X_X_X_X_X_X_X_X_X_X