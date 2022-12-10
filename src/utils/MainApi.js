class MainApi {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _handleServerResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
          return Promise.reject(`Ошибка: ${res.status}`);
      }
    }

    _request(path) {
      return fetch(`${this._baseUrl}${path}`, {
            headers: this._headers,
            credentials: 'include',
        })
        .then(this._handleServerResponse);
    }

    register ({name, email, password}) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            credentials: "include",
            body: JSON.stringify({name, email, password})
          })
          .then((response) => {
            return this._handleServerResponse(response);
        });
    };

    authorize ({email, password}) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({email, password})
          })
          .then((response) => {
            return this._handleServerResponse(response);
        });
    };

    getUserInfo() {
      return this._request('/users/me');
    }

    updateUserInfo({name, email}) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
            name,
            email,
          })
      })
      .then(this._handleServerResponse)
    }

    getSavedMovies () {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
          })
          .then((response) => {
            return this._handleServerResponse(response);
        });
    }

    saveMovie(movieData) {
        return fetch(`${this._baseUrl}/movies`, {
          method: "POST",
          headers: this._headers,
          credentials: "include",
          body: JSON.stringify({
            country: movieData.country,
            director: movieData.director,
            duration: movieData.duration,
            year: movieData.year,
            description: movieData.description,
            image: `https://api.nomoreparties.co${movieData.image.url}`,
            trailerLink: movieData.trailerLink,
            thumbnail: `https://api.nomoreparties.co${movieData.image.formats.thumbnail.url}`,
            movieId: movieData.id,
            nameRU: movieData.nameRU,
            nameEN: movieData.nameEN,
          }),
        })
          .then((response) => {
            return this._handleServerResponse(response);
        });
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
          method: 'DELETE',
          headers: this._headers,
          credentials: 'include',
        })
        .then(this._handleServerResponse)
    }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.diplom.baturina.nomoredomains.icu',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});