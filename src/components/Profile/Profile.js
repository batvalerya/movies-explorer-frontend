function Profile({userInfo}) {
    return(
        <main className="profile">
            <div className="profile__container">
                <h2 className="profile__title">Привет, {userInfo.name}!</h2>
                <form className="profile__form">
                    <div className="profile__input-container">
                        <p className="profile__input-name">Имя</p>
                        <input
                            className="profile__input"
                            type="text"
                            name="name"
                            value={userInfo.name}
                            disabled
                        />
                    </div>

                    <div className="profile__input-container">
                        <p className="profile__input-name">E-mail</p>
                        <input
                            className="profile__input"
                            type="email"
                            name="email"
                            value={userInfo.email}
                            disabled
                        />
                    </div>
                    <button className="profile__edit-btn" type="button">
                        Редактировать
                    </button>
                </form>
                <button className="profile__logout-btn" type="button">
                    Выйти из аккаунта
                </button>
            </div>
        </main>
    )
};

export default Profile;