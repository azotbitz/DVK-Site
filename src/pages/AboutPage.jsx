import React, {useContext} from 'react';
import {LanguageContext} from "../components/App";

const AboutPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'About',
            subtitle: 'JSC “DVK” is the exclusive distributor in the territory of the Russian Federation.',
            text: 'The company was founded in 2015 to import various products from India. The product quality is our special target along with genuine respect to and high appreciation of the South Asia traditions. Our product assortment is represented by a considerable proposal of the high quality Indian alcohol. JSC “DVK” – is an exclusive distributor of the premium rum «Old Monk”*. OUR CUSTOMERS are: Magnit, Pyaterochka, Perekrestok, Metro, Victoria, Lenta, Okey, Globus, Diksi, Bristol and etc.'
        },
        Russian: {
            title: 'О компании',
            subtitle: 'ООО «ДВК» - эксклюзивный дистрибьютор на территории РФ.',
            text: ' Компания основана в 2015 году, специализируется на импорте продукции из Индии. Мы уделяем особое внимание качеству, уважаем и высоко ценим традиции Южной Азии. В ассортименте представлен большой выбор индийского высококлассного алкоголя. ООО «ДВК» - эксклюзивный поставщик премиального рома «Old Monk»*. НАШИ КЛИЕНТЫ: Магнит, Пятерочка, Перекрёсток, Metro, Виктория, Лента, Окей, Глобус, Дикси, Бристоль и др.'
        }
    }

    language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>{content.title}</h1></div>
            </div>

            <section className="feature-section feature-style-one centred">
                <div className="container my-container">
                    <div className="top-content">
                        <div className="title">{content.subtitle}</div>
                        <div style={{paddingBottom: '0px'}} className="text">
                            {content.text}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;