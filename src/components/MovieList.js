import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import {removeMovie} from "../action/moviesAction"
const MovieList = (props) => {
    const dispatch=useDispatch()
    const [searchKey,setSearchKey]=useState('')
    const [orderBy,setOrderBy]=useState('')
    const movies = useSelector((state) => {
        return state.movies
    })
    
    const handleSearchKey=(e)=>{
        setSearchKey(e.target.value)
    }
    const handleOrderBy=(e)=>{
        setOrderBy(e.target.value)
    }
    const handleRemove=(id)=>{
        dispatch(removeMovie(id))
    }

    const dataOrder=(orderBy)=>{

        switch(orderBy){
            case 'Ascending':{
                return [].concat(movies).sort(function(a, b){return a.ranking-b.ranking});
            }
            case 'Descending':{
                return [].concat(movies).sort(function(a, b){return b.ranking-a.ranking});
            }
            case 'A-Z':{
                return [].concat(movies).sort(function(a, b){
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                    return 0;
                });
            }
            case 'Reverse':{
                return [].concat(movies).reverse();
            }
            default:return movies
        }
       }
    return (
        <div  style={{ width: '75%', display: 'inline-block', float: 'left',padding:'1rem' }} className=' border shadow rounded  Padding-left-0 Padding-right-0' >
            <form>
                <div style={{width:'100%'}}>
                <input type='name' value={searchKey} className="form-control m-2" style={{display:'inline-block',width:'60%'}} onChange={handleSearchKey} placeholder='Search By Name ....'/>
                <select value={orderBy} onChange={handleOrderBy} className="form-select  m-2" style={{float: 'right',display:'inline-block',width:'20%'}} >
                    <option >  Order By</option>
                    <option value='Ascending'>Ascending  Order</option>
                    <option value='Descending'>Descending  Order</option>
                    <option value='A-Z'>A-Z Order</option>
                    <option value='Reverse'>Reverse Order</option>
                </select>
                </div>
            </form>
            <div  className=" row pt-2  justify-content-around " style={{textAlign:'center',width:'100%'}}>
                {   //dataOrder in helper
                    dataOrder(orderBy).filter(movieObj=>{
                        return movieObj.name.includes(searchKey)
                    }).map((movieObj,i) => {
                        return (
                            <div className="card mt-2 p-2 bd-highlight border shadow rounded" style={{ width: '16rem' }} key={movieObj.id}>
                                   <img className="card-img-left pt-2" src={`https://source.unsplash.com/random/300x250?sig=${movieObj.id}`} alt='img'/>
                                    <div className="card-body">
                                        <h4 className="card-title">Name : {movieObj.name}</h4>
                                        <h5 className="card-title">Ranking : #{movieObj.ranking}</h5>
                                        <button onClick={()=>{handleRemove(movieObj.id)}} style={{border:'none',background:'none', display:'inline-block', float: 'right'}}><img src='https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Clipart.png' alt='delete' style={{width:'2rem'}}/></button>
                                    </div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default MovieList