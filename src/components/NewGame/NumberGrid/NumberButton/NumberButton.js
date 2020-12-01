import React from "react";
import styled from "styled-components";

const StyledNumber = styled.button`
  cursor:pointer;
  border: none;
  width: 58px;
  height: 58px;
  color: #ffffff;
  font-size:17px;
  font-weight:bold;
  outline:none;
  background-color: ${(props) =>
    props.active ? props.activeColor : "#ADC0C4"};
  padding: 10px;
  border-radius: 100%;
  box-sizing: border-box;
  align-self: center;
  justify-self: center;
`;

const NumberButtons = (props) => {
  return <StyledNumber {...props}>{props.children}</StyledNumber>;
};

export default NumberButtons;
