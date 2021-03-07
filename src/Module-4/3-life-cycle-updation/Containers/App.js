import React, { Component } from 'react';
import cssClasses from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor ');
    this.state = {
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
      showCockpit: true,
    }

  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps ', props);

    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount ');

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate ');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate ');
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
  cockpitOnOff = () => {
    const doesShow = this.state.showCockpit;
    this.setState({ showCockpit: !doesShow });
  }

  deleteNameHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons })
  }

  render() {

    console.log('[App.js] rendering ');


    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          changed={this.nameChangeHandler}
          clicked={this.deleteNameHandler} />
    };
    let btnClass = '';

    if (this.state.showCockpit) {
      btnClass = cssClasses.Lightcyan;
    }
    return (
      <div className={cssClasses.App}>
        <button className={btnClass}
          onClick={this.cockpitOnOff}
          key="key1">
          Show Cockpit
            </button>
        {this.state.showCockpit ?
          <Cockpit
            indexTitle={this.props.indexTitle}
            switchButton={this.switchNameHandler}
            toggleButton={this.toggleNameOnOff}
            showPersons={this.state.showPersons}
            persons={this.state.persons}>
            {/*Passing Length (personsLength) for optimization purpose*/}
          </Cockpit>
          : null}

        {persons}
      </div>
    );
  }
}

export default App;
