import React from 'react';

const ErrorPage = () => {
    return (
        <>

            <section className="feature-section feature-style-one centred">
                <div className="container my-container">
                    <div className="top-content">
                        <div className="title"><h2>404</h2></div>
                        <div className="title">Упс! Страница не найдена!</div>
                        <div className="text">
                            Мы не нашли такую страницу. Вернитесь на главную или попробуйте запрос снова.
                        </div>
                        <h4 style={{marginTop: '70px'}}><a href="/">Вернуться на главную</a></h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;