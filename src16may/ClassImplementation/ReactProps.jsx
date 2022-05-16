import React,{Component} from "react";

class AppClass extends Component {
    constructor(props){
        super(props)
        this.object = { 
            name:"React WebProgramming",
            website:"TechMasters"
        }        
    }
    render() { 
        return (
            <div className="website">
                   <h2>Welcome to : {this.object.name}</h2>
                   <h3>Website name is : {this.object.website}</h3>
            </div>             
        )}
}
export default AppClass;