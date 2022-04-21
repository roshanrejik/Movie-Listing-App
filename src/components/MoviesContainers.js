import React  from "react";
import MovieForm from "./MovieForm";
import MovieList from './MovieList'
import MovieStats from './MovieStats'
import { useSelector } from "react-redux";
const MoviesContainers=(props)=>{
    const movies=useSelector((state)=>{
        return state.movies
    })
    return(
        <div >
            <h1 style={{fontFamily:'Cursive'}}><b>My Big Movie List</b></h1>
            {movies.length>0&&<MovieList/>}
            <MovieForm/>
            {movies.length>0&&<MovieStats/>}
        </div>
    )
}

export default MoviesContainers