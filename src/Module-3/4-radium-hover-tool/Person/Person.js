import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) => {

    const style = {
        '@media (minWidth: 500px)': {
            width: '700px'
        }
    };

    return (
        <div className="Person" style={style}>
            <h1> I am "{props.name}" and I am "{props.age}" old.</h1>
            <h2 onClick={props.deleteName} >{props.title}</h2>
            <input type="text"
                onChange={props.nameChanged}
                maxLength="15"
                value={props.name} />
        </div>
    )
}

export default Radium(person);