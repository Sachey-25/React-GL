import React from 'react'

function ListandKey(props) {    
    return (

        <div className='listcolor'>
            <li> I am {props.color} </li>          
        </div>   
    )}
    export function Display(){
        const colors = [
            {id:101,color:'White'},
            {id:102,color:'Red'},
            {id:103,color:'yellow'},
            {id:104,color:'pink'}
        ]
            return (
                <div>
                    <h2>List of colors</h2>
                    {Display}
                    <ul>
                        { colors.map((obj) =>
                        <ListandKey key={obj.id} color={obj.color} />)}
                    </ul>
                </div>
            )
    }
export default ListandKey