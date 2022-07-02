import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Details.css'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [movieDetails, setmovieDetails] = React.useState({});

  // basis this id: a network

  React.useEffect(() => {
    let isSubscribed = true;
    setIsLoading(true);
    fetch(`http://localhost:8080/movies/${movieId}`)
      .then((res) => res.json())
      .then((res) => {
        setIsError(false);
        return isSubscribed ? setmovieDetails(res) : null;
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));

    return () => {
      isSubscribed = false;
    };
  }, [movieId]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>SOMETHING WENT WRONG</h1>;
  }
    // console.log(movieDetails.id)
  return <div>{
        <div className="movie" >
            <img src={movieDetails.poster_path} alt="" />
            <h4>{movieDetails.original_title}</h4>
            <h6 >overview : {movieDetails.overview}</h6>
            <p>Released on : {movieDetails.release_date}</p>
            <p>vote- average : {movieDetails.vote_average}</p>
            <p>vote- count : {movieDetails.vote_count}</p>

            <Link to={`/booking`}> <button>Book Ticket</button> </Link>
        </div>
        }
    </div>;
};

export default MovieDetails;
