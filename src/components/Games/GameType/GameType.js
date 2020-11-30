import React from 'react';

import styled from 'styled-components';

const GameTypeButton = styled.button`
padding:10px;

box-sizing:border-box;
border: 2px solid ${props=>props.color};
font-weight:bold;
font-style: italic;
font-size:14px;
margin: 0 5px;
flex: 1 1 113px;
border-radius: 100px;
color: ${props=>props.active? '#F7F7F7' :  props.color};
background-color:  ${props=>props.active? props.color : '#F7F7F7'};
@media(max-width:800px){
  font-size: 11px
}
`

const GameType = (props)=>{
    return <GameTypeButton {...props}>{props.name}</GameTypeButton>
}

export default GameType;
