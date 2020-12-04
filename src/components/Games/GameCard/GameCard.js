import React from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
const StyledCard = styled.section`
  margin-bottom:12px;
  width: 100%;
  
  display: flex;
  flex-flow: row;
  height: 96px;
  

}
`;

const VerticalBar = styled.div`
  border-radius: 100px;
  border: solid 1px ${(props) => props.color};
  background-color: ${(props) => props.color};
  width: 6px;
  height: 100%;
`;
const Content = styled.div`
  
  width: inherit;
  padding: 0 10px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
`;
const Numbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: inherit;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
`;
const Provider = styled.div`
   {
    color: ${(props) => props.color};
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  p {
    margin: 0 6px;
    color: #707070;
    font-size: 14px;
    font-weight: normal;
    font-style: italic;
  }
`;

const DateText = styled.div`
  font-size: 14px;
  font-style: italic;
  margin: 17px 0;
`;
const GameCard = ({ color, numbers, name, date, price,onDelete,purchasing }) => {
  const formatedPrice = new Intl.NumberFormat("pt", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  

    

  


  
  
    
  
  return (
    <StyledCard>
      { purchasing ? (
        <BsTrash
          style={{
            verticalAlign: "middle",
            alignSelf: "center",
            width: "12%",
            height: "30%",
            cursor: 'pointer'
          }
          
          }
          onClick={onDelete}
        />
      ): null}
      <VerticalBar color={color} />
      <Content>
        <Numbers>{numbers}</Numbers>
        <DateText>{date} - ({formatedPrice}) </DateText>
        <Provider color={color}>{name}</Provider>
      </Content>
    </StyledCard>
  );
};

export default GameCard;
