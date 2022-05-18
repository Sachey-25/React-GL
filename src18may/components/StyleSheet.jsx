import React from 'react'
import './myStyle.css'


function StyleSheet(props) {
  let className = props.primary ? 'primary':''
  let anything= props.anything ? 'anything':''

  return (
    <div>
        <h1 className={`${className} font-xl`}>StyleSheet</h1>
        <h1 className={`${className} text`}>This is center text </h1>
        <h2 anything={`${anything} font-xl text`}>Another Style </h2>
    </div>
  )
}
export default StyleSheet