import React from 'react'
import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movie/MovieSlice"


export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});