import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Preloader from "../Preloader/Preloader.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import { moviesCards } from "../../utils/consts.js"

function Movies() {
    return(
        <>
            <Header />
            <main className="movies">
                <SearchForm />
                {/* <Preloader /> */}
                <MoviesCardList
                    moviesCards={moviesCards} />
            </main>

            <Footer />
        </>

    )
}

export default Movies;