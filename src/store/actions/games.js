import {GAME_FETCH,GAME_SET_TYPE,GAME_SELECT_TYPE} from './actionTypes';



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

export const SelectGameType = (gameType)=>{
    return {
        type: GAME_SELECT_TYPE,
        gameType
    }
}