import { useState, useEffect } from 'react';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import useFormWithValidation from "../../hooks/useFormWithValidation.js";

function SearchForm({ handleSearch, searchQuery }) {

    const { values, handleChange, setValues, isValid } = useFormWithValidation({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        if (!isValid) {
            setErrorMessage('Нужно ввести ключевое слово');
            return;
        }
            setErrorMessage('');
            handleSearch(values.searchQuery);
      };

      useEffect(() => {
        setValues({ searchQuery: searchQuery });
      }, [searchQuery, setValues]);

    return(
        <form className="search-form" onSubmit={handleSubmitSearch} noValidate>
            <div className="search-form__container">
                <div className="search-form__inputs">
                    <input
                        className="search-form__input"
                        type="text"
                        name="searchQuery"
                        placeholder="Фильм"
                        required
                        onChange={handleChange}
                        value={values.searchQuery}
                    />
                    <button className="search-form__button" type="submit"></button>
                </div>
                <span className="search-form__error">{errorMessage}</span>

                <FilterCheckbox />
                
            </div>
        </form>
    )
};

export default SearchForm;