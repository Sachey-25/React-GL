import axios from 'axios';
import React, { Component } from 'react'

export default class Persondelete extends Component {
    state={
        id:'',
    }
    handleChange = event => {
        this.setState({ id:event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();

    axios
    .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
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
                  Person id:
                  <input type="number" name='id' onChange={this.handleChange}/>
              </label>
              <button type='submit'>delete</button>
          </form>
      </div>
    )}
}
