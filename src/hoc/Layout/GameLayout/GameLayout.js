/**
 * Colocar o Layout das páginas relacionadas aos jogos aqui
 * 
 *  A toolbar Aparece nas duas telas 
 * 
 *  Alternar oque é renderizado abaixo da toolbar
 */
import React from 'react';
import Toolbar from '../../../components/Navegation/Toolbar/Toolbar';
 const GameLayout = (props) =>{
    return(
        <React.Fragment>
        <Toolbar/>
        <main>{props.children}</main>
        </React.Fragment>
    )
 }

 export default GameLayout