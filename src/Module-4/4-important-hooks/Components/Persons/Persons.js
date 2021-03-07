import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    /*shouldComponentUpdate(nextProps, nexState) { // Not require when using class extends PureComponent
        console.log('[Persons.js] shouldComponentUpdate ');
        if (
            nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked
        )
            return true;
        else
            return false;

    }*/

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate ');
        return { message: 'Snapshot!' };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate ');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount ');

    }


    render() {
        console.log('[Persons.js] rendering ');
        return this.props.persons.map((person, index) => {

            return <Person
                name={person.name}
                age={person.age}
                title={person.title}
                nameChanged={(event) => this.props.changed(event, person.id)}
                deleteName={() => this.props.clicked(index)}
                key={person.id} />
        })
    }
}

export default Persons;