import {GAME_FETCH,GAME_SET_TYPE} from './actionTypes';



export const FetchGameType = ()=>{
    return{
        type: GAME_FETCH
    }
}

export const SetGameType = (gameTypes)=>{
    return{
        type: GAME_SET_TYPE,
        gameTypes
    }
}