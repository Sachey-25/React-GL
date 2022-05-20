import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
 const navigate = useNavigate()
  return (
    <div>
        Home Page : Hi I am sachin, Whats your name? 
        <h4>Hey sachin, Click to about link to see my name..!!!! </h4>
        <button onClick= {() => navigate('/order-summary')}> sign up </button>
        <button onClick= {() => navigate('/order-summary')}> login  </button>
       
    </div>
  )
}