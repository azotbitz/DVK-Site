import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import {HomePage} from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import NewsPage from "../pages/NewsPage";
import RumPage from "../pages/catalogPage/RumPage";
import WhiskeyPage from "../pages/catalogPage/WhiskeyPage";
import VodkaPage from "../pages/catalogPage/VodkaPage";
import GinPage from "../pages/catalogPage/GinPage";
import AboutPage from "../pages/AboutPage";
import PartnersPage from "../pages/PartnersPage";
import ContactsPage from "../pages/ContactsPage";
import PriamBeveragesPage from "../pages/catalogPage/PriamBeveragesPage";

export const LanguageContext = React.createContext()
export const LanguageContextToggle = React.createContext()

function App () {

    let languageStoredInLocalStorage = localStorage.getItem("language");
    const [language, setLanguage] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : "Russian"
    );


  return (
      <LanguageContext.Provider value={language}>
          <LanguageContextToggle.Provider value={setLanguage}>
          <Routes>
              <Route path={'/'} element={<Layout />}>
                  <Route index element={<HomePage/>}/>
                  <Route path={'/news'} element={<NewsPage/>}/>
                  <Route path={'/rum'} element={<RumPage/>}/>
                  <Route path={'/whiskey'} element={<WhiskeyPage/>}/>
                  <Route path={'/gin'} element={<GinPage/>}/>
                  <Route path={'/vodka'} element={<VodkaPage/>}/>
                  <Route path={'/priambeverages'} element={<PriamBeveragesPage/>}/>
                  <Route path={'/about'} element={<AboutPage/>}/>
                  <Route path={'/partners'} element={<PartnersPage/>}/>
                  <Route path={'/contact'} element={<ContactsPage/>}/>
              </Route>
              <Route path={'*'} element={<ErrorPage/>}/>
          </Routes>
          </LanguageContextToggle.Provider>
      </LanguageContext.Provider>
  );
}

export default App;
