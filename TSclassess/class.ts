class Employee {
    //Class Properties..
    empCode:number
    empName:string
    empCity:string
    empPincode:number

    //create a constructor to initialize the values.
    constructor(code:number,name:string,city:string,pin:number){
        this.empCode=code;
        this.empName=name;
        this.empCity=city;
        this.empPincode=pin;
    }
    //method 
    getSalary():number{
        return 5000;
    }
}
// Object creation
let object = new Employee(101,'Sachin','Bidar',585414);
//Function call using object
console.log(object.getSalary());

// Inheritance
class Person{
    name:string
    constructor(name:string){
        this.name=name;
    }
}
class Emp extends Person{
    empCode:number;
    empAge:number;
     constructor(empCode:number, name:string, empAge:number){
         super(name);// derive the parent class properties. 
         this.empCode=empCode;
         this.empAge=empAge;
     }
     // Create to a method which is going to display name of employee.
     display():void{
         console.log("Name= " + this.name + ",EmployeeCode = " + this.empCode)
        }
}
let emp=new Emp(101,'Sachin',40);
emp.display();

// Inheritance using interface
interface IPerson{
    name:string;
    //method
    display():void; // Abstract method
}
interface IEmployee{
    empCode:number;
    display():void; // Abstract method
}
//class inheritance implementation
class subClass implements IPerson,IEmployee{
    empCode: number;
    name: string;

    constructor(empCode:number, name:string){
        this.empCode=empCode;
        this.name=name;
    }
    //Method to display the empCode and empName
    display():void{
        console.log("Name = "+ this.name + ",Employee Code = " + this.empCode)
    }
}
//Object to first interface
let p:IPerson=new subClass(101,'sachin');
p.display();

//Object to second interface
let em:IEmployee=new subClass(102,'Seenu');
em.display();

// Interface extends 
class example{
    name:string
}
interface implementation extends example{
    empCode:number;
}
let ob: implementation={empCode: 201, name:"Krithika"}