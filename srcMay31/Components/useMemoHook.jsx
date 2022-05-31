import React, { useState,useMemo } from 'react'

const Memohook = () => {
    const [ todos, setTodos ] = useState([])
    const [ count, setCount ] = useState(0)

    const Calculation = useMemo (()=>expensiveCalculation(count),[count])
    
    const addTodo = () => {
        setTodos ( (event) => [...event, 'addNewItem'])
    }
    const increment = () => {
        setCount ((events) => events+1);
   }
    return(
        <div>
                <h1>My Todos</h1>
                { todos.map( (value, position) => {
                    return <p key={position}>{value}</p>
                } )}
                <button onClick={addTodo}>Add Todo</button>
                <hr/>
            <div>
                Count : {count}
                <button onClick={increment}> + </button>
                <h3> Expensive Calculation </h3>
                    {Calculation}             
            </div>
        </div>
    )}
    const expensiveCalculation = (num) => {
        console.log('Calculating.......')
        for(let i=0;i<10000000000000000; i++){
            num =+ 1;
        }
        return num; //10000000000 + 1
    }
export default Memohook;