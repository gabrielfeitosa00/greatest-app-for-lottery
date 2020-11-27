import React from 'react';
import styled from 'styled-components';
const StyledFooter= styled.footer`
font-size: 15px;
color:#707070;
border-top: 2px solid #EBEBEB;
margin: 0 auto;
text-align:center;
padding: 15px;
height: 50px;
flex-shrink: 0;
position:absolute;
bottom:0;
width:100%;
box-sizing:border-box;
` 
const Footer = (props) =>{
    return <StyledFooter {...props}>Copyright 2020 Luby Software</StyledFooter>
}

export default Footer;