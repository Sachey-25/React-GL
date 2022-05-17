import React from "react";
import LifecycleA from "./components/LifecycleA";
import ParentComp from "./components/ParentComp";


function App() {
  return (
    <div className="App">
     <h2>Hello World</h2>
     <LifecycleA />
     <ParentComp />
    </div>
  );
}

export default App;
