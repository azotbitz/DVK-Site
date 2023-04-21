import React, {useContext} from 'react';
import {LanguageContext} from "../components/App";

const NewsPage = () => {

    const language = useContext(LanguageContext);

    let content = {
        English: {
            title: 'Market news',
            subtitle: 'What are the ingredients used for the rum “Old Monk” production?',
            text: 'Indian rum is known worldwide for its’ complicated aroma and outstanding taste. “Old Monk”is being produced since 1954, thereby for the last 70 years occupies the top positions at the alcohol market.\n' +
                'The specific production technology provides for the blending of distillates of seven and twelve years of ageing. Traditional production technology and the beverage ageing in oak barrels for seven years help to take on more mild taste and rich flavor of the beverage. Along with the distillate only natural ingredients such as spices, fruit and herbs are used in the production process.\n' +
                'Proprietary authentic beverage always leaves wakes on the glass due to the availability of the specific viscidity typical to the sugar-cane.\n' +
                '\n' +
                'In fact, the production process is developed around the sugar-cane: starting from its’ harvesting in the high mountains, further on its’ purification and grinding. The next step includes raw material pressing and extraction, then cane juice filtration and crystallization, and finally filtrate fermentation. During the wort fermentation and distillation, the beverage content is enriched with natural ingredients described above. Final and the most important stage of the drink production involves distillate ageing in oak barrels, blending, bottles filling and capping.',
            subtitle2: 'The best whiskey from India',
            text2: 'For a long time the production of the high quality whiskey was generally related to Scotland and Ireland till the moment, when India occupied top level positions in the world alcohol market.\n' +
                'In the year 2011 the rating list of the world best-sellers of alcohol drinks fixed that seven of ten beverages in the market were of Indian origin. More than ten years later Indian whiskey remains in great demand in the world. Our whiskey is produced of exclusively qualitative raw materials in ultimate favorable conditions. Indian hot climate contributes to much sooner ageing of our whiskey, so this is the reason of the impossibility to find Indian whiskey older than 6 years in the market.\n' +
                '\n' +
                'JSC “DVK” assortment is presented by the premium whiskey Solan Number One and market novelty – whiskey Plim developed by our company founder. Whiskey Plim carries the light aroma of the fruit tart and caramel pudding.\n' +
                'Thanks to the traditional Indian technology and Goa subequatorial climate conditions the taste of the beverage is soft and full-bodied at the same time.\n' +
                'The product is ageing in the best, specially and strictly selected bourbon barrels, strictly undergoes chill-filtering and is free of any colorants.',
            subtitle3: 'Market novelty! Rum Rahi.',
            text3: 'JSC «DVK” goods assortment is replenished by the rum produced according to the best production principles of the country of origin – India. Rum Rahi has got rich, full bodied taste with prominent flavor of caramel, dried fruits, cream and honey. The taste has a distinct sensation of the warm notes of eastern spices, harsh citrus and dark chocolate. \n' +
                'Rum has deep golden color with thick texture. The essence of the beverage is the sugar-cane produced in the high mountain regions of the country. The content of the beverage is pure natural, free of food essences or artificial additives. The strength of the drink is practically ideal, as soon as it is hardly noticeable.',
            subtitle4: 'Bulbash - premium vodka from Belarus.',
            text4: 'Belarus is a land of numerous lakes and vast forests, river dales and marshes covered by thick carpets of peat-moss. This country is well known for its’ well developed history and traditions of alcohol production. The top brand of the premium alcohol segment is vodka “Bulbash”. The products are being produced at the winery “Dionis” launched in 2003 at the suburb of the Belorussion town Zaslavl. The company “Bulbash” adheres to and practices well formulated and unfailing principles:',
            text5: 'The final product is made of 100% of natural components: premium level spirits, the most clear deep-well water, several types of cereals, malt, herbs, berries and fruit infusions, nuts and spices.' +
                'The best vodka and various liqueurs of the Belorussian brand are well presented in our assortment list.',
            li: '- usage of natural components;',
            li2: '- craft method is applied;',
            li3: '- strict and constant quality control;',
            li4: '- staff of professionals and specialists;',
            li5: '- up-to-date equipment;',
            li6: '- exclusive mix formula;'
        },
        Russian: {
            title: 'Новости',
            subtitle: '«Из чего изготавливается Old Monk?»',
            text: 'Индийский ром известен миру своим сложным ароматом и ярким вкусом. Old Monk выпускается с 1954 года, и спустя почти 70 лет занимает ведущие позиции на рынке среди алкогольной продукции.\n' +
                '                            Особенность производства заключается в купажировании дистиллятов семилетней и двенадцатилетней выдержки. Традиционная технология создания и семилетняя выдержка в дубовых бочках позволяют напитку приобрести более мягкий вкус и насыщенный аромат.\n' +
                '                            Помимо дистиллята, в процессе изготовления используются исключительно натуральные компоненты – пряности, фрукты и травы.\n' +
                '                            Оригинальный фирменный напиток всегда оставляет следы на бокале, поскольку имеет характерную для сахарного тростника тягучесть.\n' +
                '                            С него и начинается изготовление, а именно – со сбора высокогорного сахарного тростника, его очистки и измельчения. Затем происходят отжим сырья и последующая фильтрация тростникового сока, после - кристаллизация сока и сбраживание фильтрата.\n' +
                '                            Во время ферментации браги и ее перегонки в состав вводятся те самые натуральные компоненты, о которых мы писали выше.\n' +
                '                            Финальными и самыми важными этапами являются выдержка дистиллята в дубовых бочках, купажирование, розлив по бутылкам и укупоривание.',
            subtitle2: 'Лучший виски из Индии',
            text2: 'Долгое время производство качественного виски у многих ассоциировалось с Шотландией и Ирландией, пока Индия не заняла ведущие позиции на рынке.\n' +
                '                            В 2011 году в рейтинге самых продаваемых в мире напитков, 7 из 10 оказались от индийских производителей. Спустя более десяти лет, индийский виски по-прежнему пользуется высоким спросом. Он изготавливается из исключительно качественного сырья, и в максимально благоприятных условиях.\n' +
                '                            В жарком климате вызревание виски проходит гораздо быстрее, именно по этой причине невозможно встретить индийский виски старше 6 лет.\n' +
                '                            В ассортименте ООО «ДВК» представлен премиальный виски Solan Number One, а также новинка - виски Plim, созданный учредителем нашей компании. Plim обладает тонким ароматом фруктового пирога и карамельного пудинга.\n' +
                '                            Благодаря традиционной индийской технологии и субэкваториальному климату Гоа получился нежный, и в то же время насыщенный вкус.\n' +
                '                            Напиток выдержан в лучших, специально отобранных бочках из-под бурбона, проходит обязательную холодную фильтрацию и не содержит красителей.',
            subtitle3: 'Новинка! Ром Rahi.',
            text3: 'В ассортименте ООО «ДВК» появился ром, изготавливаемый в лучших традициях своей родины – Индии. Rahi имеет яркий, насыщенный вкус и обладает выраженным ароматом карамели, сухофруктов, сливок и мёда. Во вкусе отчетливо ощущаются ноты восточных пряностей, терпких цитрусовых и темного шоколада.\n' +
                '                            Ром глубокого золотистого цвета с густой консистенцией. В основе – сахарный тростник, добытый из высокогорных районов страны. Отличается натуральным составом, не содержит эссенций и синтетических добавок. Идеален по крепости, т.к. она практически не ощущается.',
            subtitle4: 'Бульбашъ: премиум-водка из Беларуси.',
            text4: 'Беларусь – страна озёр и лесов, речных долин и проросших густым мхом болот. Имеет богатейшие традиции производства алкогольных напитков.\n' +
                '                            Ведущим брендом по производству премиального алкоголя является «Бульбашъ». Напитки производятся на заводе виноградных вин "Дионис", который был открыт в 2003 году и располагается в пригороде белорусского Заславля. «Бульбашъ» придерживается четких и неизменных правил:',
            text5: 'Продукция состоит из 100% натуральных ингредиентов: спирты премиального класса, чистейшая артезианская вода, несколько видов злаков, солода, трав, настоев ягод и фруктов, орехов и специй.\\n\' +\n' +
                '                                                        В нашем ассортименте представлена лучшая водка и настойки белорусского бренда.',
            li: '- используются только натуральные компоненты;',
            li2: '- применяется крафтовый подход;',
            li3: '- проводится строгий контроль качества;',
            li4: '- среди персонала исключительно профессионалы;',
            li5: '- в эксплуатации современное оборудование;',
            li6: '- рецепты эксклюзивны;'

        }
    };

    language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    return (
        <>
            <div className="container my-container">
            <div className='page-title'><h1>{content.title}</h1></div>
            </div>
            <section className="feature-section feature-style-one centred">
                <div className="container my-container">
                    <div className="top-content">
                        <div className="title">{content.subtitle}</div>
                        <div className="text">
                            {content.text}
                        </div>
                        <div className="title">{content.subtitle2}</div>
                        <div className="text">
                            {content.text2}
                        </div>
                        <div className="title">{content.subtitle3}</div>
                        <div className="text">
                            {content.text3}
                        </div>
                        <div className="title">{content.subtitle4}</div>
                        <div className="text">
                            {content.text4}
                            <ul>
                                                            <li className="li">{content.li}</li>
                                                            <li className="li">{content.li2}</li>
                                                            <li className="li">{content.li3}</li>
                                                            <li className="li">{content.li4}</li>
                                                            <li className="li">{content.li5}</li>
                                                            <li className="li">{content.li6}</li>
                            </ul>
                            {content.text5}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsPage;