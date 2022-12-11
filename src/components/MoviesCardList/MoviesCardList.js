import { useLocation } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import { useState, useEffect } from 'react';

import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ moviesCards, onSaveMovie, onDeleteMovie, savedMovies }) {

    const location = useLocation();
    const moviesPage = location.pathname === '/movies';

    const size = useWindowSize();
    const [paginator, setPaginator] = useState({});

    
    useEffect(() => {
        if (moviesPage) {
          switch (true) {
            case size.width <= 460:
              setPaginator({ step: 1, start: 5 });;
              break;
            case size.width <= 1280:
              setPaginator({ step: 7, start: 7 });
              break;
            default:
              setPaginator({ step: 7, start: 7 });
              break;
          }
        }
      }, [size.width, moviesPage]);
    
      const handleMoreButtonClick = () => {
        setPaginator((prev) => ({
          ...prev,
          start: prev.start + prev.step,
        }));
      };


    return(
        <section className="movies-card-list">
            <div className="movies-card-list__container">
            { moviesCards && (
                <>
                <ul className="movies-card-list__items">
                    { moviesCards.slice(0, paginator.start).map((movieCard) => (
                        <MoviesCard
                        key={moviesPage ? movieCard.id : movieCard.movieId}
                        movieCard={movieCard}
                        onSaveMovie={onSaveMovie}
                        onDeleteMovie={onDeleteMovie}
                        savedMoviesCards={savedMovies}
                    />
                    )) }
                </ul>
                {moviesPage && moviesCards.length > paginator.start && (
                    <button className="movies-card-list__more-btn" onClick={handleMoreButtonClick}>Ещё</button>
                )}
                </>
                )}
            </div>
        </section>
    )
};

export default MoviesCardList;