import MoviesCardList from "../MoviesCardList/MoviesCardList.js"
import {savedMovies} from "../../utils/consts.js"
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function SavedMovies() {
    return(
        <>
            <Header />
            <section className="saved-movies-card-list">
                <MoviesCardList moviesCards={savedMovies} />
            </section>
            <Footer />
        </>
    )
};

export default SavedMovies;