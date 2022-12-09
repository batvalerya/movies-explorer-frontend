import Logo from "../Logo/Logo.js";
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation.js';

function AuthForm({
    authTitle,
    formName,
    handleChangeSubmit,
    isSignIn,
    submitText,
    formQuestion,
    questionLink,
    questionLinkText,
    errorRegisterMessage}) {

    const { values, handleChange, errors, isValid } = useFormWithValidation({
        name: '',
        email: '',
        password: '',
      });

      function onSubmit(e) {
        handleChangeSubmit(values);
        e.preventDefault();
      }
    
    return(
        <section className="auth">
            <div className="auth__container">
                <Logo />
                <h2 className="auth__title">
                    {authTitle}
                </h2>
                <form className="auth__form" noValidate name={formName} onSubmit={onSubmit}>
                    {!isSignIn && (
                        <div className="auth__input-container">
                            <p className="auth__input-name">Имя</p>
                            <input
                                className="auth__input"
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                required
                                pattern='[a-zA-Zа-яА-ЯёË\s\-]+'
                            />
                            <span className={`auth__error ${errors?.name && 'auth__error_visible'}`}>
                                {errors.name}
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
                            value={values.email}
                            pattern='[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
                            onChange={handleChange}
                            required
                        />
                        <span className={`auth__error ${errors.email && 'auth__error_visible'}`}>
                            {errors.email}
                        </span>
                    </div>

                    <div className="auth__input-container">
                        <p className="auth__input-name">Пароль</p>
                        <input
                            className="auth__input"
                            type="password"
                            name="password"
                            minLength="8"
                            value={values.password}
                            onChange={handleChange}
                            required
                        />
                        <span className={`auth__error ${errors.password && 'auth__error_visible'}`}>
                            {errors.password}
                        </span>
                    </div>

                    <span className="auth__error-message">
                        {errorRegisterMessage}
                    </span>

                    <button className={`auth-btn ${ !isValid ? 'auth-btn_disabled' : 'auth-btn_active'}`} type="submit" disabled={!isValid}>
                        {submitText}
                    </button>
                    
                </form>
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