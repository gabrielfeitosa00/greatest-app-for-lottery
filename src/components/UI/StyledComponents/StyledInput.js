import React from 'react';
import styled from 'styled-components';
const StyledInput = styled.input`
background-color: transparent;
border: none;
padding: 20px 10px;
font-weight: bold;
font-style:italic;
font-size:17px;
color:#9D9D9D;
border-bottom:solid 2px #EBEBEB;

`;
const FormInput = (props) =>{
    return <StyledInput {...props}/>
}


export default FormInput
