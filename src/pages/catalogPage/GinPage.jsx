import React, {useContext} from 'react';
import {LanguageContext} from "../../components/App";

const GinPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'Gin',
            text: 'Dry gin from India. With distinct and well-balanced flavor. Among the drink aroma components Himalayan juniper notes could be clearly traced along with citrus, coriander and anise seeds aromas. Despite the beverage slight sweetness Big Ben London Dry Gin remains dry and well-balanced. Recommended to be consumed straight, sip neat or in cocktails. Pickled onions and olives to be served as appetizers to this gin.',
            volume: 'Volume: 0.375 ml, 0.75 ml',
            text2: 'Dry premium gin from India. Our gin has a unique soft taste and is produced according to the long-lasting traditional formula at the oldest country winery in Himalaya. Only pure water, juniper berries and the best vegetative components are used in the beverage composition. Himalayan juniper is famous not only for its pleasant, slightly bitter taste, but also for its various health benefits. Recommended to be consumed straight, sip neat or in cocktails. Usually lemon, pickled onions and olives are served as appetizers for our gin. ',
            volume2: 'Volume: 0.75 ml'
        },
        Russian: {
            title: 'Джин',
            text: 'Сухой джин из Индии. Обладает ярким и сбалансированным вкусом. В аромате отчетливо улавливаются ноты можжевельника, произрастающего в Гималаях, цитрусовые, кориандр и анис. Несмотря на легкую сладость, Big Ben London Dry Gin остается сухим и гармоничным. Рекомендуется у потреблять в чистом виде или в составе коктейлей. В качестве закуски к джину отлично подойдет маринованный лук и оливки.',
            volume: 'Объем: 0,375 мл, 0,75 мл',
            text2: 'Сухой джин премиального класса из Индии. Имеет неповторимый мягкий вкус, изготавливается по многолетнему традиционному рецепту на старейшей винокурне в Гималаях. В составе чистая вода, ягоды можжевельника и лучшие растительные компоненты. Гималайский можжевельник обладает не только приятным, чуть горьковатым вкусом, но и массой полезных свойств. Рекомендуется употреблять в чистом виде или в составе коктейлей. В качестве закуски к джину отлично подойдет лимон, маринованный лук и оливки.',
            volume2: 'Объем: 0,75 мл'
        }
    };

    language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);


    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>{content.title}</h1>
                    <h2>BIG BEN LONDON DRY GIN</h2>
                </div>
            </div>


            <section className="news-section">
                <div className="container my-container" style={{display: 'block'}}>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/gin/1.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">BIG BEN LONDON DRY GIN 42,8%</a></h4>
                            <p className='text'>
                                {content.text}</p>
                            <h5 className='title'>{content.volume}</h5>
                        </div>
                    </div>
                </div>
            </section>



            <div className="container my-container">
                <div className='page-title' style={{padding: '0px'}}>
                    <h2>JAMUN THE HIMALYAN JUNIPER DRY GIN</h2>
                </div>
            </div>

            <section className="news-section">
                <div className="container my-container" style={{display: 'block'}}>

                    <div style={{display: 'flex'}} className="single-items-2">
                        <div className="lower-content">
                            <h4><a href="#">JAMUN THE HIMALYAN JUNIPER DRY GIN 42,8%</a></h4>
                            <p className='text'>
                                {content.text2}</p>
                            <h5 className='title'>{content.volume2}</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/gin/2.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default GinPage;