import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         name:"Sachin",
      }
      console.log('LifecycleA constructor - parent component')
    }
    static getDerivedStateFromProps(props, state){
        console.log('lifecycle getDerivedStateFromProps - parent component')
        return null
    }
    //I would like to check whether the above component is mounted
    componentDidMount(){
        console.log('LifecycleA componentDidMount -parent component')
    }
    //Process of update component
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate -parent component')
        return true;
    }

    getSnapshotBeforeUpdate(prePros, preState){
        console.log('LifeCycleA componentDidUpdate -parent component ')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate -parent component')
    }
    //The state property is being updated
    changeState = () => {
        this.setState({
            name:'TechMasters'
        })
    }
  render() {
    console.log('LifecycleA render')
    return (
    <div> lifecycleA <br /> 
        <button onClick={this.changeState}> 
        changeState 
        </button> 
    <LifecycleB />
        </div>)}
}
export default LifecycleA