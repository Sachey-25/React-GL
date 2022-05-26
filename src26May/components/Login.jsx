import React from 'react'
import { useDispatch } from 'react-redux'
import {login,logout} from '../features/user'

function Login() {
    const dispatch = useDispatch()



  return (
      <div className='Login'>
         <button 
         onClick={ () => {
             dispatch(login ( { name:"Vikas",age:22, email:"vikas2510@email.com"} ))
         }}>Login</button>

        <button 
         onClick={ () => {
             dispatch(logout ())
         }}>Logout</button>
      </div>   
  )}
export default Login