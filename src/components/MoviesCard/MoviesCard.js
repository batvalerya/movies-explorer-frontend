function MoviesCard({movieCard}) {
    return(
        <li className="movies-card">
            <div className="movie-card__info">
                <h3 className="movies-card__title">{movieCard.nameRu}</h3>
                <p className="movies-card__duration">{movieCard.duration}</p>
                <button className="movies-card__save-button" type="button" />
            </div>
            <img className="movies-card__img" src={movieCard.image} alt={movieCard.nameRu} />
        </li>
    )
}

export default MoviesCard;