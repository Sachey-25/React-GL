import React from "react";

//first arrow function
const Arrow = () => {
    return(
        <div>
            <fullname />
            <city />
            <organisation />
            
            <h2>Arrow functions are also valid in react</h2>
        </div>
    )
    //second arrow function
    const fullname = () => {
        return <h1>My name is Sachin</h1>
    }
     //second arrow function
     const city = () => {
        return <h1>I works in Bangalore</h1>
    }
     //second arrow function
     const organisation = () => {
        return <h1>Wipro Technologies pvt ltd</h1>
    }

}
export default Arrow;