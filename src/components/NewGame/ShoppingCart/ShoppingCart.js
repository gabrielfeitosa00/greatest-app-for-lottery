import React from 'react';
import styled from 'styled-components';
//mudar a altura dps quando colocar os elementos do carrinho
const Cart = styled.div`
width:20%;
min-height:20vh;
border: 3px solid #E2E2E2;
border-radius: 10px;
box-sizing:border-box;
@media(max-width:800px){
    margin-top:10px;
    width:100%;
    min-height:30vh;
}
` 

const ShoppingCart = (props)=>{
    return <Cart>A</Cart>
}


export default ShoppingCart