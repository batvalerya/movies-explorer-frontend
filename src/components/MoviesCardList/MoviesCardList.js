import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({moviesCards}) {
    return(
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                <ul className="movies-card-list__items">
                        {moviesCards.map((movieCard) => (
                                <MoviesCard
                                    key={movieCard.id}
                                    movieCard={movieCard}
                                />
                            ))
                        }
                </ul>
                <button className="movies-card-list__more-btn">
                    Ещё
                </button>
            </div>
        </section>
    )
};

export default MoviesCardList;