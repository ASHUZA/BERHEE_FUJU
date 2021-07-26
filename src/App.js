
import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom"
import Menu from './Menu';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionFooter from './SectionFooter';
import PageAccueil from './pages/PageAccueil';
import PageLivreBible from './pages/PageLivreBible';
import PageVersionBible from './pages/PageVersionBible';
import PageBtnChap from './pages/PageBtnChap';
import Chapitre from './pages/Chapitre';



function App() {


  const [IdLivre, setIdLivre] = useState([])

  const ShowChap = (id) => {
  setIdLivre(id)
    
}

  return (

    <>

      <BrowserRouter>

        {/* <Menu
        /> */}

        {/* 
<Menu
showprofilfromchild={getidmovies}
     /> */}
        <switch>


          <Route exact path="/" component={PageAccueil} />
          <Route path="/SectionFooter" component={SectionFooter} />
          <Route path="/PageLivreBible">
            <PageLivreBible ShowChap={ShowChap}/>
          </Route>
           <Route path="/PageVersionBible" component={PageVersionBible} /> 

          <Route path="/chapitre1" component={Chapitre} />
          <Route path="/PageBtnChap">
            <PageBtnChap   IdLivre={IdLivre}/>
            </Route> 
          

        </switch>

      </BrowserRouter>

    </>
  );
}

export default App;
