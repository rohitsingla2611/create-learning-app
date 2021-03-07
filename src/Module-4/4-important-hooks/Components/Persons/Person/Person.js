import React, { Component /*, Fragment*/ } from 'react';
import cssClasses from './Person.module.css'
import Auxiliary from '../../../HOC/Auxiliary'
import withClassRegularComponet from '../../../HOC/withClassRegularComponent'
// import WithClass from '../../../HOC/WithClass'
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering ');
        return (
            <Auxiliary>
                {/* Simlar built in Component in react is Fragment*/}
                <h1>
                    I am "{this.props.name}" and I am "{this.props.age}" old.
                </h1>
                <h2 onClick={this.props.deleteName}>
                    {this.props.title}
                </h2>
                <input type="text"
                    ref={this.inputElementRef}
                    onChange={this.props.nameChanged}
                    maxLength="15"
                    value={this.props.name} />
            </Auxiliary>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    title: PropTypes.string,
    deleteName: PropTypes.func,
    nameChanged: PropTypes.func,
}

export default withClassRegularComponet(Person, cssClasses.Person);
/*
    <WithClass className={cssClasses.Person}>
        <h1>
            I am "{this.props.name}" and I am "{this.props.age}" old.
        </h1>

        <h2 onClick={this.props.deleteName}>
            {this.props.title}
        </h2>
        <input type="text"
            onChange={this.props.nameChanged}
            maxLength="15"
            value={this.props.name} />
    </WithClass>
*/
/* return (

        [<h1>
            I am "{this.props.name}" and I am "{this.props.age}" old.
            </h1>,
        <h2 onClick={this.props.deleteName} >{this.props.title}</h2>,
        <input type="text"
            onChange={this.props.nameChanged}
            maxLength="15"
            value={this.props.name} />,
        ] // square brackets removes all styling in Person so do not use
  )
*/