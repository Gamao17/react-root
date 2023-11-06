import MovieData from "./movie";
import MovieCard from "./movieCard";
import React, { useState } from "react";
import Filter from "./filter";



const MovieList = () => {
    
    const [movieFiltered,setMovieFiltered] = useState(MovieData)
    const lastUsedId = Math.max(...movieFiltered.map((movie) => movie.id), 0);
        const [newMovie,setNewMovie] = useState({id : lastUsedId + 1 , title : "", description : "", posterURL : "", rating : "", trailer : ""})
        
        const handleFilter =(titleFilter,ratingFilter)=>{
            const filteredMovies = MovieData.filter((movie) => {
                return (titleFilter === '' || movie.title.toLocaleLowerCase().includes(titleFilter.toLocaleLowerCase())) &&
                (ratingFilter === '' || movie.rating >= parseFloat(ratingFilter))
            })
        setMovieFiltered(filteredMovies)}
        
        /* -------------------------------------------------------------------------------------------------*/ 
        
        const HandleOnChange = (event) =>{
            const {name,value} = event.target
            setNewMovie({...newMovie, [name] : value})
           }  
        
           const HandleOnSubmit = () =>{
            setMovieFiltered((prevFilteredData) => [...prevFilteredData, newMovie]);
            setNewMovie({id: lastUsedId + 2, title : '', description : '', posterURL : '', rating : ''})
            
           }

    return ( 
    <div>     
        <Filter handleFilter={handleFilter}/>
        <div className="row">
  {movieFiltered.map((movie) => (
    <div className="col-md-6" key={movie.id}>
      <MovieCard {...movie} />
    </div>
  ))}
</div>

                    
        <div className="container" style={{ maxWidth: "40%", border: "1px solid #ccc", padding : 20, borderRadius :"5px"}}>
            <h5>Add a new film:</h5>
            <form className="mx-auto" style={{}}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" placeholder="Enter the title" value={newMovie.title} onChange={HandleOnChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" placeholder="Enter the description" value={newMovie.description} onChange={HandleOnChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Picture URL</label>
                    <input type="text" className="form-control" name="posterURL" placeholder="Enter the picture URL" value={newMovie.posterURL} onChange={HandleOnChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <input type="number" className="form-control" name="rating" placeholder="Enter the rating" value={newMovie.rating} onChange={HandleOnChange} />
                </div>

                <button type="button" className="btn btn-primary" onClick={HandleOnSubmit}>Submit</button>
            </form>
        </div>               
    </div>  
);
}

export default MovieList;