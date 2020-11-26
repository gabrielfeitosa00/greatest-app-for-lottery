import React from "react";
import classes from './AppTitle.module.css';
import styled from 'styled-components'
const AppTitle = (props) => {
    const StyledContainer = styled.div `
    background:#B5C401;
    border-radius:100px;
    text-align: center;
    width:15%;
    height: 38px;
    color:white;
    font-size:1.5em;
    box-sizing:border-box;

    `
  return (
    <div className={classes.AppTitle}>
      <h1 className={classes.FirstTitle}>The Greatest App</h1>
      <StyledContainer>
          for
      </StyledContainer>
      <h1 className={classes.SecondTitle}>LOTTERY</h1>
    </div>
  );
};

export default AppTitle;
