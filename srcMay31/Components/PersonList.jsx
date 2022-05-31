import React, { Component } from 'react'
import axios from 'axios'

export default class PersonList extends Component {
    state={
        persons:[],
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            console.log(response);
            this.setState( {persons:response.data});
        })
    }
  render() {
    return (
      <div>
          <ul>
              <p>User's name below</p>
              {this.state.persons.map(person => <li key={person.id}>{person.name}</li> )}
              <hr/><p>User's username below : </p>
              {this.state.persons.map(person => <li key={person.id}>{(person.username)}</li> )}
              <hr /> <p> User's email addresses below: </p>
              {this.state.persons.map(person => <li key={person.id}>{(person.email)}</li> )}
          </ul>
      </div>
    )}
}
