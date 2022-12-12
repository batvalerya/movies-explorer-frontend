import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect, useLocation } from 'react-router-dom';
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

  const { pathname } = useLocation();

  const history = useHistory();
  const location = useLocation();


  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [registerMessage, setRegisterMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [isEditButtonActive, setEditButtonActive] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [saveMovieError, setSaveMovieError] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isCheckboxActive, setCheckboxActive] = useState(false);

//функции

  function handleEditButtonClick() {
    if(!isEditButtonActive) {
        setEditButtonActive(true);
        updateErrorMessage("");
    } else {
        setEditButtonActive(false);
    }
  }

  function updateRegisterMessage(res) {
    setRegisterMessage(res);
  };

  function updateErrorMessage(res) {
    setErrorMessage(res);
  };

  function toggleCheckbox() {
    setCheckboxActive(!isCheckboxActive);
  }

  function checkboxOn() {
    setCheckboxActive(true);
  }

  function checkboxOff() {
    setCheckboxActive(false);
  }

  function handleMovieSave(movieData) {
    mainApi.saveMovie(movieData)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => {
        if (err.includes("401")) {
          onLogout();
          setLoggedIn(false);
          history.push('/');
          localStorage.clear();
        } else {
          setSaveMovieError("При удалении фильма произошла ошибка.", err);
        }
      })
  }

  function handleMovieDelete(movieId) {
    mainApi.deleteMovie(movieId)
      .then((res) => {
        setSavedMovies((state) =>
          state.filter((m) => m._id !== movieId)
        );
        console.log(res)
      })
      .catch((err) => {
        if (err.includes("401")) {
          onLogout();
          setLoggedIn(false);
          history.push('/');
          localStorage.clear();
        } else {
          setSaveMovieError("При удалении фильма произошла ошибка.", err);
        }
      })
  }

  const onRegister = (data) => {
    setIsLoading(true)
    return mainApi.register(data)
      .then(() => {
        onLogin(data)
        updateRegisterMessage(true);
        history.push('/movies');
        setIsLoading(false);
        localStorage.setItem("loggedIn", true);
    })
      .catch((err) => {
        setIsLoading(false)
        updateRegisterMessage(false);
        if (err.includes("409")) {
          updateRegisterMessage("Пользователь с таким email уже существует.");
        } else {
          updateRegisterMessage("При регистрации пользователя произошла ошибка.");
        }
      })
  };

  const onLogin = (data) => {
    return mainApi.authorize(data)
      .then(() => {
        localStorage.setItem("loggedIn", true);
        setLoggedIn(true);
        history.push('/movies');
    })
      .catch((err) => {
        updateRegisterMessage(false);
        if (err.includes("401")) {
          updateRegisterMessage("Вы ввели неправильный логин или пароль.");
        } else {
          updateRegisterMessage("При авторизации произошла ошибка. Токен не передан или передан не в том формате");
        }
      })
  };

  function onLogout() {
    mainApi
      .logout()
      .then((res) => {
        setLoggedIn(false);
        history.push('/');
        localStorage.clear();
        setCheckboxActive(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onEditProfileInfo = (profileInfo) => {
    setIsLoading(true)
    return mainApi.updateUserInfo(profileInfo)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setTimeout(() => handleEditButtonClick(), 1000);
        updateErrorMessage("Данные успешно обновлены");
        setIsLoading(false)
      })
      .catch((err) => {
        updateErrorMessage(false);
        setIsLoading(false)
        if (err.includes("409")) {
          updateErrorMessage("Пользователь с таким email уже существует.");
        } else if (err.includes("401")) {
            onLogout();
            setLoggedIn(false);
            history.push('/');
            localStorage.clear();
        } else {
          updateErrorMessage("При обновлении профиля произошла ошибка.");
        }
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("loggedIn");

    if(!token) {
      return;
    } else {
      mainApi.getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo)
          setLoggedIn(true);
          history.replace(location);
      })
      .catch((err) => {
        console.log('При запросе данных о пользователе произошла ошибка', err)
      })
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    setRegisterMessage('')
  }, [pathname])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>

          <Route exact path='/'>
            <Main
              loggedIn={loggedIn}
            />
          </Route>

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            onSaveMovie={handleMovieSave}
            savedMovies={savedMovies}
            onDeleteMovie={handleMovieDelete}
            isCheckboxActive={isCheckboxActive}
            toggleCheckbox={toggleCheckbox}
            checkboxOn={checkboxOn}
            checkboxOff={checkboxOff}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMovies={savedMovies}
            onDeleteMovie={handleMovieDelete}
            toggleCheckbox={toggleCheckbox}
            isCheckboxActive={isCheckboxActive}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onLogout={onLogout}
            onEditProfileInfo={onEditProfileInfo}
            errorMessage={errorMessage}
            isEditButtonActive={isEditButtonActive}
            handleEditButtonClick={handleEditButtonClick}
            isLoading={isLoading}
          />

          <Route path='/signin'>
            {loggedIn ? (
              <Redirect to='./' />
            ) : (
              <Login
                onLogin={onLogin}
                registerMessage={registerMessage}
                isLoading={isLoading}
              />
            )}
          </Route>

          <Route path='/signup'>
            {loggedIn ? (
              <Redirect to='./' />
            ) : (
              <Register
                onRegister={onRegister}
                loggedIn={loggedIn}
                registerMessage={registerMessage}
                isLoading={isLoading}
              />
            )}
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
