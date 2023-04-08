import React from 'react';

const AboutPage = () => {
    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>О компании</h1></div>
            </div>

            <section className="feature-section feature-style-one centred">
                <div className="container my-container">
                    <div className="top-content">
                        <div className="title">ООО «ДВК» - эксклюзивный дистрибьютор на территории РФ.</div>
                        <div style={{paddingBottom: '0px'}} className="text">
                            Компания основана в 2015 году, специализируется на импорте продукции из Индии. Мы уделяем особое внимание качеству, уважаем и высоко ценим традиции Южной Азии.
                            В ассортименте представлен большой выбор индийского высококлассного алкоголя.
                            ООО «ДВК» - эксклюзивный поставщик премиального рома «Old Monk»*.
                            НАШИ КЛИЕНТЫ: Магнит, Пятерочка, Перекрёсток, Metro, Виктория, Лента, Окей, Глобус, Дикси, Бристоль и др.

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;