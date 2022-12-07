import { NavLink, Link } from 'react-router-dom';
import accountImg from '../../images/accountImg.svg'

function Hamburger({ isOpen, onHamburgerCloseBtn }) {
    return(
        <div className={`hamburger ${isOpen ? 'hamburger_is-opened' : 'hamburger_is-closed'}`}>
            <button className="hamburger__close-button"
            onClick={onHamburgerCloseBtn}
            />
            <ul className="hamburger__menu">
                <li  className="hamburger__item">
                    <NavLink exact to="/" className="hamburger__link" activeClassName="hamburger__link_active">
                        Главная
                    </NavLink>
                </li>
                <li  className="hamburger__item">
                    <NavLink to="/movies" className="hamburger__link" activeClassName="hamburger__link_active">
                        Фильмы
                    </NavLink>
                </li>
                <li className="hamburger__item">
                    <NavLink to="/saved-movies" className="hamburger__link" activeClassName="hamburger__link_active">
                        Сохранённые фильмы
                    </NavLink>
                </li>
            </ul>
                <Link to="/profile" className="hamburger__link hamburger__link-account">
                    <img src={accountImg} alt="Аккаунт" className="hamburger__account-img" />
                    Аккаунт
                </Link>
        </div>
    )
};

export default Hamburger;