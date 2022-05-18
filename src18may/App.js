import React from "react";
import ArrayList from "./components/ArrayList";
import LifecycleA from "./components/LifecycleA";
import ListandKey, { Display } from "./components/ListandKey";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet"



function App() {
  return (
    <div className="App">
     <h2>Hello World</h2>
     <LifecycleA />
     <NameList />
     <ArrayList />
     <ListandKey />
     <Display />
     <StyleSheet primary={true} />
     <StyleSheet anything={true} />
    </div>
  );
}

export default App;