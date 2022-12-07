import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import SearchForm from "../SearchForm/SearchForm.js";
import {savedMovies} from "../../utils/consts.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function SavedMovies() {
    return(
        <>
            <Header />
            <section className="saved-movies-card-list">
                <SearchForm />
                <MoviesCardList moviesCards={savedMovies} />
            </section>
            <Footer />
        </>
    )
};

export default SavedMovies;