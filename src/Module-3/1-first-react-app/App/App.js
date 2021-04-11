import React, { useState } from 'react';
import Person from '../Person/Person';
import './App.css';

const App = () => {

    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Rohit Singla', age: 22, title: 'Founder And Ceo' },
            { name: 'RD Rock Company', age: 12, title: 'Parent Company' },
            { name: "VANDRS org", age: 1.5, title: 'Child Organisation' },
        ],
    });

    const [otherState, setOtherState] = useState('Some other value');
    console.log(personsState, otherState);
    console.log(setOtherState);


    const switchNameHandler = () => {
        console.log("Button Clicked");


        setPersonsState({
            persons: [
                { name: 'rOHIT sINGLA', age: 27, title: 'fOUNDER aND cEO' },
                { name: 'rd rOCK cOMPANY', age: 17, title: 'pARENT cOMPANY' },
                { name: "vandrs ORG", age: 6.5, title: 'cHILD oRGANISATION' },
            ],
        })
    }


    return (
        <div className="App">
            <h1>Welcome To Root File</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                title={personsState.persons[0].title} >
                {/* THIS IS CHILDREN ELEMENT IN PERSON[0] */}
            </Person>

            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                title={personsState.persons[1].title} />

            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
                title={personsState.persons[2].title} />

        </div>
    );
}


export default App;
