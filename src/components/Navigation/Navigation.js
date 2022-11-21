import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <ul className="nav">
            <li className="nav__item">
                <Link to="/sign-up" className="nav__link nav__link_signup">
                    Регистрация
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/sign-in" className="nav__link nav__link_signin">
                    Войти
                </Link>
            </li>
        </ul>
    )
};

export default Navigation;