import React, { useState } from "react";
import MovieList from "./newComp/movieList";
import Filter from "./newComp/filter";
import MovieData from "./newComp/movie";
import { Route,Routes,Outlet } from "react-router-dom";
import MovieDetals from "./newComp/movieDetails";
import NavBar from "./newComp/navBar";
import Home from "./newComp/home";



function App() {

    return ( 
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/movieList" element={<MovieList />} />
                <Route path="/movieList/movie/:id" element={<MovieDetals MovieData={MovieData}/>}/>
            </Routes>
        </div>
     );
}

export default App;