class MoviesApi {
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

    getMovies () {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            method: 'GET',
            headers: this._headers,
          })
          .then((response) => {
            return this._handleServerResponse(response);
        });
    }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});