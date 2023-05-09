import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const apiKey = import.meta.env.VITE_APIKEY;
const topRated = import.meta.env.VITE_TOP_RATED;
const movieImg = import.meta.env.VITE_IMAGES;

function TopRatedMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`${topRated}`, {
                params: {
                    api_key: apiKey,
                },
            })
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <section className="card-container">
                {movies.map((movie) => (
                    <div className="card-container--card" key={movie.id}>
                        <img src={`${movieImg}${movie.poster_path}`} alt={movie.title} className="card-container--card-image" />
                        <div className="card-container--card-content">
                            <h2 className="card-container--card-content-title">{movie.title}</h2>
                            <p className="card-container--card-content-date">
                                {" "}
                                <span>Release Date: </span>
                                {movie.release_date}
                            </p>
                            <p className="card-container--card-content-rank">
                                <span>Score: </span>
                                {movie.vote_average}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default TopRatedMovies;
