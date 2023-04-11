import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, Drawer, List, ListItem, ListItemIcon, Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const Header = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const drawer = () => {
        return (
<Box role={'presentation'}>
    <Drawer
        variant={'temporary'}
        anchor={'right'}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
            sx: {
                backgroundColor: "#2c2e2d",
                width: '33%',
            },
        }}
    >
        <List>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/"
                    >
                         Главная
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
                        <Typography sx={{color: 'rgb(224 224 224)', fontWeight: 400, fontFamily: '"Oswald", Arial, Tahoma, sansSerif', fontSize: '17px', lineHeight: '0px'}}>Каталог</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/rum"
                                    >
                                        Ром
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/whisky"
                                    >
                                        Виски
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/gin"
                                    >
                                        Джин
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/vodka"
                                    >
                                        Водка
                                    </ListItem>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button onClick={() => setMobileOpen(false)}>
                                <ListItemIcon>
                                    <ListItem
                                        component={Link}
                                        style={{
                                            textDecoration: "none",
                                            color: "#e0e0e0",
                                            fontWeight: 400,
                                        }}
                                        to="/priambeverages"
                                    >
                                        Напитки<br/>
                                        Priam Beverages
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
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/about"
                    >
                        О компании
                    </ListItem>
                </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/partners"
                    >
                         Партнерам
                    </ListItem>
                </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/news"
                    >
                        Новости
                    </ListItem>
                </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>
                    <ListItem
                        component={Link}
                        style={{
                            textDecoration: "none",
                            color: "#e0e0e0",
                            fontWeight: 400,
                        }}
                        to="/contact"
                    >
                        Контакты
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
                                        {mobileOpen ? drawer() : <button onClick={handleDrawerToggle} type="button" className="navbar-toggle" data-toggle="collapse"
                                                                       data-target=".navbar-collapse">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>}

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
                                            </li>
                                            <li onMouseEnter={() => setIsVisible3(!isVisible3)} onMouseLeave={() => setIsVisible3(!isVisible3)} className="dropdown"><a style={{textDecoration: "none"}} href="/news">Новости</a>
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