import {createStore,combineReducers} from 'redux'
import moviesReducer from '../reducer/moviesReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        movies:moviesReducer
    }))
    store.subscribe(()=>{
      localStorage.setItem('movies',JSON.stringify(store.getState().movies))
    })
    return store
}
export default configureStore