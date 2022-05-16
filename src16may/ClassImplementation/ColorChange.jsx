import React from 'react'

class ChangeColor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sky:"Blue"
        }
    }
        ColorChange = () => {
            this.setState( { color:"SkyBlue"} )
        }
    render(){
        return(
            <div className='Change'>
            <p>The color of the sky {this.state.sky}</p>
            <p style = {{color:"skyblue"}} > {this.state.color} </p>
             <button type='button' onClick={this.ColorChange}>Clickme</button>
            </div>
        )}
    }
export default ChangeColor;