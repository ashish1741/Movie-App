import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../common/apis/Api"
import {APIKey} from "../../common/apis/ApiKey"



//fetching movie data 
 export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", 
    async(term)=>{
    const response = await Api.get(
        `?apikey=${APIKey}&s=${term}&type=movie`
        );
        return response.data
      });


// fetching Show Data

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", 
async(term)=>{
const response = await Api.get(
    `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data
  });      


// fetching selected movie or show data
export const fetchAsyncMoviesorShowsDetails = createAsyncThunk("movies/fetchAsyncMoviesorShowsDetail", async(id)=>{
    const response = await Api.get(
        `?apikey=${APIKey}&i=${id}&plot=full`
    );
    return response.data
});

//creating initial state
const initialState = {
    movies:{},
    shows:{},
    SelectedMovieorShowsData : {},
}


//creating slice
const movieSlice =  createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies:(state,{payload}) =>{
        //     state.movies = payload 
        // },
        remoteSelectedMovieorShow:(state) =>{
            state.SelectedMovieorShowsData = {}
            
        }
    },
    extraReducers :{
        [fetchAsyncMovies.pending]:() =>{
            console.log("data is under process");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload}) =>{
            console.log("data is fetched");
            return{...state, movies:payload}

        },
        [fetchAsyncMovies.rejected]:() =>{
            console.log("data is rejected");
        },
        [fetchAsyncShows.pending]: () =>{
            console.log("fetche is pending");

        },
        [fetchAsyncShows.fulfilled]:(state,{payload}) =>{
            console.log("fetched");
            return{...state,shows:payload}
        },
        [fetchAsyncMoviesorShowsDetails.fulfilled]:(state,{payload}) =>{
            return{...state, SelectedMovieorShowsData:payload}
        }
    },
    

})

export const {addMovies,remoteSelectedMovieorShow} = movieSlice.actions;
export default movieSlice.reducer
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieorShowsData = (state) => state.movies.SelectedMovieorShowsData