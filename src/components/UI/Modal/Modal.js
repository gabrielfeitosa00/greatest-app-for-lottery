import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  z-index: 500;
  width: 70%;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  font-weight: bold;
  color: #707070;
  text-align: center;
  font-size: 20px;
  border: solid 1px #dddddd;
  box-shadow: 0 1px 5px #000014;
  padding: 10px;
  border-radius: 14px;
  height: 10vh;
`;
const Modal = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Modal;
