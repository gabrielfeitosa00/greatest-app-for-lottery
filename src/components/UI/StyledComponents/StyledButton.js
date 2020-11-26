import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
background-color: transparent;
border: none;
color: #b5c401;
outline: none;
cursor: pointer;
font: inherit;
padding: 10px;
margin: 10px;
font-weight: bold;
font-style:italic;
font-size: 35px;
`;

const FormButton = (props)=>{


  return <StyledButton {...props }>{props.children}</StyledButton>
}


export default FormButton