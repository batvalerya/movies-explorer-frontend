import { useNavigate } from 'react-router-dom';

function NotFound() {

    const navigate = useNavigate();

    return(
        <div className="not-found-page">
            <h1 className="not-found-page__title">
                404
            </h1>
            <p className="not-found-page__subtitle">
                Страница не найдена
            </p>
            <button className="not-found-page__btn" onClick={() => navigate(-1)}>
                Назад
            </button>
        </div>
    )
};

export default NotFound;