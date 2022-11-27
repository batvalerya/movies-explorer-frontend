import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js"

function SearchForm() {
    return(
        <form className="search-form">
            <div className="search-form__container">
                <div className="search-form__inputs">
                    <input
                        className="search-form__input"
                        type="text"
                        name="search-form"
                        placeholder="Фильм"
                        required
                    />
                    <button className="search-form__button" type="submit"></button>
                </div>
                <span className="search-form__error"></span>

                <FilterCheckbox />
                
            </div>
        </form>
    )
};

export default SearchForm;