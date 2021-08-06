// Looping with for

for (let i = 0; i < 5; i++) {
    showMessage(i);
    console.log(i);
};
showMessage("n")

// Looping with while

let count = 2;

while (count < 5) {
    console.log(count);
    count++;
}

// Functions
// Functions Basics

/* Block of code with a name */
function message(){
    console.log('in the function');
};
/* Execute the function */
message();


// Passing information to functions
function showMessage(message, greeting) {
    console.log(message, greeting);
}

showMessage("I love coding", "Hello");

// Function return values
function returnValues(value) {
    let code = value + 3;
    return code
};

console.log(returnValues(2));

// Function scope
/* 
=> Function have access to the variables in the outer scope.
=> They dont expose their variable to the outer scope as they are
destroyed once the code finishes executing.
=> If a variable of the same name is declared outside the function scope
it gets overwritten (example below)
*/
let val = 34;

function declareVariable() {
    let val = 54;
    console.log(val);

    function functionDeclaredOne() {
        let val2 = 67;
    }

    function functionDeclared() {
        // Val2 is not declared inside this function
        // console.log(val2);
    }
    functionDeclared();
}
declareVariable();
console.log(val);

// Using functions to modify the web pages
  function foo() {
      return "bar"
  }
  console.log(foo());
///// Objects /////
let person = {
    name: "Mark",
    age: 24,
    partTime: false
}
console.log(`${person.name} is ${person.age} years old`);