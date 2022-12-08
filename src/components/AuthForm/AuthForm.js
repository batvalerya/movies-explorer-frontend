import Logo from "../Logo/Logo.js";
import { Link } from 'react-router-dom';

function AuthForm(props) {
    return(
        <section className="auth">
            <div className="auth__container">
                <Logo />
                <h2 className="auth__title">
                    {props.authTitle}
                </h2>
                <form className="auth__form" noValidate name={props.formName} onSubmit={props.handleChangeSubmit}>
                    {!props.isSignIn && (
                        <div className="auth__input-container">
                            <p className="auth__input-name">Имя</p>
                            <input
                                className="auth__input"
                                type="text"
                                name="name"
                                value={props.name}
                                onChange={props.handleChange}
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
                            value={props.email}
                            onChange={props.handleChange}
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
                            value={props.password}
                            onChange={props.handleChange}
                        />
                        <span className="auth__error">
                            Что-то пошло не так...
                        </span>
                    </div>

                    <button className="auth-btn" type="submit">
                        {props.submitText}
                    </button>
                    
                </form>
                <div className="auth-question">
                    <p className="auth-question__link-text auth-question__link-text_ask">
                        {props.formQuestion}
                    </p>
                    <Link to={props.questionLink} className="auth-question__link auth-question__link-text">
                        {props.questionLinkText}
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default AuthForm;