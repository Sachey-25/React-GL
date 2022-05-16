import React, { useState } from "react";
const Application = () => {
    const [ greet,setGreet ] = useState('Welcome to react Props')  // it is just a props mapped to useState
    const [ isShow, setShow ] =useState(true) // Get and set objects are being mapped.....
    //On an every moment the event listerners are taken care by react useState hook only.
    const handleToggle = () => {
        setShow(!isShow)
    }
    const handleChange=(event) =>{ 
        setGreet(event.target.value)
    }
    return(
        <div className="StateOverProp">
            <button onClick={handleToggle} type="button">Toggle</button>
            <input type="text" value={greet} onChange={handleChange}/>
            {isShow ? <Executable output= {greet} /> : null }
        </div>
    )}
const Executable = ({output}) =>{
        return (
            <div>
                <h2>{output}</h2>
            </div>
            )}
export default Application;