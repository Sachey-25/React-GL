import axios from 'axios';
import React, { Component } from 'react'

export default class PersonInput extends Component {
    state={
        name:'',
    }
    handleChange = event => {
        this.setState({ name:event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();

    const user = {
        name : this.state.name
    }
    axios
    .post(`https://jsonplaceholder.typicode.com/users`, {user})
    .then(response => { 
        console.log(response);
        console.log("Http Post method worked and below are the data.....")
        console.log(response.data)
    });
}

  render() {
    return (
      <div className='container'>
          <form onSubmit={this.handleSubmit}>
              <label>
                  Person Name:
                  <input type="text" name='name' onChange={this.handleChange}/>
              </label>
              <button type='submit'>AddUser</button>
          </form>
      </div>
    )
  }
}
