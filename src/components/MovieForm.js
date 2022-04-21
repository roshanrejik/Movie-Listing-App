import React,{useState}  from "react";
import { addMovie } from "../action/moviesAction";
import { useDispatch,useSelector } from "react-redux";
import swal from 'sweetalert';
const MovieForm=(props)=>{
    const [name,setName]=useState('')
    const [ranking,setRanking]=useState('')
    const dispatch=useDispatch()
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const movies=useSelector((state)=>{
        return state.movies
    })
    const handleRanking=(e)=>{
        setRanking(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const movieObj={
            id:Number(new Date()),
            name:name,
            ranking:Number(ranking),
        }
        const finder=movies.find(ele=>{
            return ele.ranking===movieObj.ranking
        })
        console.log(finder);
        if(finder){
            swal("Ranking Already Given", "Change Ranking!", "error");        }
        else{
            dispatch(addMovie((movieObj)));
        }
        setName('')
        setRanking('')
    }
    return(
        <div style={{width:'22%',display:'inline-block',float: 'right',position:'fixed',right:25}} className="border p-3 shadow rounded">
            <h2>Add Movie</h2><br/>
            <form onSubmit={handleSubmit}>
                <input type='text'placeholder="Enter movie name"className="form-control m-1 mb-2" value={name} onChange={handleName}/>
                <input type='text'placeholder="IMDB Rating"className="form-control m-1" value={ranking} onChange={handleRanking}/>
                <input type='submit' value='Add' className="btn btn-dark m-2"/>
            </form>
        </div>
    )
}

export default MovieForm