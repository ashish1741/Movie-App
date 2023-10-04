
import React from 'react'
import "./App.scss"
import {BrowserRouter, Route , Routes} from "react-router-dom";
import MovieDetails from './components/MovieDetails/MovieDetails';
import Header from "./components/Header/Header"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Home from "./components/Home/Home"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <div className="conatiner">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element = {<MovieDetails />} />
        <Route path='*' element = {<PageNotFound />} />
      </Routes>
      </div>
      <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App