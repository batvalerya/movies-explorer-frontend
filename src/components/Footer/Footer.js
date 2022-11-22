function Footer() {
    return(
        <section className="footer">
            <div className="footer__container">
                <p className="footer__text">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>
                <div className="footer__content-copyright">
                    <p className="footer__copyrigh">
                        &copy; 2022
                    </p>
                    <ul className="footer__items">
                        <li className="footer__item">
                            <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="https://github.com/batvalerya" target="_blank" rel="noreferrer">
                                Github
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Footer;