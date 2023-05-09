import { useState } from "react";
import "./styles.css";
import axios from "axios";
import MovieDetail from "../../views/MovieDetail";

const apiKey = import.meta.env.VITE_APIKEY;

function Header() {
    const [movieId, setMovieId] = useState("");
    const handleClick = () => {
        const query = document.querySelector(".header_input").value;
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}}&language=es&query=${query}&page=1&include_adult=false`)
            .then((response) => {
                const movieId = response.data.results[0].id;
                setMovieId(movieId);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <nav className="header">
                <img src="../../public/TMDB.png" className="header_logo" alt="" />
                <form action="" className="header_form">
                    <input type="text" className="header_input" />
                    <button className="header_button" onClick={handleClick}>
                        BUSCAR
                    </button>
                </form>
            </nav>
            {movieId && <MovieDetail movieId={movieId} />}
        </div>
    );
}

export default Header;
