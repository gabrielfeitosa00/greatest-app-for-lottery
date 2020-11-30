import React, { useEffect } from "react";
import { FetchGameType } from "../../store/actions/index";
import { connect } from "react-redux";

const Games = (props) => {
  const { OnInitIngredients, types } = props;
  useEffect(() => {
    OnInitIngredients();
  }, [OnInitIngredients]);
  console.log(types);
  return <h1>You're Authenticated yay!</h1>;
};
const mapStateToProps = (state) => {
  return {
    types: state.games.types,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnInitIngredients: () => {
      dispatch(FetchGameType());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
