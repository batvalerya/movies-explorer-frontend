import { useLocation } from 'react-router-dom';

import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ moviesCards, onSaveMovie, onDeleteMovie, savedMovies }) {

    const location = useLocation();
    const movies = location.pathname === '/movies';

    return(
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                <ul className="movies-card-list__items">
                        {moviesCards.map((movieCard) => (
                                <MoviesCard
                                    key={movies ? movieCard.id : movieCard.movieId}
                                    movieCard={movieCard}
                                    onSaveMovie={onSaveMovie}
                                    onDeleteMovie={onDeleteMovie}
                                    savedMoviesCards={savedMovies}
                                />
                            ))
                        }
                </ul>
                { movies && <button className="movies-card-list__more-btn">Ещё</button> }
            </div>
        </section>
    )
};

export default MoviesCardList;