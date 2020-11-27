/**
 * Colocar o Layout das páginas relacionadas aos jogos aqui
 * 
 *  A toolbar Aparece nas duas telas 
 * 
 *  Alternar oque é renderizado abaixo da toolbar
 */
import React from 'react';
import Toolbar from '../../../components/Navegation/Toolbar/Toolbar';
import classes from './GameLayout.module.css';
 const GameLayout = (props) =>{
    return(
        <React.Fragment>
        <Toolbar/>
        <div className={classes.Content}>{props.children}</div>
        </React.Fragment>
    )
 }

 export default GameLayout