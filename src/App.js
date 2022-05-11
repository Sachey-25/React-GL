import React from "react";
import Display from "./props/functionalProps";
import DemoComponent from "./props/functionalProps";
import Parent from "./props/implementation";
import FunctionComponent from "./props/paramertizedProps"
import Coffee from "./props/propsObjects";
import { Store } from "./props/withoutProps";
import { StoreOne } from "./props/withoutpropswithoutvar";
import State from "./Hooks/simpleState"


function App() {
  return (
    <div className="App">
      <DemoComponent />
      <Parent />
      <Display />
     <FunctionComponent />
     <Store />
     <StoreOne />
     <Coffee />
     <State />
     
    </div>
  );
}

export default App;
