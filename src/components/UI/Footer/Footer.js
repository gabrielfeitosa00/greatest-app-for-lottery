import React from 'react';
import styled from 'styled-components';
const StyledFooter= styled.footer`
font-size: 15px;
color:#707070;
border-top: 2px solid #EBEBEB;

text-align:center;
padding: 15px;
height: 50px;
width:100%;
box-sizing:border-box;
` 
const Footer = (props) =>{
    return <StyledFooter {...props}>Copyright 2020 Luby Software</StyledFooter>
}

export default Footer;