function FilterCheckbox() {
    return(
        <div className="search-form__checkbox-container">
            <label htmlFor="checkbox"  className="search-form__lable">
                <input
                    className="search-form__checkbox"
                    type="checkbox"
                    name="checkbox"
                />
                Короткометражки
            </label>
        </div>
    )
}

export default FilterCheckbox;