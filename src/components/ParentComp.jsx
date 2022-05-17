import React, { Component } from 'react'
import PureComp from './PureComponent'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Sachin"
      }
    }
    componentDidMount(){
        setInterval( () => {
            this.setState({
                name:"Sachin Anil"
            })
        },3000)
    }
  render() {
      console.log('***********************ParentComponent***************')
    return (
      <div>
          ParentComp
          <RegComp name={this.state.name}></RegComp>
          <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp