import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
    Box,
} from "@mui/material";

const Header = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const showHiddenSubMenu = () => {
        if(isVisible) {
            return 'block';
        } else {
            return 'none';
        }
    }
    const showHiddenSubMenu2 = () => {
        if(isVisible2) {
            return 'block';
        } else {
            return 'none';
        }
    }
    const showHiddenSubMenu3 = () => {
        if(isVisible3) {
            return 'block';
        } else {
            return 'none';
        }
    }

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <ul className="mobile-menu clearfix">
                <li className="current"><a href="index.html">Home</a></li>
                <li className="dropdown"><a href="#">About Us</a>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="error.html">Error Page</a></li>
                    </ul>
                </li>
                <li><a href="service.html">Services</a></li>
                <li className="dropdown"><a href="#">Case Studies</a>
                    <ul>
                        <li><a href="case-studies.html">Case Studies</a></li>
                        <li><a href="case-details.html">Case Details</a></li>
                    </ul>
                </li>
                <li className="dropdown"><a href="#">Blog</a>
                    <ul>
                        <li><a href="blog.html">News Blog</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <header className="main-header">
            <div className="theme_menu sticky">
                <div className="container">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="logo-box">
                                    <figure><img style={{height: '50px', width: '50px'}} src="images/logo Mohan.png" alt="" /></figure>
                                    <figure><img style={{height: '50px', width: '50px'}} src="images/logo Priam.jpg" alt="" /></figure>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="menu-area">
                                <nav className="main-menu">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                                data-target=".navbar-collapse">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix" style={{paddingLeft: '30px'}}>
                                            <li><a style={{textDecoration: "none"}} href="/">Главная</a></li>
                                            <li onMouseEnter={() => setIsVisible(!isVisible)} onMouseLeave={() => setIsVisible(!isVisible)} className="dropdown"><a style={{textDecoration: "none"}} href="/rum">Каталог</a>
                                                <ul style={{display: `${showHiddenSubMenu()}`}} className="submenu">
                                                    <li><a style={{textDecoration: "none"}} href="/rum">Ром</a></li>
                                                    <li><a style={{textDecoration: "none"}} href="/whisky">Виски</a></li>
                                                    <li><a style={{textDecoration: "none"}} href="/jin">Джин</a></li>
                                                    <li><a style={{textDecoration: "none"}} href="/vodka">Водка</a></li>
                                                    <li><a style={{textDecoration: "none"}} href="/priambeverages">Напитки Priam Beverages</a></li>
                                                </ul>
                                            </li>
                                            <li><a style={{textDecoration: "none"}} href="/about">О компании</a></li>
                                            <li onMouseEnter={() => setIsVisible2(!isVisible2)} onMouseLeave={() => setIsVisible2(!isVisible2)} className="dropdown"><a style={{textDecoration: "none"}} href="/partners">Партнерам</a>
                                                {/*<ul style={{display: `${showHiddenSubMenu2()}`}} className="submenu">*/}
                                                {/*    <li><a style={{textDecoration: "none"}} href="/caseStudies">Case Studies</a></li>*/}
                                                {/*    <li><a style={{textDecoration: "none"}} href="/caseDetails">Case Details</a></li>*/}
                                                {/*</ul>*/}
                                            </li>
                                            <li onMouseEnter={() => setIsVisible3(!isVisible3)} onMouseLeave={() => setIsVisible3(!isVisible3)} className="dropdown"><a style={{textDecoration: "none"}} href="/news">Новости</a>
                                                {/*<ul style={{display: `${showHiddenSubMenu3()}`}} className="submenu">*/}
                                                {/*    <li><a style={{textDecoration: "none"}} href="/blog">News Blog</a></li>*/}
                                                {/*    <li><a style={{textDecoration: "none"}} href="/blogDetails">Blog Details</a></li>*/}
                                                {/*</ul>*/}
                                            </li>
                                            <li><a style={{textDecoration: "none"}} href="/contact">Контакты</a></li>
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