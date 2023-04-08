import React, {useEffect, useState} from "react";
import Carousel from 'nuka-carousel';




export const HomePage = () => {
    const [data, setData] = useState({});

    useEffect(() => {}, []);



    return (
        <>

            <div className='banner'>
                <Carousel defaultControlsConfig={{nextButtonText: '→', prevButtonText: '←', nextButtonStyle:{backgroundColor: 'white', paddingBottom: '12px', color: 'black'}, prevButtonStyle:{backgroundColor: 'white', paddingBottom: '12px', color: 'black'} }} animation={"zoom"} wrapAround={true} autoplay={true} autoplayInterval={5000}>
                    <div className='slide-4'>
                    </div>
                    <div className='slide-2'>
                    </div>
                    <div className='slide-3'>
                    </div>
                    <div className='slide-1'>
                    </div>
                </Carousel>
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

            <section className="news-section">
                <div className="container my-container">
                    <div className="row" style={{marginBottom: '10%'}}>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="#"><figure><img src="images/news/1.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a href="#">РОМ</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="#"><figure><img src="images/news/2.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a href="#">ВИСКИ</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="#"><figure><img src="images/news/3.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a style={{paddingLeft: '7px'}} href="#">ДЖИН</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="#"><figure><img src="images/news/4.png" alt=""/></figure></a></div>
                                <div className="lower-content">
                                    <h4><a style={{paddingLeft: '15px'}} href="#">ВОДКА</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};