import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <div>Order placed successfully....!!!
        Continue shopping.!
        <button onClick={ () => navigate('/')}>Go back</button> <br />
        <label>firstname: 
          <input type="text" />
        </label> <br />
        <label>lastname : 
          <input type="text" />
        </label> <br />
        <label>city : 
          <input type="text" />
        </label> <br />
        <label>state : 
          <input type="text" />
        </label><br />
        <button>Register</button>
    </div>
  )}