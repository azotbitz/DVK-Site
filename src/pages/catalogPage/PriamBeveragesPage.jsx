import React from 'react';

const PriamBeveragesPage = () => {
    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>Напитки PRIAM BEVERAGES</h1>
                    <h2>Ром RAHI</h2>
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
                            <h4><a href="#">РОМ RAHI 40%</a></h4>
                            <p className='text'>
                                Имеет яркий, насыщенный вкус и обладает выраженным ароматом карамели, сухофруктов, сливок и мёда. Во вкусе отчетливо ощущаются ноты восточных пряностей, терпких цитрусовых и темного шоколада. По сравнению с карибским и южноамериканским, индийский ром не проходит агрессивную фильтрацию, за счет этого остается больше вкусовых оттенков.</p>
                            <h5 className='title'>Объем: 0,75 л</h5>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container my-container">
                <div style={{padding: '0px'}} className='page-title'>
                    <h2>Виски PJ</h2>
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
                            <h4><a href="#">ВИСКИ PJ 40%</a></h4>
                            <p className='text'>
                                Имеет глубокий тёмно-медовый цвет, обладает тонким ароматом фруктового пирога и карамельного пудинга. Во вкусе читаются теплые древесно-дымные оттенки, заварной крем, ваниль, сухофрукты, шоколад и специи. </p>
                            <h5 className='title'>Объем: 0,75 л</h5>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container my-container">
                <div style={{padding: '0px'}} className='page-title'>
                    <h2>Виски PLIM</h2>
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
                            <h4><a href="#">ВИСКИ PLIM 40%</a></h4>
                            <p className='text'>
                                При изготовлении используются особые сорта ячменя, выращенные в долинах Гималаев. Виски имеет характерный золотистый цвет и неповторимый вкус.
                                Во вкусе чувствуются сладковатые ноты тростникового сахара, дымных специй и густого мёда. Сбалансированная композиция финиширует нежным кокосом, произрастающим на берегах солнечного Гоа.</p>
                            <h5 className='title'>Объем: 0,75 л</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PriamBeveragesPage;