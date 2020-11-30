import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
  width: 65%;
  border: 1px solid red;
  display: flex;
  flex-flow: row;
  height: 96px;
  @media(max-width:800px){
    width:100%;
    }
}
`;

const VerticalBar = styled.div`
  border-radius: 100px;
  border: solid 1px ${(props) => props.color};
  background-color: ${(props) => props.color};
  width: 6px;
  height: 100%;
`;

const GameCard = ({ color }) => {
  return (
    <StyledCard>
      <VerticalBar color={color} />
      Agiota
    </StyledCard>
  );
};

export default GameCard;
