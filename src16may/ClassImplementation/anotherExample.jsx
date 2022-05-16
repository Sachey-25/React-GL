import React, {Component} from "react";

class WebsiteColor extends Component{
    constructor(props){
        super(props)
        this.colors={
            sky:"Blue",
            strawberry:"Red",
            coffee:"Brown",
            earth:"multiColor"
        } }
    render(){
        return(
            <div className="colors">
                <h4 style={{color:'Blue'}}>{this.colors.sky} </h4>
                <h4 style={{color:'Red'}}>Strawberry is : {this.colors.strawberry} </h4>
                <h4 style={{color:'Brown'}}>Cofee is : {this.colors.coffee} </h4>
                <h4 style={{color:'MultiColor'}}>Earth is : {this.colors.earth} </h4>
            </div>
    )}
}
export default WebsiteColor;