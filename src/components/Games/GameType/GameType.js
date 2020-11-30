import React from 'react';

import styled from 'styled-components';

const GameTypeButton = styled.button`
padding:10px;
width:fit-content;
border: 2px solid ${props=>props.color};
border-radius: 100px;
color: ${props=>props.active? '#F7F7F7' :  props.color};
background-color:  ${props=>props.active? props.color : '#F7F7F7'};
`

const GameType = (props)=>{
    return <GameTypeButton {...props}>{props.name}</GameTypeButton>
}

export default GameType;
