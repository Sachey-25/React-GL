import { useState } from "react"

const initialData = {
    list:[]
}

const todoReducers = (state=initialData, action) => {
    switch(action.type){
        case 'ADD_Todo':
            const [ id, data ] = action.payload
            return {
                ...state,
                data:[
                    {
                    ...state.list,
                    id:id,
                    data:data
                }
            ]}
            default : return state;
        }    
}
export default todoReducers;