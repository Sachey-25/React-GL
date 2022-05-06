// TypeScript If else
/* an if statement can include one ot more expressions which 
return boolean. If the boolean expression to true, a set of statements is
then executed*/
if(true){
    console.log('This always executed.')
}
if(false){
    console.log('This will never executed.')
}

var x:number=10, y=20;
if(x>y){
    console.log('x is less than y');
}
//if else condition
var a:number=25,b=35;
if(x>y){
    console.log('a is greater than b')
    console.log('If block statement')
}else{
    console.log('a is lesser than b')
    console.log('Else block statement')
}
// else if 
var num:number=100, numb=200;
if(num>numb){
    console.log('num is greater than numb')
    console.log('If block statement')
}else if(num<numb){
    console.log('num is lesser than numb')
    console.log('Else if block statement')
}else if(num==numb){
    console.log('num is equal to numb')
    console.log('Else if block statement')
}else{
    console.log('None of the if block are true')
    console.log('This is else statement')
}
//Ternary Operator
/* A ternary operator is denoted by '?' and is used as a short cut for an 
if..else statement. it checks the boolean conditions and executs one of then
two statements depending on the result of the boolean contion. */

//Syntax: Boolean expression ? First Statement : second statement

let n:number=10, h=25
n<h?console.log('n is lesser than h'):console.log('n is greater than h');
// n is lesser than h.

// Switch // loops - for loop and while loop
// function ==> general functions and arrow functions.... 









