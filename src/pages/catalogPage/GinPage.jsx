import React from 'react';

const GinPage = () => {
    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>Джин</h1>
                    <h2>BIG BEN LONDON DRY GIN</h2>
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
                            <h4><a href="#">BIG BEN LONDON DRY GIN 42,8%</a></h4>
                            <p className='text'>
                                Сухой джин из Индии. Обладает ярким и сбалансированным вкусом. В аромате отчетливо улавливаются ноты можжевельника, произрастающего в Гималаях, цитрусовые, кориандр и анис. Несмотря на легкую сладость, Big Ben London Dry Gin остается сухим и гармоничным.
                                Рекомендуется у потреблять в чистом виде или в составе коктейлей.
                                В качестве закуски к джину отлично подойдет маринованный лук и оливки.</p>
                            <h5 className='title'>Объем: 0,375 л, 0,75 л</h5>
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
                                Сухой джин премиального класса из Индии. Имеет неповторимый мягкий вкус, изготавливается по многолетнему традиционному рецепту на старейшей винокурне в Гималаях. В составе чистая вода, ягоды можжевельника и лучшие растительные компоненты. Гималайский можжевельник обладает не только приятным, чуть горьковатым вкусом, но и массой полезных свойств.
                                Рекомендуется употреблять в чистом виде или в составе коктейлей.
                                В качестве закуски к джину отлично подойдет лимон, маринованный лук и оливки.</p>
                            <h5 className='title'>Объем: 0,75 л</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky1.png" alt=""/></a>
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/whisky2.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default GinPage;