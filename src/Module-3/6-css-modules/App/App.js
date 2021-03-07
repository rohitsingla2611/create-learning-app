import React, { Component } from 'react';
import cssClasses from './App.module.css';
import Person from '../Person/Person';

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


    // let btnClass = [cssClasses.button]; // Method 1
    let btnClass = ''; // Method 2
    const assignedClasses = [];
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

      //  btnClass.push(cssClasses.Lightcyan); // Method 1 
      btnClass = cssClasses.Lightcyan; // Method 2
    };

    if (this.state.persons.length < 3)
      assignedClasses.push(cssClasses.red);
    if (this.state.persons.length < 2)
      assignedClasses.push(cssClasses.italic);
    if (this.state.persons.length < 1) {
      assignedClasses.pop(cssClasses.red);
      assignedClasses.pop(cssClasses.italic);
    }
    return (
      <div className={cssClasses.App}>
        <h1 className={assignedClasses.join(' ')} >Welcome To Root File</h1>

        <button
          // className={cssClasses.button} // Method 1
          // Method 2 called directly
          onClick={this.switchNameHandler.bind(this, 'rOHIT sINGLA')}
          key="key1">

          Switch Name
        </button>

        <button
          // className={btnClass.join(' ')} // Method 1
          className={btnClass} // Method 2
          onClick={this.toggleNameOnOff}
          key="key2">
          Toggle Name
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
