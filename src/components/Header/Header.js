import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js'

function Header() {
    return(
        <header className="header">
            <div className="header__container">
                <Logo />
                <Navigation />
            </div>
        </header>
    )
};

export default Header;