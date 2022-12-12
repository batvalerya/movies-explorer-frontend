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
            savedMoviesCards.map((savedMoviesCard) => {
              if (savedMoviesCard.movieId === movieCard.id) {
                onDeleteMovie(savedMoviesCard._id)
              }
            })
        }

        setSaved(false)
    }

    const changeTimeFormat = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours > 0 ? `${hours}ч` : ''} ${minutes}м`;
      };

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
                    <p className="movies-card__duration">{changeTimeFormat(movieCard.duration)}</p>
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
            <a href={movieCard.trailerLink} target='_blank' rel='noreferrer' className="movies-card__trailer-link">
                <img className="movies-card__img" alt={movieCard.nameRU} src={ savedMovies ? movieCard.image : `https://api.nomoreparties.co${movieCard.image.url}`}/>
            </a>
        </li>
    )
}

export default MoviesCard;