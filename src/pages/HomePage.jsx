import React, {useEffect, useState} from "react";
import Carousel from 'nuka-carousel';




export const HomePage = () => {
    const [data, setData] = useState({});

    useEffect(() => {}, []);



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

            <section className="news-section">
                <div className="container my-container">
                    <div className="row" style={{marginBottom: '10%', display: 'flex',
                        width: '100%'}}>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="/rum"><figure><img src="images/news/1.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a href="/rum">РОМ</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="/whisky"><figure><img src="images/news/2.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a href="/whisky">ВИСКИ</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="/gin"><figure><img src="images/news/3.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a style={{paddingLeft: '7px'}} href="/gin">ДЖИН</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="/vodka"><figure><img src="images/news/4.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a style={{paddingLeft: '15px'}} href="/vodka">ВОДКА</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};