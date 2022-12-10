function FilterCheckbox({ toggleCheckbox, isCheckboxActive }) {
    return(
        <div className="search-form__checkbox-container">
            <label htmlFor="checkbox"  className="search-form__lable">
                <input
                    className="search-form__checkbox"
                    type="checkbox"
                    name="checkbox"
                    onChange={toggleCheckbox}
                    checked={isCheckboxActive}
                />
                Короткометражки
            </label>
        </div>
    )
}

export default FilterCheckbox;