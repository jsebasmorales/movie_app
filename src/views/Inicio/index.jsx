import "./styles.css";
import TopRatedMovies from "../../components/TopRated";
import Header from "../../components/Header";

function Inicio() {
    return (
        <div>
            <Header></Header>
            <TopRatedMovies></TopRatedMovies>
        </div>
    );
}

export default Inicio;
