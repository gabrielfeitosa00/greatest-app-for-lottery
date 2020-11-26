import React from 'react';
import styled from 'styled-components';
const StyledFooter= styled.footer`
font-size: 15px;
color:#707070;
border-top: 2px solid #EBEBEB;
margin: 0 auto;
text-align:center;
padding: 15px;
height: 45px;
` 
const Footer = (props) =>{
    return <StyledFooter>Copyright 2020 Luby Software</StyledFooter>
}

export default Footer;