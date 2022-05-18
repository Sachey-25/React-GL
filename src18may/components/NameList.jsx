import React from 'react'

function NameList() {
    //create an array which stores some data
    const names=['Kruthika','OnlyKruthika','Madhuri','Tamilnadu']
    const nameList=names.map( object=> <h2>{object}</h2> )
  return (      
    <div>
        <h3>{names[0]}</h3>
        <h3>{names[1]}</h3>
        <h3>{names[2]}</h3>
        <h3>{names[3]}</h3>  
        <p>------------------------------------------------</p>
        {
            names.map( object=> <h2>{object}</h2> )
        }
        <p>------------------------------------------------</p>
        <h2>Another way of implementation</h2>
        {nameList}      
    </div>
  )}

export default NameList