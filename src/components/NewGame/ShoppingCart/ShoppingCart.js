import React,{useState,useEffect,useCallback} from "react";
import styled from "styled-components";
import StyledButton from "../../UI/StyledComponents/StyledButton";
import GameCards from "../../Games/GameCards";
import {connect} from "react-redux";
import { VscArrowRight } from "react-icons/vsc";
import {AddGame} from "../../../store/actions/index"
import {withRouter} from 'react-router-dom';
//mudar a altura dps quando colocar os elementos do carrinho
const Cart = styled.div`
  grid-column: 2/4;

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

const ShoppingCart = ({newBet,onPurchase,history}) => {
  const [totalPrice,setTotalPrice] = useState(0)
  const [currentCart,setCurrentCart] = useState([])

  const addItemHandler = useCallback ((newItem)=>{
    setCurrentCart(prevCurrentCart=>[...prevCurrentCart,newItem])
  },[])
  const deleteItemHandler = (itemId)=>{
    let prevCart = [...currentCart]
    prevCart = prevCart.filter(cartItem => cartItem.id !== itemId)
    setCurrentCart(prevCart);
  }

  const updateTotalPrice = useCallback (()=>{
    const newPrice = currentCart.reduce((prev,curr)=>prev + curr.price,0)
    console.log( 'My new price', newPrice)
    setTotalPrice(newPrice)
  },[currentCart])

  const buyItemsHandler = () =>{
    const purchaseDate = new Date()
    const formatedDate = `${purchaseDate.getDay()}/${purchaseDate.getMonth()}/${purchaseDate.getFullYear()} `
    const finishedPurchase = currentCart.map(cartItem=>{ return {...cartItem,date:formatedDate}});
    onPurchase(finishedPurchase);
    setCurrentCart([])
    history.push("/");
    

  }
  const formatedTotalPrice = new Intl.NumberFormat("pt", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);
  useEffect(()=>{
    if(newBet)
    addItemHandler(newBet)
    
  },[newBet,addItemHandler])
  useEffect(()=>{updateTotalPrice()},[currentCart,updateTotalPrice])
  return (
    <Cart>
      <CartContent>
        <p>
          {" "}
          <strong>CART</strong>{" "}
        </p>
        <GameCards onDelete = {deleteItemHandler} cardObjs={currentCart} />
        <p>
          {" "}
          <strong>CART</strong> TOTAL: {formatedTotalPrice}
        </p>
      </CartContent>

      <CartSave onClick={buyItemsHandler}>
        <StyledButton size="35px" colored>
          Save <VscArrowRight style={{ verticalAlign: "middle" }} />{" "}
        </StyledButton>
      </CartSave>
    </Cart>
  );
};
const mapDispatchToProps = (dispatch)=>{
  return{
    onPurchase:(cartPurchase)=>{dispatch(AddGame(cartPurchase))}
  }
}
export default  withRouter(connect (null,mapDispatchToProps)(ShoppingCart));
