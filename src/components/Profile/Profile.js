import React from 'react';
import { useContext, useEffect } from "react";

import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';


function Profile({ onLogout }) {
    const currentUser = useContext(CurrentUserContext);
    
    return(
        <>
            <Header />
            <main className="profile">
                <div className="profile__container">
                    <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                    <form className="profile__form">
                        <div className="profile__input-container">
                            <p className="profile__input-name">Имя</p>
                            <input
                                className="profile__input"
                                type="text"
                                name="name"
                                value={currentUser.name}
                                disabled
                            />
                        </div>

                        <div className="profile__input-container">
                            <p className="profile__input-name">E-mail</p>
                            <input
                                className="profile__input"
                                type="email"
                                name="email"
                                value={currentUser.email}
                                disabled
                            />
                        </div>
                        <button className="profile__edit-btn" type="button">
                            Редактировать
                        </button>
                    </form>
                    <button className="profile__logout-btn" type="button" onClick={() => onLogout()}>
                        Выйти из аккаунта
                    </button>
                </div>
            </main>
        </>
    )
};

export default Profile;