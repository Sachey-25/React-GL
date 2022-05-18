import React from 'react'

function ArrayList() {
    //create array objects
    const persons=[
    {
        id:101,
        name:'Sachin Anil',
        age:28,
        skill:'react'
    },
    {
        id:102,
        name:'Seenu',
        age:22,
        skill:'JavaScript'
    },
    {
        id:103,
        name:'Kevin',
        age:21,
        skill:'Angular'

    },
    {
        id:104,
        name:'Pushpa',
        age:21,
        skill:'Vue'

    },
    {
        id:105,
        name:'BharatiKanna',
        age:21,
        skill:'react'
    }
]
    //lets create map object to iterate the values present in array object
    const personList = persons.map(person  =>
       // <Person key={person.id}
        <h2>
            I am {person.name},
            I am {person.age} years old.
            I know {person.skill}
        </h2>)
  return (
    <div>
        {personList}
    </div>
  )}

export default ArrayList