import Caption from "../Caption/Caption";

function AboutProject() {
    
    return(
        <section className="about-project">
            <div className="about-project__container" id="aboutProject">
                <Caption title="О проекте"/>
                <div className="about-project__info">
                    <div className="about-project__description">
                        <h3 className="about-project__subtitle">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="about-project__text">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div  className="about-project__description">
                        <h3 className="about-project__subtitle">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="about-project__text">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься. 
                        </p>
                    </div>
                </div>
                <div className="about-project__duration">
                    <p className="about-project__duration-item about-project__duration-text about-project__duration-week">
                        1 неделя
                    </p>
                    <p className="about-project__duration-item about-project__duration-text about-project__duration-4week">
                        4 недели
                    </p>
                    <p className="about-project__duration-item about-project__duration-description">
                        Back-end
                    </p>
                    <p className="about-project__duration-item about-project__duration-description">
                        Front-end
                    </p>
                </div>
            </div>
        </section>
    )
};

export default AboutProject;