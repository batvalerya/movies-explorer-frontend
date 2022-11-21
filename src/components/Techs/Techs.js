import Caption from "../Caption/Caption";

function Techs() {
    return(
        <section className="techs">
            <div className="techs__container">
                <Caption title="Технологии"/>
                <div className="techs__description">
                    <h2 className="techs__title">
                        7 технологий
                    </h2>
                    <p className="techs__subtitle">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                    </p>
                    <ul className="techs__items">
                        <li className="techs__item">
                            HTML
                        </li>
                        <li className="techs__item">
                            CSS
                        </li>
                        <li className="techs__item">
                            JS
                        </li>
                        <li className="techs__item">
                            REACT
                        </li>
                        <li className="techs__item">
                            Git
                        </li>
                        <li className="techs__item">
                            Express.js
                        </li>
                        <li className="techs__item">
                            mongoDB
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Techs;