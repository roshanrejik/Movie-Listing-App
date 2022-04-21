const init=JSON.parse(localStorage.getItem('movies'))||[]
const moviesReducer=(state=init,action)=>{
    switch(action.type){
        case 'ADD_MOVIE':{
            return [...state,{...action.payload}]
        }
        case 'REMOVE_MOVIE':{
            return state.filter(movieObj=>{
                return movieObj.id!==action.payload
            })
        }
        default:return state
    }
}
export default moviesReducer