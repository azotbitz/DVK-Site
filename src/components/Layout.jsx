import React, {useContext, useState} from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import BottomFooter from "./BottomFooter";
import {LanguageContext, LanguageContextToggle} from "./App";



const Layout = () => {

    const language = useContext(LanguageContext);
    const setLanguage = useContext(LanguageContextToggle)

    return (
        <>
            <Header language={language}/>
                    <main>
                        <Outlet />
                    </main>
            <Footer language={language}/>
            <Navigation
                language={language}
                handleSetLanguage={language => {
                    setLanguage(language);
                    storeLanguageInLocalStorage(language);
                    window.scrollTo(0,0)
                    window.location.reload();
                }}
            />
            <BottomFooter />
        </>
    );
};

function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
}

export default Layout;