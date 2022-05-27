import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../Actions/action'

const Todo = () => {

    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()

  return (
      <div className='container'>
          <div className='main-div'>
              <div className='child-div'>
                  <figure>
                      <figcaption> Add Your Add list Here...</figcaption>
                  </figure>
                <div className='addItems'>
                    <input type='text' placeholder="Add items...." 
                    value={inputData} 
                    onClick={(event) => setInputData(event.target.value )}/>
                    <i className="fa fa-plus add-btn" onClick={() => dispatch (AddTodo(inputData)) }></i>
                </div>
            </div>
        </div>     
    </div>
  )
}
export default Todo