import React, { Component } from 'react';
import './App.css';
import Person from '../Person/Persons';
import styled from 'styled-components';

const ButtonStyled = styled.button`

    background-color: ${props => props.alt ? 'lightcyan' : 'lightseagreen'};
    color: ${props => props.alt ? 'darkred' : 'white'};
    font: inherit;
    border: 2px solid powderblue;
    box-shadow: 0 5px 10px lightcyan;
    margin: 20px;
    padding: 16px;
    cursor: pointer;
    textAlign: center;
    &:hover {
        background-color: ${props => props.alt ? 'lightskyblue' : 'lightblue'};
        color: black;
      }
`;

class App extends Component {

    state = {
        persons: [
            {
                id: 'Founder', name: 'Rohit Singla',
                age: 22, title: 'Founder And Ceo'
            },
            {
                id: 'Parent', name: 'RD Rock Company',
                age: 12, title: 'Parent Company'
            },
            {
                id: 'Child', name: "VANDRS org",
                age: 1.5, title: 'Child Organisation'
            },
        ],
        otherState: 'Some other Value',
        showPersons: false,
    }

    switchNameHandler = (nameChange) => {
        console.log("Button Clicked");

        this.setState({
            persons: [
                {
                    id: 'Founder', name: nameChange,
                    age: 27, title: 'fOUNDER aND cEO'
                },
                {
                    id: 'Parent', name: 'rd rOCK cOMPANY',
                    age: 17, title: 'pARENT cOMPANY'
                },
                {
                    id: 'Child', name: "vandrs ORG",
                    age: 6.5, title: 'cHILD oRGANISATION'
                },
            ],
        })
    }



    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })
    }

    toggleNameOnOff = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });

    }

    deleteNameHandler = (personsIndex) => {
        // const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personsIndex, 1);
        this.setState({ persons: persons })
    }

    render() {



        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) =>
                        <Person
                            name={person.name}
                            age={person.age}
                            title={person.title}
                            nameChanged={(event) => this.nameChangeHandler(event, person.id)}
                            deleteName={() => this.deleteNameHandler(index)}
                            key={person.id} />
                    )}
                </div>
            );

        };
        const classes = [];
        if (this.state.persons.length < 3)
            classes.push('red');
        if (this.state.persons.length < 2)
            classes.push('italic');
        if (this.state.persons.length < 1) {
            classes.pop('red');
            classes.pop('italic');
        }
        return (
            <div className="App" >
                <h1 className={classes.join(' ')} >Welcome To Root File</h1>

                <ButtonStyled
                    onClick={this.switchNameHandler.bind(this, 'rOHIT sINGLA')}
                    // alt={this.state.showPersons}
                    key="key1">

                    Switch Name
                </ButtonStyled>

                <ButtonStyled
                    onClick={this.toggleNameOnOff}
                    alt={this.state.showPersons}
                    key="key2">
                    Toggle Name
                </ButtonStyled>
                {persons}

            </div>
        );
    }
}

export default App;
