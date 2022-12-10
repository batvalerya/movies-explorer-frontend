import { moviesApi } from "../../utils/MoviesApi.js";
import { useState } from 'react';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies({ loggedIn }) {

    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [foundMovies, setFoundMovies] = useState([]);
    const [searchErrorMessage, setSearchErrorMessage] = useState("");

    function getMovies() {
        setIsLoading(true);
        moviesApi.getMovies()
            .then((movies) => {
                localStorage.setItem('movies', JSON.stringify(movies));
            })
            .catch((err) => {
                setSearchErrorMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function moviesFilter(value, allMovies) {
            const filteredMovies = allMovies.filter((movie) =>
              movie.nameRU.toLowerCase().includes(value.toLowerCase())
            );
            localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));
            if (filteredMovies.length !== 0) {
                setSearchErrorMessage("");
                setFoundMovies(filteredMovies);
            } else {
                setSearchErrorMessage("Ничего не найдено");
                setFoundMovies([]);
            }
    }


    function handleSearch(value) {
        const allMovies = JSON.parse(localStorage.getItem("movies"));
        if (!allMovies) {
          getMovies();
        }
        if (value) {
            setSearchQuery(value);
            localStorage.setItem("searchQuery", value);
            moviesFilter(value, allMovies);
        }
      }

    return(
        <>
            <Header loggedIn={ loggedIn} />
            <section className="movies">
                <SearchForm
                    getMovies={getMovies}
                    handleSearch={handleSearch}
                    searchQuery={searchQuery}
                />
                { isLoading && <Preloader /> }

                {!searchErrorMessage && (
                    <MoviesCardList
                        moviesCards={foundMovies}
                    />
                )}
                {searchErrorMessage && <p className="movies__not-found">{searchErrorMessage}</p>}
            </section>

            <Footer />
        </>

    )
}

export default Movies;