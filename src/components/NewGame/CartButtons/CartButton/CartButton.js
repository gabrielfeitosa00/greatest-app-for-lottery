import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
padding:10px;
height:7vh;
border: 1px solid #27C383;
width:fit-content;
color: ${props=>props.filled? '#FFFFFF': '#27C383'};
background-color:${props=>props.filled? '#27C383' :  '#FFFFFF'};
border-radius: 10px;
font-size:16px;
cursor: ${props=>props.disabled ? 'not-allowed':'pointer'};
@media(max-width:800px){
    font-size:14px 
}

` 

const CartButton = (props)=>{
    return <StyledButton {...props}>{props.children}</StyledButton>
}


export default CartButton