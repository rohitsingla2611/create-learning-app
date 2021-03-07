import React, { Component } from 'react';
import './App.css';
import PersonRadium from '../Person/Person';
import Radium, { StyleRoot } from 'radium';

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

    const style = {
      backgroundColor: 'lightseagreen',
      color: 'white',
      font: 'inherit',
      border: '2px solid powderblue',
      boxShadow: '0 5px 10px lightcyan',
      margin: '20px',
      padding: '16px',
      cursor: 'pointer',
      textAlign: 'center',

      ':hover': {
        backgroundColor: 'lightblue',
        color: 'black',
      }

    };


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) =>
            <PersonRadium
              name={person.name}
              age={person.age}
              title={person.title}
              nameChanged={(event) => this.nameChangeHandler(event, person.id)}
              deleteName={() => this.deleteNameHandler(index)}
              key={person.id} />
          )}

        </div>
      );
      style.backgroundColor = "lightcyan";
      style.color = "darkred";
      style[':hover'] = {
        backgroundColor: 'lightskyblue',
        color: 'black',
      }

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
      <StyleRoot>
        <div className="App" >
          <h1 className={classes.join(' ')} >Welcome To Root File</h1>

          <button
            onClick={this.switchNameHandler.bind(this, 'rOHIT sINGLA')}
            style={style}
            key="key1">
            Switch Name
        </button>

          <button
            onClick={this.toggleNameOnOff}
            style={style}
            key="key2">
            Toggle Name
        </button>
          {persons}

        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
