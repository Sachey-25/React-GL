//TypeScript-Tuple
/* TypeScript is introduced a new data type called as tuple
tuple can be two value of diffent data type */

// General representaion where's number and string are declared 
// Separately.
var empId:number = 101
var empname:string = 'Seenu'

// Tuple type variable  : Tuple represation
var employee:[number, string] = [1,"Seenu"];
console.log(employee)

var person:[number,string,boolean,string,number]=[
    1,
    "Seenu",
    true,
    "Chennai",
    1234
]
console.log(person)

const example:Array<string|number>=[1,2,2,2,'' , '' , '' ]

var persondetails:[number,string] [];
var examp:[number,string] = [1,'Seenu'];
console.log(examp[0])// 

persondetails=[[1,"Seenu"],[2,"Chennai"],[1234,'Tamilnadu'],
                [1,'value']];
console.log(persondetails);

// access the values present in the tuple.
console.log(persondetails[0]) // returns 1,seenu
console.log(persondetails[1]) // returns 2, Chennai
console.log(persondetails[3]) // returns 1, value
console.log(persondetails[2]) // returns 1234, Tamilnadu
console.log(persondetails[4]) // compile error.

// Note : Tuples go good with all the array methods....!!! 











   



