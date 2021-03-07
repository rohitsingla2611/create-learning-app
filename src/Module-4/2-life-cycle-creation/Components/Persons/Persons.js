import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
    console.log('[Persons.js] rendering ');
    return props.persons.map((person, index) => {
        return <Person
            name={person.name}
            age={person.age}
            title={person.title}
            nameChanged={(event) => props.changed(event, person.id)}
            deleteName={() => props.clicked(index)}
            key={person.id} />
    })
};

export default Persons;
