return (
    <CurrentUserContext.Provider >
      <div className="page">
        <Switch>
            {/* <ProtectedRoute
                exact path="/"
                component={Main}
            /> */}

            <Route exact path="/">
                <Main />
            </Route>

            <Route path="/movies">
                <Movies />
            </Route>

            <Route path="/signin">
                <Login />
            </Route>

          <Route path="/signup">
            <Register/>
          </Route>

          <Route path="*">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin"/>}
          </Route>
          
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );

  <div className="page">
  <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/movies' element={<Movies />} />
    <Route path='/saved-movies' element={<SavedMovies />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/signin' element={<Login />} />
    <Route path='/signup' element={<Register />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
</div>