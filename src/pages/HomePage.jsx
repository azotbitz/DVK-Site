import React, {useContext} from "react";
import Carousel from 'nuka-carousel';
import {LanguageContext} from "../components/App";




export const HomePage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'JSC “DVK” is the exclusive distributor in the territory of the Russian Federation.',
            text: 'The company was founded in 2015 to import various products from India. The product quality is our special target along with genuine respect to and high appreciation of the South Asia traditions. Our product assortment is represented by a considerable proposal of the high quality Indian alcohol. JSC “DVK” – is an exclusive distributor of the premium rum «Old Monk”*. OUR CUSTOMERS are: Magnit, Pyaterochka, Perekrestok, Metro, Victoria, Lenta, Okey, Globus, Diksi, Bristol and etc.',
            links: {
                rum: 'RUM',
                whiskey: 'WHISKEY',
                gin: 'GIN',
                vodka: 'VODKA'
            }
        },
        Russian: {
            title: 'ООО «ДВК» - эксклюзивный дистрибьютор на территории РФ.',
            text: 'Компания основана в 2015 году, специализируется на импорте продукции из Индии. Мы уделяем особое внимание качеству, уважаем и высоко ценим традиции Южной Азии. В ассортименте представлен большой выбор индийского высококлассного алкоголя. ООО «ДВК» - эксклюзивный поставщик премиального рома «Old Monk»*. НАШИ КЛИЕНТЫ: Магнит, Пятерочка, Перекрёсток, Metro, Виктория, Лента, Окей, Глобус, Дикси, Бристоль и др.',
            links: {
                rum: 'РОМ',
                whiskey: 'ВИСКИ',
                gin: 'ДЖИН',
                vodka: 'ВОДКА'
            }
        }
    };

    language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    return (
        <>

            <div className='banner'>
                <Carousel defaultControlsConfig={{nextButtonText: '→', prevButtonText: '←', nextButtonStyle:{marginTop: '-300%', backgroundColor: 'white', paddingBottom: '12px', color: 'black'}, prevButtonStyle:{marginTop: '-300%', backgroundColor: 'white', paddingBottom: '12px', color: 'black'} }} animation={"zoom"} wrapAround={true} autoplay={true} autoplayInterval={5000}>
                    <div className='slide-2'>
                    </div>
                    <div className='slide-3'>
                    </div>
                    <div className='slide-4'>
                    </div>
                    {/*<img src={'/images/slider/1.png'}/>*/}
                    {/*<img src={'/images/slider/2.png'}/>*/}
                    {/*<img src={'/images/slider/3.png'}/>*/}
                </Carousel>
            </div>


            <section className="feature-section feature-style-one centred">
                <div className="container my-container">
                    <div className="top-content" style={{width: '99%'}}>
                        <div className="title">{content.title}</div>
                        <div style={{paddingBottom: '0px'}} className="text">
                            {content.text}
                        </div>
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="container my-container my-container-2">
                    <div className="row" style={{display: 'flex',
                        width: '100%'}}>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://bristol.ru/"><figure><img src="images/partners/1.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://www.perekrestok.ru/"><figure><img src="images/partners/2.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://victoria-group.ru/"><figure><img src="images/partners/3.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://www.globus.ru/"><figure><img src="images/partners/4.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://dixy.ru/"><figure><img src="images/partners/5.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{display: 'flex',
                        width: '100%'}}>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://lenta.com/"><figure><img src="images/partners/6.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://magnit.ru/"><figure><img src="images/partners/7.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://online.metro-cc.ru//"><figure><img src="images/partners/8.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://www.okmarket.ru/"><figure><img src="images/partners/9.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column single-item-2">
                            <div className="single-item">
                                <div className="img-box"><a href="https://5ka.ru/"><figure><img src="images/partners/10.png" alt=""/></figure></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="container my-container">
                    <div className="row" style={{marginBottom: '10%', display: 'flex',
                        width: '100%'}}>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="/rum"><figure><img src="images/news/1.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a href="/rum">{content.links.rum}</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="/whiskey"><figure><img src="images/news/2.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a href="/whiskey">{content.links.whiskey}</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="/gin"><figure><img src="images/news/3.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a style={{paddingLeft: '7px'}} href="/gin">{content.links.gin}</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="/vodka"><figure><img src="images/news/4.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a style={{paddingLeft: '15px'}} href="/vodka">{content.links.vodka}</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};