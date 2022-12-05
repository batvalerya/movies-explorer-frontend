import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js'

function Header({additionalHeaderClass}) {
    return(
        <header className={`header ${additionalHeaderClass || ''}`}>
            <div className="header__container">
                <Logo />
                <Navigation isAuthorize={true}/>
            </div>
        </header>
    )
};

export default Header;