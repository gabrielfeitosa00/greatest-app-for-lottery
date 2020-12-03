import React,{useState,useEffect,useCallback} from "react";
import styled from "styled-components";
import StyledButton from "../../UI/StyledComponents/StyledButton";
import GameCards from "../../Games/GameCards";
import { VscArrowRight } from "react-icons/vsc";
//mudar a altura dps quando colocar os elementos do carrinho
const Cart = styled.div`
  grid-column: 3/4;

  display: flex;
  flex-flow: column;
  margin-top: 30px;
  margin-bottom: 25px;
  min-height: 50vh;
  border: 1px solid #e2e2e2;
  justify-content:space-between;
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

const ShoppingCart = ({newBet}) => {
  const [totalPrice,setTotalPrice] = useState(0)
  const [currentCart,setCurrentCart] = useState([])

  const addItemHandler = useCallback ((newItem)=>{
    const newCart = [...currentCart,newItem]
    setCurrentCart(newCart)
  },[currentCart])
  const deleteItemHandler = (itemId)=>{
    let prevCart = [...currentCart]
    prevCart = prevCart.filter(cartItem => cartItem.id !== itemId)
    setCurrentCart(prevCart);
  }

  const buyItemsHandler = () =>{

  }

  useEffect(()=>{
    addItemHandler(newBet)
  },[newBet,addItemHandler])
  return (
    <Cart>
      <CartContent>
        <p>
          {" "}
          <strong>CART</strong>{" "}
        </p>
        <GameCards onDelete = {deleteItemHandler} gameObjs={currentCart} />
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
