import React from 'react';

const RumPage = () => {
    return (
        <>
            <div className="container my-container">
                <div className='page-title'><h1>Ром</h1>
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
                                    <h4><a href="#">OLD MONK выдержка 7 лет 42,8%</a></h4>
                                    <p className='text'>
                                        Самый популярный индийский ром в мире. Награжден золотой медалью Monde World Selections (1982 г.)
                                        Отличается ярким вкусом и ароматом, имеет оттенки карамели, кофе со сливками, ванильного бисквита, сухофруктов, ягодного джема, восточных специй, цедры, шоколада и черной патоки.
                                    </p>
                                    <h5 className='title'>Объем: 0,375 л, 0,75 л, 1,0 л</h5>
                                </div>
                            </div>

                            <div style={{display: 'flex'}} className="single-items-2">
                                <div className="lower-content">
                                    <h4><a href="#">OLD MONK White 42,8%</a></h4>
                                    <p className='text'>
                                        Белый ром не вызревает в дубовой бочке и является самым лёгким из всей серии Old Monk.
                                        Особенность напитка заключается в глубоком и выразительном вкусе, аромате ванили, цитрусов и нежных кокосовых орехов.
                                        Такое сочетание делает ром мягким, свежим и пряным в силу своего происхождения.
                                        Идеально подходит для приготовления коктейлей.</p>
                                    <h5 className='title'>Объем: 0,375 л, 0,75 л</h5>
                                </div>
                                <div style={{display: 'flex'}}>
                                {/*<div style={{display: 'flex', justifyContent: "center"}} className="img-box">*/}
                                {/*    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum3.png" alt=""/></a>*/}
                                {/*    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum4.png" alt=""/></a>*/}
                                {/*</div>*/}
                                <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum5.png" alt=""/></a>
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum6.png" alt=""/></a>
                                </div>
                                </div>
                            </div>


                            <div style={{display: 'flex'}} className="single-items">
                                <div style={{display: 'flex', justifyContent: "center"}} className="img-box">
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum7.png" alt=""/></a>
                                    <a href="#"><img style={{width: '150px'}} src="images/catalog/rum8.png" alt=""/></a>
                                </div>                                <div className="lower-content">
                                    <h4><a href="#">OLD MONK The Legend 1,0 выдержка 21 год 42,8%</a></h4>
                                    <p className='text'>
                                        Ром в оригинальной бутылке в форме улыбающегося монаха.
                                        Выдерживается 21 год в дубовых бочках, имеет цвет гречишного мёда.
                                        Доставляется из Индии в транспортной упаковке. В аромате ощущаются карамель и спелые фрукты.
                                        Вкус мягкий, сочетает в себе карамель, банан, корицу, апельсин и гвоздику.
                                        Имеет послевкусие чёрного чая, инжира и кураги.</p>
                                    <h5 className='title'>Объем: 1,0 л</h5>
                                </div>
                            </div>


                            <div style={{display: 'flex'}} className="single-items-2">
                                <div className="lower-content">
                                    <h4><a href="#">OLD MONK Supreme 0,75 выдержка 12 лет 42,8%</a></h4>
                                    <p className='text'>
                                        Ром двадцатилетней выдержки в условиях влажного тропического климата Южной Азии, доставляет из Индии в транспортной упаковке.
                                        Имеет мягкий сухой вкус соттенками шоколада, чёрного перца, ванильного бисквита, патоки и сливок.
                                        В аромате слышны нотки дуба, ванильного пирога, корицы и других пряностей.</p>
                                    <h5 className='title'>Объем: 0,75 л</h5>
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