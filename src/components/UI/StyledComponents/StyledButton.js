import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
background-color: transparent;
border: none;
color: ${props => props.colored? props.colored:'#707070'} ;
outline: none;
cursor: ${props=>props.disabled ? 'not-allowed' : 'pointer' };
font: inherit;
padding: 10px;
margin: 10px;
font-weight: bold;
font-style:italic;
font-size: ${props=>props.size};
@media(max-width:800px){
  font-size: 17px
}
`;

const FormButton = (props)=>{


  return <StyledButton {...props }>{props.children}</StyledButton>
}


export default FormButton