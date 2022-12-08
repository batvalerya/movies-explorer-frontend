import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi.js';

import CurrentUserContext from '../../contexts/CurrentUserContext.js';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/NotFound.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

function App() {

  const history = useHistory();


  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerMessage, setRegisterMessage] = useState(false);

//функции

      function updateRegisterMessage(res) {
        setRegisterMessage(res);
      };

  const onRegister = (data) => {
    return mainApi.register(data)
      .then(() => {
        updateRegisterMessage(true);
        history.push('/signin');
    })
      .catch((err) => {
        updateRegisterMessage(false);
        console.log(err)
        if (err.includes("409")) {
          updateRegisterMessage("Пользователь с таким email уже существует.");
        } else {
          updateRegisterMessage("При регистрации пользователя произошла ошибка.");
        }
      })
  };

  const onLogin = (data) => {
    return mainApi.authorize(data)
      .then(({token: jwt}) => {
        localStorage.setItem('jwt', jwt);
        setLoggedIn(true);
        history.push('/');
    })
      .catch((err) => {
        updateRegisterMessage(false);
    });
  };

  const onLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/signin');
  };

//   useEffect(() => {
//     const jwt = localStorage.getItem('jwt')
//     console.log(jwt)
//     if(!jwt) {
//       return;
//     } else {
//       mainApi.getContent()
//         .then(() => {
//           setLoggedIn(true);
//           history.push('/');
//       })
//       .catch(() => {
//         console.log('Ошибка')
//       })
//     }
// }, []);

  useEffect(() => {
    mainApi.getUserInfo()
        .then((result) => {
          setCurrentUser(result)
        })
        .catch((err) => {
          console.log(err);
        }
    )
  }, [loggedIn]
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>

          <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn}
            component={Main}
          />

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onLogout={onLogout}
          />

          <Route path="/signin">
            <Login
              onLogin={onLogin}
            />
          </Route>

          <Route path="/signup">
            <Register
              onRegister={onRegister}
              loggedIn={loggedIn}
            />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;
