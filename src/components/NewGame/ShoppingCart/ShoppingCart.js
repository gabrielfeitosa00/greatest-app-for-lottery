import React from "react";
import styled from "styled-components";
import StyledButton from "../../UI/StyledComponents/StyledButton";
import GameCard from "../../Games/GameCard/GameCard";
import { VscArrowRight } from "react-icons/vsc";
//mudar a altura dps quando colocar os elementos do carrinho
const Cart = styled.div`
  grid-column: 3/4;

  display: flex;
  flex-flow: column;
  margin-top: 30px;
  margin-bottom: 25px;
  min-height: 40vh;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    margin-top: 10px;
    align-self: center;
    grid-column: 1/4;
  }
`;

const CartSave = styled.div`
  display: flex;
  align-content: center;
  flex-flow:column;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  background-color: #e2e2e2;
  border: solid 1px #e2e2e2;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
`;

const CartContent = styled.div`
  padding: 10px 6px;
  p{
    font-size:20px;
  }
`;

const ShoppingCart = (props) => {
  return (
    <Cart>
      <CartContent>
        <p>
          {" "}
          <strong>CART</strong>{" "}
        </p>
        <GameCard
          color="#7F3992"
          numbers="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15"
          name="Lotofácil"
          price="2.50"
        />
        <GameCard
          color="#7F3992"
          numbers="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15"
          name="Lotofácil"
          price="2.50"
        />
        <GameCard
          color="#7F3992"
          numbers="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15"
          name="Lotofácil"
          price="2.50"
        />
        <p>
          {" "}
          <strong>CART</strong> TOTAL: (PROPS TOTAL PRICE HERE)
        </p>
      </CartContent>

      <CartSave>
        <StyledButton size="35px" colored>
          Save <VscArrowRight style={{ verticalAlign: "middle" }} />{" "}
        </StyledButton>
      </CartSave>
    </Cart>
  );
};

export default ShoppingCart;
