import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
background-color: transparent;
border: none;
color: ${props => props.type==='submit'? '#b5c401':'#707070'} ;
outline: none;
cursor: pointer;
font: inherit;
padding: 10px;
margin: 10px;
font-weight: bold;
font-style:italic;
font-size: 35px;
@media(max-width:800px){
  font-size: 17px
}
`;

const FormButton = (props)=>{


  return <StyledButton {...props }>{props.children}</StyledButton>
}


export default FormButton