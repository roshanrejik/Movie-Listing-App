import React from "react";
import { useSelector } from "react-redux";
const MovieStats=(props)=>{
    const movies=useSelector((state)=>{
        return state.movies
    })
    const top= [].concat(movies).sort(function(a, b){return a.ranking-b.ranking})
    return(
        <div style={{width:'22%',display:'inline-block',float: 'right',position:'fixed',bottom:45,right:25}} className=" border shadow rounded  p-3 mt-5">
            <h2> Movie Stats</h2><br/>
            <h3> Total Movie - {movies.length} </h3>
            <h4> # Top Ranked Movie - {top[0].name}</h4>
        </div>
    )
}
export default MovieStats