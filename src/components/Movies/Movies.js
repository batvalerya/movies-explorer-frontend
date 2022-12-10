import { moviesApi } from "../../utils/MoviesApi.js";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies({ loggedIn, onSaveMovie, savedMovies }) {

    const location = useLocation();
    const moviesPage = location.pathname === '/movies';

    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [foundMovies, setFoundMovies] = useState([]);
    const [searchErrorMessage, setSearchErrorMessage] = useState("");

    const [isCheckboxActive, setCheckboxActive] = useState(false);

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

            checkIsCheckboxActive(filteredMovies)
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

        isCheckboxActive
        ? setFoundMovies(JSON.parse(localStorage.getItem("shortMovies")))
        : setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
      }

      function checkIsCheckboxActive(filteredMovies) {
        if (isCheckboxActive) {
          localStorage.setItem("isCheckboxActive", "true");
          const shortMovies = filteredMovies.filter((movie) => {
            return movie.duration <= 40;
          });
          localStorage.setItem(
            "shortMovies",
            JSON.stringify(shortMovies)
          );
          return shortMovies;
        } else {
          localStorage.setItem("isCheckboxActive", "false");
          return;
        }
      }

      function toggleCheckbox() {
        setCheckboxActive(!isCheckboxActive);
      }

      useEffect(() => {
        if (localStorage.getItem("searchQuery")) {
            setSearchQuery(localStorage.getItem("searchQuery"));
        }
        if (localStorage.getItem("isCheckboxActive") === "true") {
            setCheckboxActive(true);
            setFoundMovies(JSON.parse(localStorage.getItem("shortMovies")));
        }
        if (localStorage.getItem("isCheckboxActive") === "false") {
            setCheckboxActive(false);
            setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
        }
      }, [moviesPage]);

    return(
        <>
            <Header loggedIn={ loggedIn} />
            <section className="movies">
                <SearchForm
                    getMovies={getMovies}
                    handleSearch={handleSearch}
                    searchQuery={searchQuery}
                    toggleCheckbox={toggleCheckbox}
                    isCheckboxActive={isCheckboxActive}
                />
                { isLoading && <Preloader /> }

                {!searchErrorMessage && (
                    <MoviesCardList
                        moviesCards={foundMovies}
                        onSaveMovie={onSaveMovie}
                        savedMovies={savedMovies}
                    />
                )}
                {searchErrorMessage && <p className="movies__not-found">{searchErrorMessage}</p>}
            </section>

            <Footer />
        </>

    )
}

export default Movies;