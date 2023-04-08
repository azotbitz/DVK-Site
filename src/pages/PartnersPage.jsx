import React from 'react';

const PartnersPage = () => {
    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>Партнерам</h1></div>
            </div>

            <section className="feature-section feature-style-one centred">
                <div className="container my-container">
                    <div className="top-content">
                        <div className="title">ООО «ДВК» - эксклюзивный дистрибьютор на территории РФ.</div>
                        <div style={{paddingBottom: '0px'}} className="text">
                            <address>Россия, г. Москва, Волгоградский проспект, д.42, корп.23</address>
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