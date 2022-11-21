import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js'

function Header() {
    return(
        <header className="header__container">
            <Logo />
            <Navigation />
        </header>
    )
};

export default Header;