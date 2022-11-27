import Logo from "../Logo/Logo.js";
import { Link } from 'react-router-dom';

function AuthForm() {
    return(
        <section className="auth">
            <div className="auth__container">
                <Logo />
                <h2 className="auth__title">Добро пожаловать!</h2>
                <form className="auth__form" noValidate name="authForm">
                    <div className="auth__input-container">
                        <p className="auth__input-name">Имя</p>
                        <input
                            className="auth__input"
                            type="text"
                            name="name"
                            defaultValue="Виталий"
                        />
                        <span className="auth__error">
                            Что-то пошло не так...
                        </span>
                    </div>

                    <div className="auth__input-container">
                        <p className="auth__input-name">E-mail</p>
                        <input
                            className="auth__input"
                            type="email"
                            name="email"
                            defaultValue="pochta@yandex.ru"
                        />
                        <span className="auth__error">
                            Что-то пошло не так...
                        </span>
                    </div>

                    <div className="auth__input-container">
                        <p className="auth__input-name">Пароль</p>
                        <input
                            className="auth__input"
                            type="password"
                            name="password"
                        />
                        <span className="auth__error" style={{ visibility: 'visible' }}>
                            Что-то пошло не так...
                        </span>
                    </div>
                </form>
                <button className="auth-btn" type="submit">
                        Зарегистрироваться
                </button>
                <div className="auth-form__signin">
                    <p className="auth-form__signin-text auth-form__signin-text_question">
                        Уже зарегистрированы? 
                    </p>
                    <Link to="/sign-in" className="auth-form__signin-link auth-form__signin-text">Войти</Link>
                </div>
            </div>
        </section>
    )
};

export default AuthForm;