import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import SearchForm from "../SearchForm/SearchForm.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function SavedMovies({ loggedIn, savedMovies, onDeleteMovie, isCheckboxActive, toggleCheckbox }) {

    const { pathname } = useLocation();
    const [foundSavedMovies, setFoundSavedMovies] = useState([]);
    const [searchErrorMessage, setSearchErrorMessage] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearch(value) {
      if (value) {
        setSearchQuery(value);
        moviesFilter(value)
        isCheckboxActive
          ? setFoundSavedMovies(
              JSON.parse(localStorage.getItem("foundSavedShortMovies"))
            )
          : setFoundSavedMovies(JSON.parse(localStorage.getItem("foundSavedMovies")));
      } else {
        isCheckboxActive
          ? setFoundSavedMovies(
              savedMovies.filter((movie) => {
                return movie.duration <= 40;
              })
            )
          : setFoundSavedMovies(savedMovies);
      }
    }

    function moviesFilter(value) {
        const filteredMovies = savedMovies.filter((movie) =>
          movie.nameRU.toLowerCase().includes(value.toLowerCase())
        );
        localStorage.setItem("foundSavedMovies", JSON.stringify(filteredMovies));
        if (filteredMovies.length !== 0) {
            setSearchErrorMessage("");
            setFoundSavedMovies(filteredMovies);
        } else {
            setSearchErrorMessage("Ничего не найдено");
            setFoundSavedMovies([]);
        }
        checkIsCheckboxActive(filteredMovies);
    }
    
    function checkIsCheckboxActive(filteredMovies) {
      if (isCheckboxActive) {
        const filteredShortMovies = filteredMovies.filter((movie) => {
          return movie.duration <= 40;
        });
        localStorage.setItem(
          "foundSavedShortMovies",
          JSON.stringify(filteredShortMovies)
        );

        if( filteredShortMovies.length !== 0 ) {
            return filteredShortMovies;
          } else {
                setSearchErrorMessage("Ничего не найдено");
                console.log(searchErrorMessage)
          }
      } else {
        return;
      }
    }

    useEffect(() => {
        setFoundSavedMovies(savedMovies);
      }, [pathname, savedMovies]);

    return(
        <>
            <Header loggedIn={ loggedIn }/>
            <section className="saved-movies-card-list">
                <SearchForm
                    handleSearch={handleSearch}
                    toggleCheckbox={toggleCheckbox}
                    isCheckboxActive={isCheckboxActive}
                />

                {!searchErrorMessage && (
                    <MoviesCardList
                    moviesCards={foundSavedMovies}
                    onDeleteMovie={onDeleteMovie}
                    savedMovies={savedMovies}
                />
                )}
                {searchErrorMessage && <p className="movies__not-found">{searchErrorMessage}</p>}
            </section>
            <Footer />
        </>
    )
};

export default SavedMovies;