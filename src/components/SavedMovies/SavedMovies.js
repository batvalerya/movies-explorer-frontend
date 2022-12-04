import MoviesCardList from "../MoviesCardList/MoviesCardList.js"
import {savedMovies} from "../../utils/consts.js"
import Header from "../Header/Header.js";

function SavedMovies() {
    return(
        <>
            <Header />
            <section className="saved-movies-card-list">
                <MoviesCardList moviesCards={savedMovies} />
            </section>
        </>
    )
};

export default SavedMovies;