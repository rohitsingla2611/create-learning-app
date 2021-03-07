import React from 'react';
import cssClasses from './Person.module.css'

const Person = (props) => {
    return (
        <div className={cssClasses.Person}>
            <h1> I am "{props.name}" and I am "{props.age}" old.</h1>
            <h2 onClick={props.deleteName} >{props.title}</h2>
            <input type="text"
                onChange={props.nameChanged}
                maxLength="15"
                value={props.name} />
        </div>
    )
}

export default Person;