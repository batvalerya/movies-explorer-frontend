import Logo from "../Logo/Logo.js";
import { Link } from 'react-router-dom';

function AuthForm({isSignIn, authTitle, formName, submitText, formQuestion, questionLink, questionLinkText }) {
    return(
        <section className="auth">
            <div className="auth__container">
                <Logo />
                <h2 className="auth__title">
                    {authTitle}
                </h2>
                <form className="auth__form" noValidate name={formName}>
                    {!isSignIn && (
                        <div className="auth__input-container">
                            <p className="auth__input-name">Имя</p>
                            <input
                                className="auth__input"
                                type="text"
                                name="name"
                            />
                            <span className="auth__error">
                                Что-то пошло не так...
                            </span>
                        </div>
                    )
                    }
                    <div className="auth__input-container">
                        <p className="auth__input-name">E-mail</p>
                        <input
                            className="auth__input"
                            type="email"
                            name="email"
                            minLength="2"
                            maxLength="30"

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
                        {submitText}
                </button>
                <div className="auth-question">
                    <p className="auth-question__link-text auth-question__link-text_ask">
                        {formQuestion}
                    </p>
                    <Link to={questionLink} className="auth-question__link auth-question__link-text">
                        {questionLinkText}
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default AuthForm;