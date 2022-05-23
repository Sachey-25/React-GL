import React,{useReducer} from "react";
// import { Routes, Route } from 'react-router-dom'
// import { About } from "./Components/About";
// import DataFecthing from "./Components/DataFecthing";
import ComponentA from "./Components/Global/ComponentA";
import ComponentB from "./Components/Global/ComponentB";
import ComponentC from "./Components/Global/ComponentC";
// import { Home } from "./Components/Home";
// import { NavBar } from "./Components/NavBar";
// import { OrderSummary } from "./Components/OrderSummary";

export const CountContext = React.createContext()


const initialState=0
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [ count, dispatch ] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider 
      value={{ countState:count , countDispatch:dispatch }}
    >
          <div className="App">
            Count - { count }
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </div>
    </CountContext.Provider>

  )};
export default App;
