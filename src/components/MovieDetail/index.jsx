import { useState, useEffect } from "react";

function MovieDetail({ movieId }) {
    console.log(movieId);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=20c286709494e09d3f978d096c5aa083&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            });
    }, [movieId]);

    if (!movie) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </div>
    );
}

export default MovieDetail;
