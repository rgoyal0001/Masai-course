import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import './Home.css'

const Home = () => {
    const {isAuth}=React.useContext(AuthContext);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:8080/movies`)
      .then((res) => res.json())
      .then((res) => setMovies(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    isAuth ? (
    <>
      {
        <div className="movies-list"> 
            {movies.map((movie)=>(
                <div key={movie.id} className="movie-items">
                    <img src={movie.poster_path} alt="" />
                    <h4>{movie.title}</h4>
                    <Link to={`/movies/${movie.id}`}> <button>More Details</button> </Link>
                </div>
            ))}
        </div>
      }
    </>
    ) : null)

};

export default Home;
