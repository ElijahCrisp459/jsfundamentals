/*
-Variables: Are named containers for storing data values and referring to later 
    - a variable name must begin iwth letter. underscore, or dollar sign
    -numbers may follow the above characters, but cannot come first
    -Javascript is case sensitive- 'Hi' and 'hi' are different variables
    -no spaces in variable name
    -camelcase is best practice for naming variables
        -snake_Case, PascalCasing
    -This is good practice because it help keep everything readable
*/

let a=2

let b=2
/*
(1) (2) (3) (4)

1. key word
2. variable name
3.Assignment Operator
4.Variable value

Var, Let and Const

-var: 'old' keyword for variables **in this course we won't be using this keywrod often.
-let:'new' keyword for variables
-const: also 'new'; declares unchanged variable

-Declarations: are on the LEFT SIDE of a variable
    - it is simply: let x
    -declatrations are on the left side of the assignment operator 
initialization: are on the RIGHT SIDE of a variable
    - it sets the value of the variable
    - it incorperates the variable name (x), the assignment operator (=), and the value 

*/

let x;
console.log('Declaration' , x)

x=10;
console.log('Initialization' , x)

x=33
console.log('Initialization 2' , x)

let y = 'Hello';
console.log('Both',x,y)

let today="Great!";
const elevenFifty="Wonderful!";
console.log(today,elevenFifty)

today = 'Lovely';
elevenFifty = "Fantastic"
console.log(today, elevenFifty);