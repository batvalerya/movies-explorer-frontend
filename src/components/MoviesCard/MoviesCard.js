import { useLocation } from 'react-router-dom';

function MoviesCard({movieCard}) {

    const location = useLocation();
    const savedMovies = location.pathname === '/saved-movies';

    return(
        <li className="movies-card">
            <div className="movies-card__container">
                <div className="movies-card__info">
                    <h3 className="movies-card__title">{movieCard.nameRU}</h3>
                    <p className="movies-card__duration">{movieCard.duration}</p>
                </div>
                <button
                    className={`movies-card__button ${savedMovies ? 'movies-card__delete-button' : 'movies-card__save-button'}`}
                        type="button" 
                    />
            </div>
            <img className="movies-card__img" src={`https://api.nomoreparties.co${movieCard.image.url}`} alt={movieCard.nameRU} />
        </li>
    )
}

export default MoviesCard;