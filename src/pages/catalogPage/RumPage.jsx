import React, {useContext} from 'react';
import {LanguageContext} from "../../components/App";

const RumPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'Rum',
            subtitle: 'OLD MONK 7 years of ageing, 42,8%',
            text: 'The most popular Indian rum in the world. The product was rewarded with Golden Medals at the Monde World Selections (1982 г.). ' +
                'Is being aged in oak barrels, has a remarkable full-body taste and aroma with clear tinges of caramel, coffee with cream, vanilla biscuit, dried fruits, berry jam, eastern spices, citron zest, chocolate and molasses.',
            volume: 'Volume: 0.375 ml, 0.75 ml, 1,0 L',
            subtitle2: 'OLD MONK – White 42,8%',
            text2: 'The white rum is not being aged in the oak barrel and is the mildest beverage in the OLD MONK product line. The specific nature of the beverage is based on profound and full body taste, vanilla aroma, citrus and soft coco-nut flavor. This components’ combination ensures softness of the rum, provides its’ freshness and spicy taste thanks to its’ origin. The drink is perfect base for cocktails preparation.',
            volume2: 'Volume: 0.375 ml, 0.75 ml',
            subtitle3: 'OLD MONK The Legend 1,0 of 21 years of ageing, 42.8%',
            text3: 'Rum is filled in proprietary bottles in the form of a smiling monk. The drink is being aged for 21 years in oak barrels and has the color of buckwheat honey. The product is supplied from India, specially packed in freight packing. The flavor is endorsed with caramel taste and scent of ripe fruit. The taste of the beverage is mild combining caramel notes, banana, cinnamon, orange and cloves. The aftertaste consists of notes of black tea, fig and dried apricots.',
            volume3: 'Volume: 1,0L',
            subtitle4: 'OLD MONK Supreme 0,75 – of 12 years of ageing, 42.8%',
            text4: 'Rum of the 12 years of ageing in humid tropical climate conditions of the South Asia is being supplied from India in special freight packing. The drink has the mild dry taste with the notes of chocolate, black pepper, vanilla biscuit, treacle and cream. The aroma of the drink reminds oak notes, vanilla pie, cinnamon and other spices.',
            volume4: 'Volume: 0.75 ml'
        },
        Russian: {
            title: 'Ром',
            subtitle: 'OLD MONK выдержка 7 лет 42,8%',
            text: 'Самый популярный индийский ром в мире. Награжден золотыми медалями Monde World Selections (1982 г.). Выдерживается дубовых бочках, отличается ярким вкусом и ароматом. Имеет оттенки карамели, кофе со сливками, ванильного бисквита, сухофруктов, ягодного джема, восточных специй, цедры, шоколада и черной патоки.',
            volume: 'Объем: 0,375 мл, 0,75 мл, 1,0 л\n',
            subtitle2: 'OLD MONK White 42,8%',
            text2: 'Белый ром не вызревает в дубовой бочке и является самым лёгким из всей серии Old Monk. Особенность напитка заключается в глубоком и выразительном вкусе, аромате ванили, цитрусов и нежных кокосовых орехов. Такое сочетание делает ром мягким, свежим и пряным в силу своего происхождения. Идеально подходит для приготовления коктейлей.',
            volume2: 'Объем: 0,375 мл, 0,75 мл',
            subtitle3: 'OLD MONK The Legend 1,0 выдержка 21 год 42,8%',
            text3: 'Ром в оригинальной бутылке в форме улыбающегося монаха. Выдерживается 21 год в дубовых бочках, имеет цвет гречишного мёда. Доставляется из Индии в транспортной упаковке. В аромате ощущаются карамель и спелые фрукты. Вкус мягкий, сочетает в себе карамель, банан, корицу, апельсин и гвоздику. Имеет послевкусие чёрного чая, инжира и кураги.',
            volume3: 'Объем: 1,0 л',
            subtitle4: 'OLD MONK Supreme 0,75 выдержка 12 лет 42,8%',
            text4: 'Ром двенадцатилетней выдержки в условиях влажного тропического климата Южной Азии, доставляет из Индии в транспортной упаковке. Имеет мягкий сухой вкус с оттенками шоколада, чёрного перца, ванильного бисквита, патоки и сливок. В аромате слышны нотки дуба, ванильного пирога, корицы и других пряностей.',
            volume4: 'Объем: 0,75 мл'
        }
    };

    language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>{content.title}</h1>
                <h2>OLD MONK</h2>
                </div>
            </div>

            <section className="news-section">
                <div className="container my-container" style={{display: 'block'}}>

                            <div style={{display: 'flex'}} className="single-items">
                                <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum1.png" alt=""/></a>
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum2.png" alt=""/></a>
                                </div>
                                <div className="lower-content">
                                    <h4><a href="#">{content.subtitle}</a></h4>
                                    <p className='text'>
                                        {content.text}
                                    </p>
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
                                <div style={{display: 'flex'}}>
                                <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum5.png" alt=""/></a>
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum6.png" alt=""/></a>
                                </div>
                                </div>
                            </div>


                            <div style={{display: 'flex'}} className="single-items">
                                <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum8.png" alt=""/></a>
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum7.png" alt=""/></a>
                                </div>                                <div className="lower-content">
                                    <h4><a href="#">{content.subtitle3}</a></h4>
                                    <p className='text'>
                                        {content.text3}</p>
                                    <h5 className='title'>{content.volume3}</h5>
                                </div>
                            </div>


                            <div style={{display: 'flex'}} className="single-items-2">
                                <div className="lower-content">
                                    <h4><a href="#">{content.subtitle4}</a></h4>
                                    <p className='text'>
                                        {content.text4}</p>
                                    <h5 className='title'>{content.volume4}</h5>
                                </div>
                                <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum3.png" alt=""/></a>
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum4.png" alt=""/></a>
                                </div>
                            </div>
                </div>
            </section>
        </>
    );
};

export default RumPage;