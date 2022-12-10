import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MoviesCard({ movieCard, onSaveMovie, onDeleteMovie, savedMoviesCards }) {

    const location = useLocation();
    const { pathname } = useLocation();
    const savedMovies = location.pathname === '/saved-movies';

    const [isSaved, setSaved] = useState(false);

    function toggleSave() {
      if (isSaved) {
        deleteMovie(movieCard);
      } else {
        saveMovie(movieCard);
        setSaved(true)
      }
    }

    function saveMovie(movieCard) {
        onSaveMovie(movieCard);
    }

    function deleteMovie(movieCard) {
        if (savedMovies) {
            onDeleteMovie(movieCard._id)
        } else {
            onDeleteMovie(movieCard._id)
        }

        setSaved(false)
    }

    useEffect(() => {
        setSaved(
          pathname === "/movies"
            ? savedMoviesCards.some((savedMoviesCard) => {
                return savedMoviesCard.movieId === movieCard.id;
              })
            : true
        );
      }, [savedMoviesCards, pathname === "/movies", "/saved-movies"]);

    return(
        <li className="movies-card">
            <div className="movies-card__container">
                <div className="movies-card__info">
                    <h3 className="movies-card__title">{movieCard.nameRU}</h3>
                    <p className="movies-card__duration">{movieCard.duration}</p>
                </div>

                { !savedMovies ? (
                    <button
                        className={`movies-card__button movies-card__save-button ${isSaved && 'movies-card__save-button_active'}`}
                        type="button"
                        onClick={toggleSave}
                    />
                    ) : (
                    <button
                        className="movies-card__button movies-card__delete-button"
                        type="button"
                        onClick={toggleSave}
                    />
                    )}
            </div>
            <img className="movies-card__img" alt={movieCard.nameRU} src={ savedMovies ? movieCard.image : `https://api.nomoreparties.co${movieCard.image.url}`}
            />
        </li>
    )
}

export default MoviesCard;