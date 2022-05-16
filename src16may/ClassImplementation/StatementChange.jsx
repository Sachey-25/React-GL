import React from 'react'

class ClassCar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"Hyundai", model:"Creta", color:"White",  year:"2021"
        }
    }
    HandleChange =() => {
        this.setState({color:"Silver"})
    }
    render(){
        return(
            <div className='statement'>
                <h1>My {this.state.brand}</h1>
                <p> it is a {this.state.model} from {this.state.year}</p>
                <button type="button" onClick={this.HandleChange}>Clickme</button>
            </div>
        )}
}
export default ClassCar;