import { Link } from 'react-router-dom';
import accountImg from '../../images/accountImg.svg'

function Navigation() {
    return(
        // <ul className="nav">
        //     <li className="nav__item">
        //         <Link to="/sign-up" className="nav__link nav__link_signup">
        //             Регистрация
        //         </Link>
        //     </li>
        //     <li className="nav__item">
        //         <Link to="/sign-in" className="nav__link nav__link_signin">
        //             Войти
        //         </Link>
        //     </li>
        // </ul>
        <div className="nav__account nav__account_hidden">
            <ul className="nav">
                <li  className="nav__item">
                    <Link to="/movies" className="nav__link nav__link_movies">
                        Фильмы
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/saved-movies" className="nav__link nav__link_saved-movies">
                        Сохранённые фильмы
                    </Link>
                </li>
            </ul>
            <div className="nav__item">
                    <Link to="/profile" className="nav__link nav__link_account">
                        <img src={accountImg} alt="Аккаунт" className="nav__account-img" />
                        Аккаунт
                    </Link>
            </div>
        </div>
    )
};

export default Navigation;