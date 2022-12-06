import { useState } from 'react';

import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js'

function Header({additionalHeaderClass}) {

    const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    function handleHamburgerMenuClick() {
        setHamburgerMenuOpen(true);
    }

    function handleHamburgerCloseBtnClick() {
        setHamburgerMenuOpen(false);
    }

    return(
        <header className={`header ${additionalHeaderClass || ''}`}>
            <div className="header__container">
                <Logo />
                <Navigation 
                    isAuthorize={true}
                    onHamburgerIcon={handleHamburgerMenuClick}
                    isOpen={isHamburgerMenuOpen}
                    onHamburgerCloseBtn={handleHamburgerCloseBtnClick}
                />
            </div>
        </header>
    )
};

export default Header;