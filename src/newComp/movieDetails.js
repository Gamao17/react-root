import { useParams,Link,useNavigate, Navigate} from "react-router-dom";

const MovieDetals = ({MovieData}) => {

    const {id} = useParams();
    const movie= MovieData.find((movies) => movies.id === parseInt(id))
    const navigate = useNavigate()


    return ( 
      <div className="container">
      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <img src={movie.posterURL} alt={movie.title} className="card-img-top" />
              <p className="card-text">{movie.description}</p>
              <Link to={movie.trailer} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Regarder la bande annonce</Link>
              <button className="btn btn-primary" style={{marginLeft : 10}} onClick={()=> navigate('/')}> Accueuil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default MovieDetals;