import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from '../Accueil';
import Header from '../Header';
import Bijouterie from '../Bijouterie';
import Horlogerie from '../Horlogerie';
import Galery from '../Galery';
import Contact from '../Contact';
import Slider from '../Slider';
import ScrollToTop from '../utilities/ScrollToTop';
import { Fragment } from 'react/cjs/react.production.min';

function index() {
  return (
    <div>
      <Fragment>
        <ScrollToTop />
        <Header />
        <Slider />
        <Routes>
          <Route exact path='/' element={<Accueil />} />
          <Route path='/Bijouterie' element={<Bijouterie />} />
          <Route path='/Horlogerie' element={<Horlogerie />} />
          <Route path='/Galery' element={<Galery />} />
          <Route path='/Contact' element={<Contact />} />
          <Route exact path='*' element={<Accueil />} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default index;
