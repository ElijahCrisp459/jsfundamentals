/*
Booleans only ever have 2 possible vaules TRUE or FALSE
*/

let on=true
console.log(on);

let off=false;
console.log(off);

/*
Null:null is an empty value. It is an empty container. Nothing is in it, still exists as a space to fill
*/

let empty=null;
console.log(empty)

/*
UNDEFINED: no vlaue is assigned and does not act as an empty container
*/

 let undef=undefined;
 console.log(undef)

 /*
 NULL vs. UNDEFINED
 Null:
    -Null is like a container with nothing in it
    -undefined is when a varible has never been initialized, or hasn't been created yet.

    think of varibles with null and udnefines as packages coming out of UPS
    Null packages are packages that were intentionally packed up with nothing, but have been assembeled
    Undefined packages are basically boxes that need to be assmebled ans given somthing to ship
*/

let degrees=90;
console.log(degrees)

let precise=999999999999999
console.log(precise)

let rounded=999999999999999999
console.log(rounded)

/*
STRINGS: strings are a DataType to represent text and are wrapped in a single quote
('') or double quotes ("")
*/

let stringOne="Oh hi Mark";
let stringTwo='Oh hi Mark';

console.log(stringOne, stringTwo);

let first=1050+100
let second='1050'+'100'

console.log(first)
console.log(second)

/* 
OBJECTS: are used to store many vaules instead of a singular value
*/

let frodo={
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo)
console.log(typeof frodo)

/*
ARRAYS: are containers that hold a list of items
    -denoted by []
    -dont have ot have the same data type
*/

let list=['item1',undefined, 3]
//
/*   (1)    (2)       (3)
1. name of array or list
2. array's use square brackets
3. each item, regardless of data type, and is seperated by comas
*/
let burritos=['large',4,true]
console.log(burritios);

console.log(typeof burritos)

/*
When JS sees that we're trying to combine two or more numbers, it adds the values together usign the built in math functionality
When JS sees us trying yo add together one or more strings, instead of using the built in math functionality it combines two strings instead without saying synthesizing 
*/

let example=1050 ='100';//coersion. JS assumes that the user made a mistake and that we're are trying to concenate two strings, instead of trying to do math with the values
console.log(example);
console.log(tyeofexample);



/*
    Challenge:
    Set 7 (or 8) variables:
    C
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName= 'Joy';
console.log(firstName)
let lastName='Crisp';
console.log(lastName)
let streetNumber='3837'
console.log(streetNumber)
let streetName='Bocock'
console.log(streetName)
 let city='Marion'
 console.log(city)
 let state='indiana'
 console.log(state)
 let zipcode='46952'
 console.log(zipcode)   


console.log(firstName, lastName, streetNumber, streetName, city, state, zipcode)

/*
String Properties
    -properties are qualities that are associated with a data type
*/

let myName='Supercalifragilisticexpialidocious'
console.log(myName.length); //34

/*
    String Methods
    -Methods are the tools that help manipulate the data
        -.properties/.methods
        *no parentheses for properties
*/

let smellyGoober='cockAndBalls'
console.log(smellyGoober.toUpperCase());// method that changes a string to uppercase

let ballsItch='lil Dicky has some of the best flow in all of rap'
console.log(ballsItch.includes('Dicky'));// method that requires an arguement or input

let sent='This sentence will be split into individual parts';
console.log(sent.split('be'))