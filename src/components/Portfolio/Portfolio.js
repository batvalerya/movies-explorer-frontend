import Arrow from "../../images/arrow.svg";

function Portfolio() {
    return(
        <section className="portfolio">
            <div className="portfolio__container">
                <h3 className="portfolio__title">
                    Портфолио
                </h3>
                <ul className="portfolio__items">
                    <li className="portfolio__item">
                        <a className="portfolio__link" href="https://github.com/batvalerya/how-to-learn" target="_blank" rel="noreferrer">
                            Статичный сайт
                            <img src={Arrow} className="portfolio__arrow" alt="Стрелка"></img>
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <a className="portfolio__link" href="https://github.com/batvalerya/russian-travel" target="_blank" rel="noreferrer">
                            Адаптивный сайт
                            <img src={Arrow} className="portfolio__arrow" alt="Стрелка"></img>
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <a className="portfolio__link" href="https://github.com/batvalerya/react-mesto-api-full" target="_blank" rel="noreferrer">
                            Одностраничное приложение
                            <img src={Arrow} className="portfolio__arrow" alt="Стрелка"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Portfolio;