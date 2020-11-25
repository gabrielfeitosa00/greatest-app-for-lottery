/**
 * Aqui vai ficar o Layout geral das páginas de altenticação
 * 
 * Minha ideia inicial é  fazer mais ou menos assim:
 *  Banner com o nome da aplicação, isso aparece nas três telas
 * 
 *  Alternar qual form será renderizado 
 * 
 *  Acho melhor fazer 3 forms por agora, depois decido se junto tudo em um só
 * 
 *  Colocar as rotas embedadas ?
 * 
 *  Deixar os botões como Links/Navlinks ? 
 *  
 */

 import React from 'react';
 import AppTitle from '../../components/UI/AppTitle/AppTitle'

 const AuthLayout = (props)=>{
     return <React.Fragment>
        <AppTitle/>
         <div>
             {props.children}
         </div>
     </React.Fragment>
 }

 export default AuthLayout