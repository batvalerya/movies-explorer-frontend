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

    // getContent () {
    //     return fetch(`${this._baseUrl}/users/me`, {
    //         method: 'GET',
    //         headers: this._headers,
    //         credentials: 'include',
    //       })
    //       .then((response) => {
    //         return this._handleServerResponse(response);
    //     });
    // }

    getUserInfo() {
        return this._request('/users/me');
    }


}

export const mainApi = new MainApi({
  baseUrl: 'https://api.diplom.baturina.nomoredomains.icu',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});