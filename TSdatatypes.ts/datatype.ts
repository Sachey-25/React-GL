/*String ===> String is another primitive data type
	that is used to store text data.
	'' or " " */
let employeeName : string ="Rohit";
let empName : string ='Rohit';

//Template String
// Since TypeScript 1.4 Typescript included support for ES6 template
// Template strings are used to emded expressions into strings.
/* Instead of writing a string that is a combination of text and variables
with concatinations, we can use a single statement with back-ticks `` 
The variable values are writen as ${}. Using template strings, it is easier
to embed expressions and also to write long text-based strigns */

let empDepartment:string="Development";
// pre ES6
let emplyeedetails:string = employeeName + 
" works in the " + empDepartment + "department";

// Post-ES6
let empdetails:string = `${employeeName} works in the ${empDepartment} department`

console.log(emplyeedetails);
console.log(empdetails);

// String methods
/* ________________

1. charAt() : Returns the charectrer at the given index
2. concat() : Returns a combination of the two or more specified strings
3. indexOf(): Returns an index of first occurance of the specified substring.
4. replace() : Returns the matched substring with a new substring
5. split() : Splits the string into two substrings an returns as array.
6. toUpperCase() : Converts all the charecters of the string into Uppercase
7. toLowerCase() : Converts all the charecters of the string into Lowercase

//syntax: charecter = definedString.charAt(index); */
let statement:string = "TypeScript";
console.log(statement.charAt(0)) // returns 'T'
console.log(statement.charAt(1)) // returns 'y' 
console.log(statement.charAt(2)) // returns 'p'
console.log(statement.charAt(3)) // returns 'e'

/*2. concat 
syntax: str.concat(string2,[string3, string4, ..... stringnN])*/
let sentenceOne:string="GoodMorning";
let sentenceTwo:string="TypeScript";
//output: GoodMorning TypeScript.
console.log(sentenceOne.concat(sentenceTwo));
// TypeScript GoodMorning. 
console.log(sentenceTwo.concat(sentenceOne));

/* 3. IndexOf(): syntax :==> str.indexOf(searchValue[, fromIndex]) */
let str:string = 'HelloWorld';
console.log(str.indexOf('H')); // output : 0
console.log(str.indexOf('e')); // output : 1
console.log(str.indexOf('l')); // output : 2
console.log(str.indexOf('W')); // output : 5
console.log(str.indexOf('d')); // output : 9

/* TypeScript Array */
/* An array is a special type data type which can store multiple value
of different data types sequentially using a special syntax */

//Using sqaure Brackets. This method is similar to how we declare JS
let colors:string[]=['white','blue','red','yellow'];

//Using a generic array type.
let color:Array<string>=['white','blue','red','yellow']

console.log(colors);
console.log(color); // Both will give same output.

let shopping:Array<string>;
shopping=['Amazon','Flipkart','Myntra','Ajio'];
console.log(shopping);

let ids:Array<number>;
ids=[23,34,100,124,44]
console.log(ids);

// An arry in TS can contain elements of different data types using a 
// generic array type syntax;
let values:(string|number)[]=[1,2,34,'cricket','football','wipro'];
console.log(values);
// generic type
let data:Array<string|number>=[1,2,34,'cricket','football','wipro']
console.log(data);

//Accessing the values of arrays
console.log(values[0]);//returns 1
console.log(values[1]);// returns 2
console.log(values[2]);// returns 34
console.log(values[3]);// returns cricket

// if I wanted to add the elements push()
var fruits:Array<string>;
fruits=[
    'Apple','Banana','Cherry','Dewberry'
]
fruits.push('Papaya');
fruits.push('Mango');
fruits.push('Strawberry')
//printing the array after adding the three elements.
console.log(fruits);

// In order to add the elements we can make use of concat() also. 
fruits=fruits.concat(['Grapes','PineApple']);

console.log(fruits);
// If I wanted to delete/remove elements pop()
fruits.pop();
console.log(fruits.indexOf('Mango'));
// if I wanted to sort the elements in assending order sort()
console.log(fruits.sort());//acsending order
console.log(fruits)
























