import React, { useEffect } from 'react'
import  MovieListing from "../MovieListing/MovieListing"
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovies , fetchAsyncShows, getAllShows } from '../../features/movie/MovieSlice'


function Home() {
  const dispatch = useDispatch();
  const movieTitle = "harry";
  const showTitle = "friends"
  const data = useSelector(getAllShows);
  console.log(data);

  

  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieTitle))
    dispatch(fetchAsyncShows(showTitle))
    
  },[dispatch]);


  return (
    <div>
      
       <div className="banner-img"></div>
       {Object.keys(data).length===0 ? (
        <div>...Loading</div>

       ):(
       <MovieListing />
          
       )}
    </div>
   
  )
}

export default Home