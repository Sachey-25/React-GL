import React from "react";
import { Routes, Route } from 'react-router-dom'
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { OrderSummary } from "./Components/OrderSummary";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>

    </div>
  )};
export default App;
