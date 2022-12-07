import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/NotFound.js';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setCurrentUser({ name: 'Виталий', email: 'pochta@yandex.ru' });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>

              <Route exact path="/">
                  <Main />
              </Route>

              <Route path="/movies">
                  <Movies />
              </Route>

              <Route path="/saved-movies">
                  <SavedMovies />
              </Route>

              <Route path="/profile">
                  <Profile />
              </Route>

              <Route path="/signin">
                  <Login />
              </Route>

            <Route path="/signup">
              <Register/>
            </Route>

            <Route path="*">
                  <NotFound />
            </Route>

            <Route path="*">
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin"/>}
            </Route>
            
          </Switch>
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;
