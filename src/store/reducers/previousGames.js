const Initialstate = {
    games = [],
    filters = [],
    filteredGames,
}
// pensar em como fazer o filtro dps
const reducer = (state=Initialstate,action) =>{
    switch(action.type){
        case actionTypes.ADD_FILTER:
            const NewFilteredGames = games.filter( game => filter.includes(game.type))
            return {...state,filters: filters.concat(action.filter),filteredGames:newFilteredGames}
        default:
            return state
    }
}


export default reducer