import React, {useContext} from 'react';
import {LanguageContext} from "../../components/App";

const PriamBeveragesPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'Drinks of PRIAM BEVERAGES',
            subtitle: 'Rum RAHI',
            text: 'Is noted for a full-body taste with prominent caramel aroma, dried fruits, cream and honey. Moreover the flavour is clearly enriched with eastern spices notes, tart citrus and dark chocolate. When compared to the Caribbean and South American products, Indian rum does not undergo an intensive filtration during its production, thus more taste tinges are preserved in the final product.',
            volume: 'Volume: 0.75 ml',
            subtitle2: 'PJ Whiskey',
            text2: 'Has got a rich dark-honey color with a light aroma of fruit cake and caramel pudding. Warm woody-smoky tinges are evidently remarkable in its taste, as well as the flavor of custard cream, vanilla, dried fruits, chocolate and spices notes.',
            volume2: 'Volume: 0.75 ml',
            subtitle3: 'PLIM Whiskey',
            text3: 'One of the composition ingredients of this whiskey is a special brand of barley planted in Himalayan valleys. The beverage has got its specific golden colour and the unique taste. The taste is pervaded with sweetish notes of sugar-cane, smoky spices and thick-textured honey. The well-balanced taste composition finishes with a soft favour of the coconuts grown-up on the sunny Goa beaches.',
            volume3: 'Volume: 0.75  ml'
        },
        Russian: {
            title: 'Напитки PRIAM BEVERAGES',
            subtitle: 'Ром RAHI ',
            text: 'Имеет яркий, насыщенный вкус и обладает выраженным ароматом карамели, сухофруктов, сливок и мёда. Во вкусе отчетливо ощущаются ноты восточных пряностей, терпких цитрусовых и темного шоколада. По сравнению с карибским и южноамериканским, индийский ром не проходит агрессивную фильтрацию, за счет этого остается больше вкусовых оттенков.',
            volume: 'Объем: 0,75 мл',
            subtitle2: 'Виски PJ',
            text2: 'Имеет глубокий тёмно-медовый цвет, обладает тонким ароматом фруктового пирога и карамельного пудинга. Во вкусе читаются теплые древесно-дымные оттенки, заварной крем, ваниль, сухофрукты, шоколад и специи. ',
            volume2: 'Объем: 0,75 мл',
            subtitle3: 'Виски PLIM',
            text3: 'При изготовлении используются особые сорта ячменя, выращенные в долинах Гималаев. Виски имеет характерный золотистый цвет и неповторимый вкус. Во вкусе чувствуются сладковатые ноты тростникового сахара, дымных специй и густого мёда. Сбалансированная композиция финиширует нежным кокосом, произрастающим на берегах солнечного Гоа.',
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
                    <h2>{content.subtitle}</h2>
                </div>
            </div>

            <section className="news-section">
                <div className="container my-container" style={{display: 'block'}}>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/priam/1.png" alt=""/></a>
                        </div>
                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle}</a></h4>
                            <p className='text'>
                                {content.text}</p>
                            <h5 className='title'>{content.volume}</h5>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container my-container">
                <div style={{padding: '0px'}} className='page-title'>
                    <h2>{content.subtitle2}</h2>
                </div>
            </div>

            <section className="news-section">
                <div className="container my-container" style={{display: 'block'}}>

                    <div style={{display: 'flex'}} className="single-items-2">

                        <div className="lower-content">
                            <h4><a href="#">{content.subtitle2}</a></h4>
                            <p className='text'>
                                {content.text2}</p>
                            <h5 className='title'>{content.volume2}</h5>
                        </div>
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/priam/2.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container my-container">
                <div style={{padding: '0px'}} className='page-title'>
                    <h2>{content.subtitle3}</h2>
                </div>
            </div>

            <section className="news-section">
                <div className="container my-container" style={{display: 'block'}}>

                    <div style={{display: 'flex'}} className="single-items">
                        <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                            <a href="#"><img style={{width: '150px'}} src="images/catalog/priam/3.png" alt=""/></a>
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

export default PriamBeveragesPage;