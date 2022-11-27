import MoviesCardList from "../MoviesCardList/MoviesCardList.js"
import {savedMovies} from "../../utils/consts.js"

function SavedMovies() {
    return(
        <section className="saved-movies-card-list">
            <MoviesCardList moviesCards={savedMovies} />
        </section>
    )
};

export default SavedMovies;