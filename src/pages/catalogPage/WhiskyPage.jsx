import React from 'react';

const WhiskyPage = () => {
    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>Виски</h1>
                    <h2>SOLAN NO.ONE</h2>
                </div>
            </div>

            <section className="news-section">
                <div className="container my-container" style={{display: 'block'}}>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky1.png" alt=""/></a>
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky2.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">SOLAN NO.ONE BLACK RARE & PREMIUM WHISKY 42,8%</a></h4>
                            <p className='text'>
                                Редкий виски из Индии премиум-класса. Имеет янтарно-золотистый оттенок, насыщенный и сбалансированный вкус сухофруктов с оттенками цитрусовых фруктов и карамели.
                                Богатые тона древесины в аромате напитка уравновешены нотами лимонной цедры, черемухи, липы, зеленого яблока и полевых цветов. Обладает долгим и удивительно мягким послевкусием.
                                Отлично сочетается с мягкими сырами, морепродуктами и говядиной.
                                Рекомендуется употреблять в чистом виде или в составе коктейлей.</p>
                            <h5 className='title'>Объем: 0,375 л, 0,75 л</h5>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items-2">
                        <div className="lower-content">
                            <h4><a href="#">SOLAN NO.ONE RESERVA PREMIUM WHISKY  42,8%</a></h4>
                            <p className='text'>
                                Редкий виски премиум-класса. Представляет собой смесь отобранных индийских зерновых и солодовых дистиллятов, выдержанных в лучших дубовых бочках.
                                Имеет янтарно-золотистый цвет. Ярко выраженные нотки дуба переплетаются с дуэтом нежной ванили и свежескошенной травы.
                                В аромате слышны оттенки соленой карамели, сочных цитрусовых, спелых яблок, мёда и орехов. Сочетается с мягкими сырами, мясными деликатесами и говядиной.
                                Рекомендуется употреблять в чистом виде или в составе коктейлей.</p>
                            <h5 className='title'>Объем: 0,75 л</h5>
                        </div>
                            <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                                <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky3.png" alt=""/></a>
                                <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky4.png" alt=""/></a>
                            </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky5.png" alt=""/></a>
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky5.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">THE SOLAN GOLD INDIAN SINGLE MALT WHISKY</a></h4>
                            <p className='text'>
                                Редкий виски премиум-класса. На протяжении 150 лет производится на одной из старейших винокурен Индии, расположенной на высоте около 1 828 м. в Гималаях. Обладает гармоничным и мягким вкусом.
                                При изготовлении этого уникального односолодового виски используются медные перегонные кубы, лучший ячменный солод, гималайская родниковая вода и выдержка в высококлассных бочках из американского дуба.
                                Идеально сочетается с мягкими сортами сыров и говядиной. </p>
                            <h5 className='title'>Объем: 0,375 л, 0,75 л</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhiskyPage;