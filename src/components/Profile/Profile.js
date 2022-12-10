import React from 'react';
import { useContext, useEffect } from "react";

import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import useFormWithValidation from '../../hooks/useFormWithValidation.js';


function Profile({ onLogout, loggedIn, onEditProfileInfo, errorMessage, isEditButtonActive, handleEditButtonClick }) {

    const { values, handleChange, errors, isValid, setValues, setValid } = useFormWithValidation({
        name: "",
        email: "",
    });

    const currentUser = useContext(CurrentUserContext);

    function handleChangeSubmit (profileData) {
        onEditProfileInfo(profileData);
    }

    function onSubmit(e) {
        handleChangeSubmit(values);
        e.preventDefault();
    }

    useEffect(() => {
        setValues({
          name: currentUser.name,
          email: currentUser.email,
        });
    }, []);

    useEffect(() => {
        if (values.name === currentUser.name && values.email === currentUser.email) 
        {
          setValid(false);
        }
    });
    
    return(
        <>
            <Header loggedIn={ loggedIn} />
            <main className="profile">
                <div className="profile__container">
                    <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                    <form className="profile__form" noValidate onSubmit={onSubmit}>
                        <div className="profile__input-container">
                            <p className="profile__input-name">Имя</p>
                            <input
                                className="profile__input"
                                type="text"
                                name="name"
                                value={values.name}
                                disabled={!isEditButtonActive && "disabled"}
                                onChange={handleChange}
                                pattern='[a-zA-Zа-яА-ЯёË\s\-]+'
                                minLength='2'
                                maxLength='30'
                                required
                            />
                        </div>

                        <span className={`auth__error ${errors.name && 'auth__error_visible'}`}>
                            {errors.name}
                        </span>

                        <div className="profile__input-container">
                            <p className="profile__input-name">E-mail</p>
                            <input
                                className="profile__input"
                                type="email"
                                name="email"
                                value={values.email}
                                disabled={!isEditButtonActive && "disabled"}
                                onChange={handleChange}
                                pattern='[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
                                required
                            />
                        </div>

                        <span className={`auth__error ${errors.email && 'auth__error_visible'}`}>
                            {errors.email}
                        </span>

                        {isEditButtonActive ? (
                            <>
                             <span className='profile__message'>{errorMessage}</span>
                             <button type='submit' className={`profile__save-btn ${ !isValid ? 'profile__save-btn_disabled' : 'profile__save-btn_active'}`} disabled={!isValid}>
                                Сохранить
                             </button>
                            </>
                        ) : (
                            <>
                            <button type="button" className="profile__edit-btn" onClick={handleEditButtonClick}>
                                Редактировать
                            </button>
                            <button className="profile__logout-btn" type="button" onClick={() => onLogout()}>
                                Выйти из аккаунта
                            </button>
                            </>
                        )}
                    </form>
                </div>
            </main>
        </>
    )
};

export default Profile;