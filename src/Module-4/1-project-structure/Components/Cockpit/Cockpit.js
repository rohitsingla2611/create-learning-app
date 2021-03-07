import React from 'react';
import cssClasses from './Cockpit.module.css';
import App from '../../Containers/App';

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = cssClasses.Lightcyan;
    }
    if (props.persons.length < 3)
        assignedClasses.push(cssClasses.red);
    if (props.persons.length < 2)
        assignedClasses.push(cssClasses.italic);
    if (props.persons.length < 1) {
        assignedClasses.pop(cssClasses.red);
        assignedClasses.pop(cssClasses.italic);
    }
    
    return (
        <div className={cssClasses.Cockpit}>
            <h1 className={assignedClasses.join(' ')} >Welcome To Root File</h1>
            <h2 className={assignedClasses.join(' ')} >{props.indexTitle}</h2>
            <button
                onClick={props.switchButton.bind(App.this, 'rOHIT sINGLA')}
                key="key1">
                Switch Name
            </button>
            <button
                className={btnClass}
                onClick={props.toggleButton}
                key="key2">
                Toggle Name
            </button>
        </div>
    );
}

export default Cockpit;