import React from 'react';
import './Person.css'


const person = (props) => {

    return (
        <div className="Person">
            <h1> I am "{props.name}" and I am "{props.age}" old.</h1>
            <h2 onClick={props.deleteName} >{props.title}</h2>
            <input type="text"
                onChange={props.nameChanged}
                maxLength="15"
                value={props.name} />
        </div>
    )
}

export default person;