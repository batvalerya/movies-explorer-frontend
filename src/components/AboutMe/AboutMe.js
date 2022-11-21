import photo from "../../images/student.jpg"
import Caption from "../Caption/Caption";

function AboutMe() {
    return(
        <section className="about-me">
            <div className="about-me__container">
                <Caption title="Студент"/>
                <div className="about-me__info">
                    <div className="about-me__text">
                        <h3 className="about-me__name">
                            Виталий
                        </h3>
                        <p className="about-me__profession">
                            Фронтенд-разработчик, 30 лет
                        </p>
                        <p className="about-me__description">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <a className="about-me__link" href="https://github.com/batvalerya" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </div>
                    <img src={photo} className="about-me__img" alt="Фотография студента" />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;