import { useState } from "react";
import MovieData from "./movie";

const Filter = ({handleFilter}) => {

const [titleFilter,setTitleFilter]= useState("")
const [ratingFilter,setRatingFilter]= useState("")

const handleOnTitle = (e) =>{
setTitleFilter(e.target.value)
}

const handleOnRating = (e) =>{
    setRatingFilter(e.target.value)
    }

    return ( 
        <div className="row mb-3 mt-4 mb-4">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={titleFilter}
            placeholder="Title"
            onChange={handleOnTitle}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            value={ratingFilter}
            placeholder="1"
            onChange={handleOnRating}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={() => handleFilter(titleFilter, ratingFilter)}>
            Filter
          </button>
        </div>
      </div>
);
    }
export default Filter;