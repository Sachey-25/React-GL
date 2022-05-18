import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:"Sachin",
      }
      console.log('LifecycleB constructor - ChildComponet')
    }
    static getDerivedStateFromProps(props, state){
        console.log('lifecycle getDerivedStateFromProps- ChildComponet')
        return null
    }
    //I would like to check whether the above component is mounted
    componentDidMount(){
        console.log('LifecycleB componentDidMount- ChildComponet')
    }
    //Copied the these methods from LifecycleA 
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate- ChildComponet')
        return true;
    }

    getSnapshotBeforeUpdate(prePros, preState){
        console.log('LifeCycleB componentDidUpdate- ChildComponet')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate- ChildComponet')
    }

  render() {
    console.log('LifecycleB render')
    return (<div> LifecycleB </div>)}
}
export default LifecycleB