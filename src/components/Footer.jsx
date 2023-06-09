import React from 'react';


const Footer = (props) => {

    let content = {
        English: {
            mains: {
                contact: 'Contact Us',
                links: 'Links',
                socialmedia: 'Social Media'
            },
            contact: 'Volgogradsky avenue, 42, building 23, Moscow, Russia',
            title: {
                home: 'Home',
                catalog: 'Catalog',
                about: 'About',
                partners: 'Partners Info',
                news: 'News',
                contact: 'Contact Us',
                disclaimer: 'Disclaimer',
                policy: 'Policy'
            },
        },
        Russian: {
            mains: {
                contact: 'Контакты',
                links: 'Ссылки',
                socialmedia: 'Соцсети'
            },
            contact: 'Россия, г. Москва, Волгоградский проспект, д. 42, корп. 23',
            title: {
                home: 'Главная',
                catalog: 'Каталог',
                about: 'О Компании',
                partners: 'Партнерам',
                news: 'Новости',
                contact: 'Контакты',
                disclaimer: 'Дисклеймер',
                policy: 'Политика'
            },
        }
    };

    props.language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    return (
        <>
            <footer className="main-footer-area">
                <div className="main-footer">
                    <div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className='container-2'>
                        <div className="row" style={{display: "flex"}}>
                            <div className="col-md-4 col-sm-6 col-xs-12 footer-column">
                                <div className="about-company footer-widget">
                                    <div className="footer-title"><h3>{content.mains.contact}</h3></div>
                                    <div className="text">
                                        <p>{content.contact}<br/>
                                            <br/>Тел.: 8 (495) 640 - 41 – 66<br/>
                                            info@dvkwine.ru
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 footer-column" style={{paddingLeft: '10%'}}>
                                <div className="link-widget footer-widget">
                                    <div style={{paddingLeft: '18px'}} className="footer-title footer-title-2"><h3>{content.mains.links}</h3></div>
                                    <ul className="list">
                                        <li><a href="/">{content.title.home}</a></li>
                                        <li><a href="/rum">{content.title.catalog}</a></li>
                                        <li><a href="/about">{content.title.about}</a></li>
                                        <li><a href="/partners">{content.title.partners}</a></li>
                                        <li><a href="/news">{content.title.news}</a></li>
                                        <li><a href="/contact">{content.title.contact}</a></li>
                                        <li><a href="#">{content.title.disclaimer}</a></li>
                                        <li><a href="#">{content.title.policy}</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12 footer-column" style={{paddingLeft: '15%'}}>
                                <div className="footer-title footer-title-2"><h3>{content.mains.socialmedia}</h3></div>
                                <ul className="footer-widget-2">
                                    <li><a href="#">
                                        <svg className='fa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg className='fa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg className='fa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg className='fa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg className='fa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z"/></svg>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;