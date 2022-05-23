import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <div>Order placed successfully....!!!
        Continue shopping.! <br />
        <button onClick={ () => navigate('/')}>Go back</button> 
    </div>
  )}