import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 2px solid powderblue;
box-shadow: 0 5px 10px lightcyan;
padding: 16px;
text-align: center;

'@media (minWidth: 500px)': {
    width: '700px'
`;

const Person = (props) => {

    return (
        <StyledDiv>
            <h1> I am "{props.name}" and I am "{props.age}" old.</h1>
            <h2 onClick={props.deleteName} >{props.title}</h2>
            <input type="text"
                onChange={props.nameChanged}
                maxLength="15"
                value={props.name} />

        </StyledDiv>
    )
}

export default Person;