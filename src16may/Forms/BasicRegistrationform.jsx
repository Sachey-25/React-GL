import React,{Component} from "react";

class RegisterForm extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username: ' ',
         comments:' ',
         topic:'react'
      }
    }
    handleUsernameChange=(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentChange=(event) =>{
        this.setState({
            comments:event.target.value
            })
    }
    handleTopicChange = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username}${this.state.comments}${this.state.topic}`)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="appform">
                    <lable>Username</lable>

                    <input 
                    type='text' 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange}/>

                </div>
                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="javascript">JavaScript</option>
                        <option value="NodeJs">NodeJs</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )}
}
export default RegisterForm