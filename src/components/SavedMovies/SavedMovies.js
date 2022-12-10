import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import SearchForm from "../SearchForm/SearchForm.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function SavedMovies({ loggedIn, savedMovies, onDeleteMovie }) {
    return(
        <>
            <Header loggedIn={ loggedIn }/>
            <section className="saved-movies-card-list">
                <SearchForm />
                <MoviesCardList
                    moviesCards={savedMovies}
                    onDeleteMovie={onDeleteMovie}
                    savedMovies={savedMovies}
                 />
            </section>
            <Footer />
        </>
    )
};

export default SavedMovies;