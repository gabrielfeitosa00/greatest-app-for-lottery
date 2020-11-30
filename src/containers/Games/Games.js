import React,{useEffect} from 'react';
import {FetchGameType} from '../../store/actions/index';
import {connect} from 'react-redux';

const Games = (props)=>{
    const {OnInitIngredients} = props
    useEffect(
        ()=>{
            OnInitIngredients()
        }
    ,[OnInitIngredients])
    return <h1>You're Authenticated yay!</h1>
}

const mapDispatchToProps = (dispatch)=>{
    return {
        OnInitIngredients: ()=>{dispatch(FetchGameType())}
    }
}


export default connect (null,mapDispatchToProps) (Games);