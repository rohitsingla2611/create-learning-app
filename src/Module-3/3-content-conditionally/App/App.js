import React, { Component } from 'react';
import './App.css';
import Person from '../Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Rohit Singla', age: 22, title: 'Founder And Ceo' },
      { name: 'RD Rock Company', age: 12, title: 'Parent Company' },
      { name: "VANDRS org", age: 1.5, title: 'Child Organisation' },
    ],
    otherState: 'Some other Value',
    showPersons: false,
  }

  switchNameHandler = (nameChange) => {
    console.log("Button Clicked");

    this.setState({
      persons: [
        { name: nameChange, age: 27, title: 'fOUNDER aND cEO' },
        { name: 'rd rOCK cOMPANY', age: 17, title: 'pARENT cOMPANY' },
        { name: "vandrs ORG", age: 6.5, title: 'cHILD oRGANISATION' },
      ],
    })
  }

  nameChangeHandler = (event) => {

    this.setState({
      persons: [
        { name: 'Rohit Singla', age: 22, title: 'Founder And Ceo' },
        { name: event.target.value, age: 12, title: 'Parent Company' },
        { name: "VANDRS org", age: 1.5, title: 'Child Organisation' },
      ],
    })
  }

  toggleNameOnOff = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  render() {

    const style = {
      backgroundColor: 'lightseagreen',
      font: 'inherit',
      border: '2px solid powderblue',
      boxShadow: '0 5px 10px lightcyan',
      margin: '20px',
      padding: '16px',
      cursor: 'pointer',
      textAlign: 'center',
    };


    return (
      <div className="App" >
        <h1>Welcome To Root File</h1>

        <button
          onClick={this.switchNameHandler.bind(this, 'rOHIT sINGLA')}
          style={style}>
          Switch Name
        </button>

        <button
          onClick={this.toggleNameOnOff}
          style={style}>
          Toggle Name
        </button>

        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              title={this.state.persons[0].title}
            >
              {/* THIS IS CHILDREN ELEMENT IN PERSON[0] */}
            </Person>

            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              title={this.state.persons[1].title}
              nameChanged={this.nameChangeHandler} />

            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              title={this.state.persons[2].title} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
