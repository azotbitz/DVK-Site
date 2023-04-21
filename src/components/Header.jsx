import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, Drawer, List, ListItem, ListItemIcon, Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const Header = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isEnglish, setIsEnglish] = useState(false);

    let content = {
        English: {
            title: {
                home: 'Home',
                catalog: 'Catalog',
                rum: 'Rum',
                whiskey: 'Whiskey',
                gin: 'Gin',
                vodka: 'Vodka',
                priam: "Drinks of Priam Beverages",
                about: 'About',
                partners: 'Partners Info',
                news: 'News',
                contact: 'Contact Us'
            },
        },
        Russian: {
            title: {
                home: 'Главная',
                catalog: 'Каталог',
                rum: 'Ром',
                whiskey: 'Виски',
                gin: 'Джин',
                vodka: 'Водка',
                priam: "Напитки Priam Beverages",
                about: 'О Компании',
                partners: 'Партнерам',
                news: 'Новости',
                contact: 'Контакты'
            },
        }
    };

    props.language === "Russian"
        ? (content = content.Russian)
        : (content = content.English);

    const drawer = () => {
        return (
<Box role={'presentation'}>
    <Drawer
        variant={'temporary'}
        anchor={'right'}
        open={mobileOpen}
        onClose={() => setMobileOpen(!mobileOpen)}
        PaperProps={{
            sx: {
                backgroundColor: "#2c2e2d",
                width: '40%',
                overflowX: 'hidden'
            },
        }}
    >
        <List>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem onClick={() => window.scrollTo(0, 0)}
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/"
                    >
                        {content.title.home}
                    </ListItem>
                </ListItemIcon>
            </ListItem>
            <ListItem button >
                <Accordion sx={{backgroundColor: '#2c2e2d', boxDecorationBreak: 'inherit', boxShadow: 'inherit'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{color: 'rgb(224 224 224)'}}
                    >
                        <Typography sx={{color: 'rgb(224 224 224)', fontWeight: 400, fontFamily: '"Oswald", Arial, Tahoma, sansSerif', fontSize: '17px', lineHeight: '0px'}}>{content.title.catalog}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{paddingLeft: '0px'}}>
                        <List>
                            <ListItem button onClick={() => setMobileOpen(false)}
                                >
                                <ListItemIcon>
                                    <ListItem
                                        onClick={() => window.scrollTo(0, 0)}
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/rum"
                                    >
                                        {content.title.rum}
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        onClick={() => window.scrollTo(0, 0)}
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/whiskey"
                                    >
                                        {content.title.whiskey}
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        onClick={() => window.scrollTo(0, 0)}
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/gin"
                                    >
                                        {content.title.gin}
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        onClick={() => window.scrollTo(0, 0)}
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/vodka"
                                    >
                                        {content.title.vodka}
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        onClick={() => window.scrollTo(0, 0)}
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                            width: 'min-content'
                                        }}
                                        to="/priambeverages"
                                    >
                                        {content.title.priam}
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </ListItem>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem
                        onClick={() => window.scrollTo(0, 0)}
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/about"
                    >
                        {content.title.about}
                    </ListItem>
                </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem
                        onClick={() => window.scrollTo(0, 0)}
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/partners"
                    >
                        {content.title.partners}
                    </ListItem>
                </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem
                        onClick={() => window.scrollTo(0, 0)}
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/news"
                    >
                        {content.title.news}
                    </ListItem>
                </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem
                        onClick={() => window.scrollTo(0, 0)}
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/contact"
                    >
                        {content.title.contact}
                    </ListItem>
                </ListItemIcon>
            </ListItem>
        </List>
    </Drawer>
</Box>


        )
    }
    const showHiddenSubMenu = () => {
        if(isVisible) {
            return 'block';
        } else {
            return 'none';
        }
    }


    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };




    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <>
            <header className="main-header sticky">
            <div className="theme_menu">
                <div className="container">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="logo-box">
                                    <figure><img style={{height: '50px', width: '50px'}} src="images/logo Mohan.png" alt="" /></figure>
                                    <figure><img style={{height: '50px', width: '50px'}} src="images/logo Priam.jpg" alt="" /></figure>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="menu-area" style={{marginTop: '10px'}}>
                                <nav className="main-menu">
                                    <div className="navbar-header">
                                        {mobileOpen ? drawer() : <button onClick={handleDrawerToggle} type="button" className="navbar-toggle" data-toggle="collapse"
                                                                       data-target=".navbar-collapse">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>}

                                    </div>
                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li><a style={{textDecoration: "none"}} href="/">{content.title.home}</a></li>
                                            <li onMouseEnter={() => setIsVisible(!isVisible)} onMouseLeave={() => setIsVisible(!isVisible)} className="dropdown"><a style={{textDecoration: "none"}} href="/rum">{content.title.catalog}</a>
                                                <ul style={{display: `${showHiddenSubMenu()}`}} className="submenu">
                                                    <li style={{height: '43px', backgroundColor: 'white'}}>  </li>
                                                    <li><a style={{textDecoration: "none"}} href="/rum">{content.title.rum}</a></li>
                                                    <li><a style={{textDecoration: "none"}} href="/whiskey">{content.title.whiskey}</a></li>
                                                    <li><a style={{textDecoration: "none"}} href="/gin">{content.title.gin}</a></li>
                                                    <li><a style={{textDecoration: "none"}} href="/vodka">{content.title.vodka}</a></li>
                                                    <li><a style={{textDecoration: "none"}} href="/priambeverages">{content.title.priam}</a></li>
                                                </ul>
                                            </li>
                                            <li><a style={{textDecoration: "none"}} href="/about">{content.title.about}</a></li>
                                            <li onMouseEnter={() => setIsVisible2(!isVisible2)} onMouseLeave={() => setIsVisible2(!isVisible2)} className="dropdown"><a style={{textDecoration: "none"}} href="/partners">{content.title.partners}</a>
                                            </li>
                                            <li onMouseEnter={() => setIsVisible3(!isVisible3)} onMouseLeave={() => setIsVisible3(!isVisible3)} className="dropdown"><a style={{textDecoration: "none"}} href="/news">{content.title.news}</a>
                                            </li>
                                            <li><a style={{textDecoration: "none"}} href="/contact">{content.title.contact}</a></li>
                                            <li style={{paddingLeft: '1%'}}>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;