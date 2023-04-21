import React, {useContext} from 'react';
import {LanguageContext} from "../components/App";

const ErrorPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'Oops! Page not found!',
            subtitle: 'We did not find request page. Return to the home page or try the request again.',
            link: 'Go back to the home page'
        },
        Russian: {
            title: 'Упс! Страница не найдена!',
            subtitle: 'Мы не нашли такую страницу. Вернитесь на главную или попробуйте запрос снова.',
            link: 'Вернуться на главную'
        }
    }

    language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    return (
        <>

            <section className="feature-section feature-style-one centred">
                <div className="container my-container">
                    <div className="top-content">
                        <div className="title"><h2>404</h2></div>
                        <div className="title">{content.title}</div>
                        <div className="text">
                            {content.subtitle}
                        </div>
                        <h4 style={{marginTop: '70px'}}><a href="/">{content.link}</a></h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;