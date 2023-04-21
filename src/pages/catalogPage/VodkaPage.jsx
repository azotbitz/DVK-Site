import React, {useContext} from 'react';
import {LanguageContext} from "../../components/App";

const VodkaPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'Vodka',
            title2: 'BULBASH',
            subtitle: 'Vodka “Bulbash Osobaya” Premium 40%',
            text: 'Bulbash – is a popular Belarusian brand that adheres to the traditionally developed technologies which are interrelated with modern production practices and techniques. During the production a system of silver filters is actively in use which enables not only to remove impurities, but also to soften the taste of the final product. Vodka is produced of grain alcohol, infusion of oat-flakes, special brands of dried raisin and honey. The taste is well-balanced, while the flavor has a soft aroma of dried raisin and oat-flakes. The product was awarded with golden medals at the contest “Prodexpo-2011” and “The best vodka of the year, 2011”, “International Spirits Challenge, 2010”.',
            subtitle2: 'Vodka “Bulbash Birch-tree leafs” Premium 40%',
            text2: 'Bulbash “Birch-tree leafs” – is a mild vodka enriched with linden blossom extracts, raisin and sugar syrup. Sensation of the notes of pine resin, smoke and birch buds is easily preceived in the aroma of the vodka. At the competition “The best vodka of the year 2011” this product was awarded with a silver medal and a golden medal was received at the exhibition “PRODEXPO-2011”',
            subtitle3: 'Vodka “Bulbash Wild Foxberry” Premium 40%',
            text3: 'This beverage composition is based on the confined water, grain alcohol of the “Lux Premium” grade, wild foxberry infusions and the extract of the plant Sagan Daila originating from the North Asia regions. The drink taste is mild, with fine berry traces and specific aroma. The beverage leaves a pleasant warming aftertaste. To be served as an appetizer or digestif, well chilled.',
            subtitle4: 'Bitter “Bulbash Zubrovaya” 40%',
            text4: 'Bitter «Bulbash Zubrovaya» - is a liqueur with a faint bitterness, a distinct sweetish taste and a specific aroma of healing herbs. The beverage name relates to the name of the healing grass Zubrovka or vanilla grass that grows up in the National Park – Bialoweiza forest – a motherland of Belorussian bison. Each bottle of the liqueur contains a stalk of Zubrovka grass. The beverage color is light golden; the taste has the notes of meadow grasses and undergrowth. To be served as an appetizer with meat, fish, hors d’oeuvre/ snacks and pickled vegetables.\n',
            subtitle5: 'Bitter “Honey Bulbash with pepper” 40%',
            text5: 'This bitter is a modern version of the traditional Belorussian beverage “Spicy honey” which was brewed up usually on hot pepper. Beverage is of a golden colour, with a warming pepper taste, goatweed and honey. The aftertaste is long-lasting, warming up, of spicy honey taste. The product was awarded with a golden medal at the exhibition PRODEXPO-2012, got a diploma for “The perfect quality” at the exhibition PRODEXPO-2006, golden medal at the contest “Wines and beverages, 2005”.',
            subtitle6: 'Vodka “Bulbash Greenline” Mild Premium 40%',
            text6: 'Mild tasted vodka produced of confined water, grain alcohol of the “Lux Premium” class and herbs extracts. The beverage composition is a combination of traditional values of the producer, such as ecological properties, safety and natural components. The taste is pure with the notes of oat flakes and rice. To be served as an appetizer or digestif, also works well with Russian and Belorussian cuisine, could be used as an ingredient in cocktails especially with spearmint added.',
            subtitle7: 'Vodka “Bulbash Greenline” Cranberry Premium 40%',
            text7: 'Vodka “Bulbash Greenline” Cranberry is being produced on the basis of a specific technology when vodka blend is being put aside for some “rest”. Such methods not only give positive effect on the taste of the beverage, but also makes it more complete and well-balanced. The combination of the soft cranberry sourness and fresh, harsh aroma of the beverage promotes pleasant emotions and improve customers’ mood. The product works well with Russian and Belorussian cuisine; recommended to be consumed straight, sip neat or in cocktails.',
            subtitle8: 'Vodka “Bulbash GreenLine” Citrus Premium 40%',
            text8: 'An innovating product presents a mix of three citrus ingredients: orange, lemon and lime. A special production technology for this beverage was developed, when the vodka blend is being set aside for sometime “to have a rest”. It gives a positive impact on the product taste making it more distinct and well-balanced. Ingredients are 100% natural, including confined water, grain alcohol of the “Lux Premium” class and citrus aromatic spirits. The taste of the product is fresh with predominant citrus notes.',
            subtitle9: 'Vodka “Bulbash Pomegranate” Premium Premium 40%',
            text9: 'On the basis of the pure confined water and grain alcohol of the “Lux Premium” class this beverage was developed. The taste provides soft and tart tinges of the ripe pomegranate. The aftertaste is warming and pleasant. This vodka is perfect when consumed straight, sip neat or in various cocktails.',
            volume: 'Volume 0,5 L'
        },
        Russian: {
            title: 'Водка',
            title2: 'БУЛЬБАШЪ',
            subtitle: 'Водка “Бульбашъ Особая” Премиум 40%',
            text: 'Бульбашъ – популярный белорусский бренд, который придерживается традиционных технологий и совмещает их с современными методами производства. Для производства активно используется система серебряных фильтров, которая не только удаляет примеси, но и смягчает конечный продукт. Водка создается из зернового спирта, настоя овсяных хлопьев, особого сорта изюма и мёда. Имеет сбалансированный вкус и тонкий аромат изюма и овсяных хлопьев. Напиток награжден золотыми медалями на конкурсах «ПРОДЭКСПО-2011» и «Лучшая водка года, 2011»", «International Spirits Challenge, 2010». ',
            subtitle2: 'Водка “Бульбашъ Березовые листочки” Премиум 40%',
            text2: 'Бульбашъ Березовые листочки» - это мягкая водка с настоем липового цвета, изюмом и сахарным сиропом. В аромате улавливаются ноты смолы, дымки и березовых почек. В конкурсе "Лучшая водка года, 2011" получила серебряную медаль и золотую медаль на выставке"ПРОДЭКСПО-2011".',
            subtitle3: 'Водка “Бульбашъ” Дикая Брусника Премиум 40%',
            text3: 'Водка, в составе которой артезианская вода, зерновой спирт класса «Люкс Premium», брусничные настои и произрастающее в Северной Азии растение Саган Дайля. Имеет мягкий, тонкий ягодный вкус и характерный аромат. Оставляет приятное, согревающее послевкусие. Подается охлажденной, чаще в качестве аперитива или дижестива. ',
            subtitle4: 'Настойка горькая “Бульбашъ Зубровая” 40%',
            text4: '«Бульбашъ Зубровая» - настойка с легкой горчинкой, выраженным сладковатым вкусом и характерным ароматом целебных трав. Напиток получил название в честь травы Зубровки, которая произрастает на Родине белорусского зубра – в Беловежской пуще. В каждую бутылку производитель добавляет стебель Зубровки. Имеет светло-золотистый цвет, содержит ноты луговых трав и подлеска. Используется как аперитив, подается к мясу, рыбе, закускам, соленьям.',
            subtitle5: 'Настойка горькая “Бульбашъ Медовая с перцем” 40%',
            text5: 'Настойка – современный вариант традиционного белорусского напитка "Пряный мед", который настаивался на остром стручковом перце. Имеет золотистый цвет, теплый вкус перца, зверобоя и меда. Послевкусие долгое, согревающее, медово-пряное. Награждена золотой медалью на выставке ПРОДЭКСПО-2012, дипломом «За отличное качество» на выставке ПРОДЭКСПО-2006, золотой медалью на конкурсе «Вина и напитки, 2005».',
            subtitle6: 'Водка “Бульбашъ Гринлайн” Мягкая Премиум 40%',
            text6: 'Мягкая водка на основе артезианской воды, зернового спирт класса «Люкс Premium» и настоя трав. Сочетает в себе традиционные ценности производителя - экологичность, безопасность и натуральность. Обладает чистым вкусом, в котором читаются нотки овсяных хлопьев и риса. Употребляется в качестве аперитива и диджестива, хорошо сочетается с блюдами русской и белорусской кухни, используется как ингредиент для коктейлей с добавлением мяты.',
            subtitle7: 'Водка “Бульбашъ Гринлайн” Клюква Премиум 40%',
            text7: 'Водка «Бульбашъ Гринлайн» Клюква создается на основе специальной технологии, где «купаж» оставляют для отдыха. Это благоприятно влияет на вкус, он становится более глубоким и сбалансированным. Сочетание мягкого вкуса клюквенной кислинки и свежего, терпкого аромата дарят приятные впечатления и хорошее настроение. Хорошо сочетается с традиционными блюдами русской кухни, употребляется как самостоятельный напиток и как дополнение к коктейлям. ',
            subtitle8: 'Водка “Бульбашъ Гринлайн” Цитрус Премиум 40%',
            text8: 'Инновационная водка, которая включает в себя микс сразу трех цитрусовых элементов: апельсина, лимона и лайма. Изготавливается по специальной технологии, где «купаж» оставляют для отдыха. Это благоприятно влияет на вкус, напиток становится более глубоким и сбалансированным. Состав полностью натуральный, включает в себя артезианскую воду, зерновой спирт класса «Люкс» и ароматные спирты цитрусовых. Водка обладает свежим вкусом с доминирующими нюансами апельсина.',
            subtitle9: 'Водка “Бульбашъ Гринлайн” Гранат Премиум 40%',
            text9: 'Водка на основе чистой артезианской воды и зернового спирта класса «Люкс Premium». Во вкусе ощущаются мягкие и терпкие оттенки спелого граната. Оставляет согревающее, приятное послевкусие. Идеальна для употребления как в чистом виде, так и в составе разнообразных коктейлей.',
            volume: 'Объём: 0,5 л'
        }
    };

    language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>{content.title}</h1>
                <h2>{content.title2}</h2>
                </div>
            </div>


            <section className="news-section">
                <div className="container my-container" style={{display: 'block'}}>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/7.png" alt=""/></a>
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
                            <p className='text'>{content.text2}</p><h5 className='title'>{content.volume}</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/1.png" alt=""/></a>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/9.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle3}</a></h4>
                            <p className='text'>
                                {content.text3}</p><h5 className='title'>{content.volume}</h5>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items-2">
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle4}</a></h4>
                            <p className='text'>
                                {content.text4}</p>
                            <h5 className='title'>{content.volume}</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/8.png" alt=""/></a>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/6.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle5}</a></h4>
                            <p className='text'>
                                {content.text5}</p><h5 className='title'>{content.volume}</h5>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items-2">
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle6}</a></h4>
                            <p className='text'>
                                {content.text6}</p><h5 className='title'>{content.volume}</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/3.png" alt=""/></a>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/5.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle7}</a></h4>
                            <p className='text'>
                                {content.text7}</p><h5 className='title'>{content.volume}</h5>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items-2">
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle8}</a></h4>
                            <p className='text'>
                                {content.text8}</p><h5 className='title'>{content.volume}</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/4.png" alt=""/></a>
                        </div>
                    </div>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/vodka/2.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle9}</a></h4>
                            <p className='text'>
                                {content.text9}</p>
                            <h5 className='title'>{content.volume}</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VodkaPage;