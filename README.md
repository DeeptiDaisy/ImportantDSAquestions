# Interview Questions and Answers - HTML, CSS, and JavaScript

This README contains a compilation of frequently asked interview questions related to HTML, CSS, and JavaScript along with their answers. Use this resource to prepare for your web development interviews and boost your confidence.

<details>
<summary><strong>HTML Interview Questions</strong></summary>

1. **What is the purpose of DOCTYPE in HTML?**
   - The DOCTYPE declaration specifies the type of HTML version used in the document. It helps browsers render the page correctly by following the appropriate specifications.

2. **What are the semantic elements in HTML5?**
   - Semantic elements like `<header>`, `<nav>`, `<main>`, `<footer>`, etc., provide meaning to the structure of a web page, making it more accessible and SEO-friendly.

3. **What is the difference between `<div>` and `<span>` in HTML?**
   - `<div>` is a block-level element, and `<span>` is an inline element. `<div>` is used for grouping elements, while `<span>` is often used to apply styles to a specific part of text.

4. **What is the `alt` attribute in the `<img>` tag used for?**
   - The `alt` attribute provides alternative text for an image. It is displayed if the image fails to load or for accessibility purposes to assist users with screen readers.

5. **How can you embed an audio file in HTML?**
   - You can use the `<audio>` element to embed audio files. Example: `<audio src="audiofile.mp3" controls></audio>`
</details>

<details>
<summary><strong>CSS Interview Questions</strong></summary>

1. **Explain the box model in CSS.**
   - The box model describes the layout of elements in CSS, consisting of content, padding, border, and margin. It determines the total space occupied by an element.

2. **What is the difference between `display: block;` and `display: inline;`?**
   - `display: block;` creates a block-level element that takes up the full width available, while `display: inline;` creates an inline element with only as much width as necessary.

3. **What is CSS specificity?**
   - CSS specificity is a set of rules that determines which CSS styles are applied when there are conflicting styles targeting the same element. Inline styles have the highest specificity, followed by IDs, classes, and element selectors.

4. **What is the purpose of CSS vendor prefixes?**
   - Vendor prefixes (e.g., `-webkit-`, `-moz-`, `-ms-`, `-o-`) are used to apply experimental or browser-specific CSS properties until they are fully supported by all browsers.

5. **Explain the CSS `box-sizing` property.**
   - The `box-sizing` property defines how the width and height of an element are calculated. Setting it to `border-box` includes padding and border in the specified width, making it more intuitive for layout.
</details>

<details>
<summary><strong>JavaScript Interview Questions</strong></summary>

1. **Explain the concept of closures in JavaScript.**
   - Closures are functions that remember the variables from the outer (enclosing) scope even after the outer function has finished executing. They help in creating private variables and maintaining state in functional programming.

2. **What is the difference between `==` and `===` in JavaScript?**
   - `==` is used for loose equality comparison, allowing type coercion, while `===` is used for strict equality comparison, ensuring both value and type match.

3. **What is event delegation in JavaScript?**
   - Event delegation is a technique where a single event listener is attached to a parent element to handle events on its child elements. It improves performance and avoids attaching multiple listeners.

4. **Explain the usage of `let`, `const`, and `var` in variable declaration.**
   - `let` and `const` are block-scoped variables introduced in ES6. `let` allows reassignment, while `const` declares constants that can't be reassigned. `var` is function-scoped and pre-ES6.
   - # JavaScript Variable Types - var, let, and const

Here's a comparison of the different variable types in JavaScript: `var`, `let`, and `const`.

| Feature                 | var                                          | let                                       | const                                     |
|-------------------------|----------------------------------------------|-------------------------------------------|-------------------------------------------|
| Scope                   | Function-scoped (accessible within a function) | Block-scoped (accessible within a block)  | Block-scoped (accessible within a block)  |
| Hoisting                | Hoisted to the top of the function          | Hoisted to the top of the block          | Hoisted to the top of the block          |
| Re-declaration          | Allows re-declaration within the same scope  | Does not allow re-declaration in the same block  | Does not allow re-declaration in the same block  |
| Value Assignment        | Can be assigned and reassigned               | Can be assigned and reassigned               | Must be assigned a value during declaration, and cannot be reassigned |
| Temporal Dead Zone (TDZ)| Not affected by Temporal Dead Zone          | Affected by Temporal Dead Zone            | Affected by Temporal Dead Zone            |
| Global Object Property  | Creates a property on the global object (window in browsers) | Does not create a property on the global object | Does not create a property on the global object |
| Constant                | Not a constant; value can be changed         | Not a constant; value can be changed         | Constant; value cannot be changed          |

In summary, `var` is function-scoped and hoisted to the top of the function, `let` and `const` are block-scoped and hoisted to the top of the block. Both `let` and `const` enforce the Temporal Dead Zone, preventing access to variables before their declaration within a block. `var` allows re-declaration within the same scope, while `let` and `const` do not. `const` requires a value to be assigned during declaration and cannot be reassigned once set, making it a true constant.


5. **What is the purpose of `async` and `await` in JavaScript?**
   - `async` and `await` are used to handle asynchronous operations in a more synchronous-looking way, simplifying the code and making it easier to read and maintain.
 

6. **Difference in null and undefined?**
   - In JavaScript, "null" represents an intentional absence of any value. It is used to indicate that a variable has been explicitly assigned to nothing or has no value. On the other hand, "undefined" means that a variable has been declared but has not been assigned any value yet. Essentially, "undefined" denotes the absence of a value at all, even though the variable has been declared.
     </details>

Feel free to review these questions and answers to strengthen your knowledge of HTML, CSS, and JavaScript. Good luck with your interviews!

---
*Note: The questions and answers provided are for reference and may vary depending on the specific interview context. Always tailor your responses to the interviewer's requirements.*


# Coding Questions of JavaScript:

## Question 1
You need to create a unique username. The username needs to have the first letter of the first and last name of the user along with the current 10-digit Unix timestamp and three random digits at the end. If the first or last name is missing, replace the first letter(s) with 'X'. How would you proceed?

<details>
<summary>Answer</summary>

To achieve this, you can use JavaScript to manipulate the user's first and last names, get the current Unix timestamp, generate random digits, and create the unique username as per the requirements.
</details>

## Question 2
You need to count the number of lines in a text file that end in a carriage return (ASCII code 13) as well as the average length of those lines. The file may be large. What programming process would you use?

<details>
<summary>Answer</summary>

You can use different approaches to accomplish this task, such as reading the file line by line, calculating the number of lines and the average length, or reading in the whole file and splitting its contents to get the desired information.
</details>

## Question 3
You have been asked to count the number of times each word (including alphanumeric sequences such as "user123") appears in a file. All other characters, such as spaces and end-of-line markers, are to be ignored. The files will vary in size. What process would you use to achieve the required result?

<details>
<summary>Answer</summary>

One approach to achieve this is to read the file line by line, split each line by non-alphanumeric characters, store the sequences in an array, and maintain their respective counts. Once the file is fully read, you'll have the counts of each word or alphanumeric sequence.
</details>

## Question 4
Your task is to read in a pipe-delimited text file and clean its content. Each potential record is on its own line and terminated with a carriage return. The cleaned content needs to be stored in a database. Records with missing or invalid data need to be stored in a separate text file for manual processing. When you write the code to complete the task, which approach do you use?

<details>
<summary>Answer</summary>

You can read in the file line by line, split each line into variables using the pipe as the delimiter, and perform field-specific validation. If all fields are valid, store the full record into the database; otherwise, store the record in a separate text file for manual processing.
</details>

## Question 5
You are asked to generate a list of integers and their associated squares (that is the integer to the power of 2) where the square does not exceed a given number. For example, if given the number 50, the highest square value to be output would be 49. What steps are needed for this programming snippet to produce the correct output?

<details>
<summary>Answer</summary>

One way to achieve this is to create a loop that goes from 1 to the square root of the given number. Calculate the square of each number in the loop and output each number and its square as long as the square value does not exceed the given number.
</details>

## Question 6
Which JavaScript function takes a string as a parameter and returns the string with the HTML tags removed?

<details>
<summary>Answer</summary>

The correct function is: `function stripHTMLTags(text) { return text.replace(/<[^>]*>/g, ''); }`
</details>

## Question 7
Which JavaScript function returns a random hexadecimal color?

<details>
<summary>Answer</summary>

The correct function is: `function getRandomColor() { const letters = '0123456789ABCDEF'; let color = '#'; for (let i = 0; i < 6; i++) { color += letters[(Math.random() * 16) | 0]; } return color; }`
</details>

## Question 8
Write a JavaScript function that, given an element id, toggles the display of that element between "none" and "block"?

<details>
<summary>Answer</summary>

The correct function is: `function toggleDisplay(elementId) { const element = document.getElementById(elementId); if (element) { if (window.getComputedStyle(element).display === 'none') { element.style.display = 'block'; } else { element.style.display = 'none'; } } }`
</details>

## Question 9
Which JavaScript function converts a passed-in value from a decimal number into a binary number?

<details>
<summary>Answer</summary>

The correct function is: `function decimalToBinary(decimalNumber) { if (decimalNumber === 0) { return '0'; } let binary = ''; for (let number = decimalNumber; number > 0; number = Math.floor(number / 2)) { binary = (number % 2) + binary; } return binary; }`
</details>

## Question 10
Which answer contains only and all of the JavaScript arithmetic operators?

<details>
<summary>Answer</summary>

The correct answer is: `+, -, *, /, %, ++, --`
</details>

## Question 11
What value will the following code output (console.log)?

```javascript
var x = {},
  y = { key: "y" },
  a = { key: "z" },
  z = { key: "z" };
x[y] = 11;
x[z] = 21;
x[a] = 43;
console.log(x[y]);
```

<details>
<summary>Answer</summary>

The output will be: `43`

Explanation: The object `x` is being used as a key-value store. The keys are objects (`y`, `a`, and `z`), and the values are numbers. When trying to access the value using `x[y]`, it will look for the key equivalent to the object `y`, which is the object `{ key: "z" }`, and the associated value is `43`.
</details>

## Question 12
How do you write a switch statement in JavaScript?

<details>
<summary>Answer</summary>

The correct way to write a switch statement in JavaScript is:

```javascript
switch (variable) {
  case value1:
    // Code to execute if variable is equal to value1
    break;
  case value2:
    // Code to execute if variable is equal to value2
    break;
  // Add more cases as needed
  default:
    // Code to execute if variable does not match any case
}
```
</details>

## Question 13
Consider the following class:

```javascript
class MyClass {
    constructor(name){
        this.name = name;
    }
    greet(){
        alert("Hello, this is " + this.name);
    }
}
```

How do you set the name and then call the greet method?

<details>
<summary>Answer</summary>

You can set the name and call the greet method as follows:

```javascript
const steve = new MyClass("Steve");
steve.greet();
```
This will create a new instance of the `MyClass` class with the name "Steve" and call the `greet` method, displaying the alert
