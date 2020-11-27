import * as actionTypes from "../actions/actionTypes";


const initialState = {
    userName:'',
    password:'',
    email:'',
    isAuth:false,
    error:null
}



const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.AUTH_SINGUP_START:
            console.log(state)
            return {...state, userName:action.name,email:action.email,password:action.password}
        default:
            return state;
    }
}


export default reducer;