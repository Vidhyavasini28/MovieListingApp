import { useState,useEffect} from 'react';
import {SingleItem} from "./SingleItem";
import {getMovies} from "../api/MovieAPI.js";

export function MovieListing(){
    const [movieList,setMovieList]=useState([]);
  
    const getMoviesToRender= async()=>{
      const response = await getMovies();
      setMovieList(response);
      console.log(movieList);
    } 
   
    useEffect(()=>{
      getMoviesToRender();
    },[])
    return (
        <>
        {
          movieList.map(movie => (
            <div>
                <SingleItem itemName={movie.name}/>
                <SingleItem itemName={movie.releaseDate}/>
                <SingleItem itemName={movie.genre}/>
            </div>
          ))
        }
        </>
      );
}