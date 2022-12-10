const { pathname } = useLocation();
const [foundMovies, setFoundMovies] = useState([]);
const [searchError, setSearchError] = useState("");
const [isCheckboxActive, setCheckboxOn] = useState(false);

useEffect(() => {
  setFoundMovies(savedMovies);
}, [pathname, savedMovies]);

function handleSearch(value) {
  if (value) {
    const filteredMovies = savedMovies.filter((savedMovie) =>
      savedMovie.nameRU.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredMovies)
    localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));
    if (filteredMovies.length !== 0) {
      setSearchError("");
      setFoundMovies(filteredMovies);
    } else {
      setSearchError("Ничего не найдено");
      setFoundMovies([]);
    }
    checkIfShortMovie(filteredMovies);

    isCheckboxActive
      ? setFoundMovies(
          JSON.parse(localStorage.getItem("foundSavedShortMovies"))
        )
      : setFoundMovies(JSON.parse(localStorage.getItem("foundSavedMovies")));
  } else {
    isCheckboxActive
      ? setFoundMovies(
          savedMovies.filter((movie) => {
            return movie.duration <= 40;
          })
        )
      : setFoundMovies(savedMovies);
  }
}

function checkIfShortMovie(filteredMovies) {
  if (isCheckboxActive) {
    const filteredShortMovies = filteredMovies.filter((movie) => {
      return movie.duration <= 40;
    });
    localStorage.setItem(
      "foundSavedShortMovies",
      JSON.stringify(filteredShortMovies)
    );
    return filteredShortMovies;
  } else {
    return;
  }
}

function toggleCheckbox() {
  setCheckboxOn(!isCheckboxActive);
}