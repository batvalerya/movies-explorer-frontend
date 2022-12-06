import { NavLink, Link } from 'react-router-dom';
import accountImg from '../../images/accountImg.svg'

function Hamburger({ isOpen, onHamburgerCloseBtn }) {
    return(
        <div className={`hamburger ${isOpen ? 'hamburger__menu_is-opened' : 'hamburger__menu_is-closed'}`}>
            <button className="hamburger__close-button"
            onClick={onHamburgerCloseBtn}
            />
            <ul className="hamburger__menu">
                <li  className="hamburger__item">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "hamburger__link hamburger__link_active" : "hamburger__link"}>
                        Главная
                    </NavLink>
                </li>
                <li  className="hamburger__item">
                    <NavLink to="/movies" className={({ isActive }) => isActive ? "hamburger__link hamburger__link_active" : "hamburger__link"}>
                        Фильмы
                    </NavLink>
                </li>
                <li className="hamburger__item">
                    <NavLink to="/saved-movies" className={({ isActive }) => isActive ? "hamburger__link hamburger__link_active" : "hamburger__link"}>
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