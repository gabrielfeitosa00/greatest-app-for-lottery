import React from 'react';
import styled from 'styled-components';

const Cart = styled.div`
width:20%;
height:55%;
border: 3px solid #E2E2E2;
border-radius: 10px;
box-sizing:border-box;
@media(max-width:800px){
    margin-top:10px;
    width:100%;
    height:30%;
}
` 

const ShoppingCart = (props)=>{
    return <Cart>A</Cart>
}


export default ShoppingCart