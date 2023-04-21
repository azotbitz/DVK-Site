import React, {useContext} from 'react';
import {LanguageContext} from "../../components/App";

const WhiskeyPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'Whiskey',
            subtitle: 'SOLAN NO.ONE BLACK RARE & PREMIUM WHISKY 42,8%',
            text: 'Exceptional premium whiskey. Of amber-golden shaded colour, full-body and well-balanced taste of dried fruits with citrus fruits and a caramel tinge. Rich, broad woody notes of our whiskey aroma are perfectly balanced by notes of citron zest, bird-cherry tree, linden tree, green apple and wild flowers. Provides long and remarkably soft aftertaste. Ideally to be served with soft-ripened cheese, sea food and beef. Our whiskey might be consumed either straight, sip neat or in cocktails.',
            volume: 'Volume: 0.375 ml, 0.75 ml',
            subtitle2: 'SOLAN NO.ONE RESERVA PREMIUM WHISKY  42,8%',
            text2: 'An uncommon premium whiskey. Represents a blend of specially selected Indian corn and malt distillates which had undergone ageing in the best oak barrels. Is of amber-golden-shaded colour. Distinct oak notes are interlaced with the duo odor of soft vanilla and freshly cut grass aroma. Tinges of salted caramel, juicy citrus fruits, ripen apple, honey and nuts accomplish our whiskey aroma qualities. To be ideally served with soft-ripened cheese, meat delicacies and beef. Recommended to be consumed straight, sip neat or in cocktails.',
            volume2: 'Volume: 0.75 ml',
            subtitle3: 'THE SOLAN GOLD INDIAN SINGLE MALT WHISKY',
            text3: 'Rare premium whiskey. For the last 150 years this beverage is being produced by the oldest winery of India located in Himalayas at a height of approximately 1828 meters. The flavor of the drink is soft and well-balanced. For the production of this single malt whiskey special copper distillation stills are used, the best malted barley, Himalayan spring water; moreover the beverage is ageing in the high quality barrels made of American oak. Perfectly matches to soft-ripened cheese and beef.',
            volume3: 'Volume: 0.75 ml'
        },
        Russian: {
            title: 'Виски',
            subtitle: 'SOLAN NO.ONE BLACK RARE & PREMIUM WHISKY 42,8% ',
            text: 'Редкий виски из Индии премиум-класса. Имеет янтарно-золотистый оттенок, насыщенный и сбалансированный вкус сухофруктов с оттенками цитрусовых фруктов и карамели. Богатые тона древесины в аромате напитка уравновешены нотами лимонной цедры, черемухи, липы, зеленого яблока и полевых цветов. Обладает долгим и удивительно мягким послевкусием. Отлично сочетается с мягкими сырами, морепродуктами и говядиной. Рекомендуется употреблять в чистом виде или в составе коктейлей.',
            volume: 'Объем: 0,375 мл, 0,75 мл',
            subtitle2: 'SOLAN NO.ONE RESERVA PREMIUM WHISKY  42,8%',
            text2: 'Редкий виски премиум-класса. Представляет собой смесь отобранных индийских зерновых и солодовых дистиллятов, выдержанных в лучших дубовых бочках. Имеет янтарно-золотистый цвет. Ярко выраженные нотки дуба переплетаются с дуэтом нежной ванили и свежескошенной травы. В аромате слышны оттенки соленой карамели, сочных цитрусовых, спелых яблок, мёда и орехов. Сочетается с мягкими сырами, мясными деликатесами и говядиной. Рекомендуется употреблять в чистом виде или в составе коктейлей.',
            volume2: 'Объем: 0,75 мл',
            subtitle3: 'THE SOLAN GOLD INDIAN SINGLE MALT WHISKY',
            text3: 'Редкий виски премиум-класса. На протяжении 150 лет производится на одной из старейших винокурен Индии, расположенной на высоте около 1 828 м. в Гималаях. Обладает гармоничным и мягким вкусом. При изготовлении этого уникального односолодового виски используются медные перегонные кубы, лучший ячменный солод, гималайская родниковая вода и выдержка в высококлассных бочках из американского дуба. Идеально сочетается с мягкими сортами сыров и говядиной.',
            volume3: 'Объем: 0,75 мл'
        }
    };

    language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>{content.title}</h1>
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
                            <h4><a href="#">{content.subtitle}</a></h4>
                            <p className='text'>
                                {content.text}</p>
                            <h5 className='title'>{content.volume}</h5>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items-2">
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle2}</a></h4>
                            <p className='text'>
                                {content.text2}</p>
                            <h5 className='title'>{content.volume2}</h5>
                        </div>
                            <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                                <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky3.png" alt=""/></a>
                                <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky4.png" alt=""/></a>
                            </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky5.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle3}</a></h4>
                            <p className='text'>
                                {content.text3}</p>
                            <h5 className='title'>{content.volume3}</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhiskeyPage;