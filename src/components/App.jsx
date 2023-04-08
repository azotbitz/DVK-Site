import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import {HomePage} from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import NewsPage from "../pages/NewsPage";
import RumPage from "../pages/catalogPage/RumPage";
import WhiskyPage from "../pages/catalogPage/WhiskyPage";
import VodkaPage from "../pages/catalogPage/VodkaPage";
import JinPage from "../pages/catalogPage/JinPage";
import AboutPage from "../pages/AboutPage";
import PartnersPage from "../pages/PartnersPage";
import ContactsPage from "../pages/ContactsPage";
import PriamBeveragesPage from "../pages/catalogPage/PriamBeveragesPage";



function App() {
  return (
          <Routes>
              <Route path={'/'} element={<Layout />}>
                  <Route index element={<HomePage/>}/>
                  <Route path={'/news'} element={<NewsPage/>}/>
                  <Route path={'/rum'} element={<RumPage/>}/>
                  <Route path={'/whisky'} element={<WhiskyPage/>}/>
                  <Route path={'/jin'} element={<JinPage/>}/>
                  <Route path={'/vodka'} element={<VodkaPage/>}/>
                  <Route path={'/priambeverages'} element={<PriamBeveragesPage/>}/>
                  <Route path={'/about'} element={<AboutPage/>}/>
                  <Route path={'/partners'} element={<PartnersPage/>}/>
                  <Route path={'/contact'} element={<ContactsPage/>}/>
              </Route>
              <Route path={'*'} element={<ErrorPage/>}/>
          </Routes>
  );
}

export default App;
