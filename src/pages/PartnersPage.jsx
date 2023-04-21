import React, {useContext} from 'react';
import {LanguageContext} from "../components/App";

const PartnersPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'Partners Info',
            subtitle: 'JSC “DVK” is the exclusive distributor in the territory of the Russian Federation.',
            address: 'Volgogradsky avenue, 42, building 23, Moscow, Russia'
        },
        Russian: {
            title: 'Партнерам',
            subtitle: 'ООО «ДВК» - эксклюзивный дистрибьютор на территории РФ.',
            address: 'Россия, г. Москва, Волгоградский проспект, д.42, корп.23'
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
                            <address>{content.address}</address>
                            info@dvkwine.ru<br/><br/>
                            Тел.: 8 (495) 640 - 41 – 66
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PartnersPage;