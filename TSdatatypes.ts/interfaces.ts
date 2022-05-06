// Interface type example
interface KeyPair{
    key:number; // number return type 
    value:string; // string return type
}
let kv:KeyPair={key:1 , value:"One"}
//let keyval:KeyPair={key:10 , val:"One"} //compile error
//let keyvalu:KeyPair={key:15 , value:100} // compile error

console.log(kv) // {key:1 value:One}

// Interface function/method example
interface keyvaluepair
{
    (key:number,value:string):void
}
//method
function addKeyValue(key:number, value:string):void{
    console.log('addKeyValue: key = ' + key + 'value = ' + value);
}
function updateKeyValue(key:number, value:string):void{
    console.log('updateKeyValue: key = ' + key + 'value = ' + value);
}
// create an object
let kvp: keyvaluepair = addKeyValue;
kvp(10, 'Sachin Tendulkar') //output : addKeyValue: key=10, value=Sachin Tendulkar

kvp=updateKeyValue;
kvp(100, 'Centuries')//output : addKeyValue: key=100, value=Centuries;
