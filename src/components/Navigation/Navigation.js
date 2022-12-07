import { Link } from 'react-router-dom';
import accountImg from '../../images/accountImg.svg'
import Hamburger from '../Hamburger/Hamburger';

function Navigation({isAuthorize, onHamburgerIcon, isOpen, onHamburgerCloseBtn}) {
    return(
        <>
               {!isAuthorize ? (
            <ul className="nav">
                <li className="nav__item">
                    <Link to="/signup" className="nav__link nav__link_signup">
                        Регистрация
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/signin" className="nav__link nav__link_signin">
                        Войти
                    </Link>
                </li>
            </ul>
        ) : (
            <>
            <div className="account-menu account-menu_hidden">
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
                <div className="account-menu__item">
                        <Link to="/profile" className="account-menu__link account-menu__link_icon">
                            <img src={accountImg} alt="Аккаунт" className="account-menu__img" />
                            Аккаунт
                        </Link>
                </div>
            </div>
            <button
                className="header__hamburger-btn header__hamburger-btn_hidden" 
                onClick={onHamburgerIcon}
            />
            <Hamburger
                isOpen={isOpen}
                onHamburgerCloseBtn={onHamburgerCloseBtn}
            />
            </>
        )
        }
        </>
    )
};

export default Navigation;