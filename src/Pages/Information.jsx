import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollAnimation } from './ScrollAnimation';

function Information() {
  const contactlocation = useLocation();
  const contactBttn = useRef();
  useEffect(() => {
    if (contactlocation.pathname === '/Contact') {
      contactBttn.current.style.display = 'none';
    }
    scrollAnimation();
  });
  return (
    <section className='information'>
      <aside className='informationContainer'>
        <h2>Nos Informations</h2>
        <div className='informationContainerText'>
          <article>
            <div className='informationContact'>
              <h3>Bijouterie de Meaux</h3>
              <p>1 Rue du Grand Cerf 77100 Meaux</p>
              <p>01 64 34 06 62</p>
              <p>contact@cantaloube.fr</p>
            </div>
            <div className='informationHourly'>
              <h4>Heures d'ouverture</h4>
              <ul>
                <li>
                  <h5>Lundi </h5>
                  <p>Fermé</p>
                </li>
                <li>
                  <h5>Mar - Jeu</h5>
                  <p> 9:30 - 12:30 14:00 - 19:00</p>
                </li>
                <li>
                  <h5>Ven - Sam</h5>
                  <p>9:30 - 19:00</p>
                </li>
                <li>
                  <h5>Dimanche</h5>
                  <p>Fermé</p>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <div className='informationContact'>
              <h3>
                Bijouterie de <br />
                Chauconin-Neufmontiers
              </h3>
              <p>13 Avenue Roland Moreno 77124 Chauconin-Neufmontiers</p>
              <p>01 64 35 29 07</p>
              <p>contact@cantaloube.fr</p>
            </div>
            <div className='informationHourly'>
              <h4>Heures d'ouverture</h4>
              <ul>
                <li>
                  <h5>Lun - Sam</h5>
                  <p>20:00</p>
                </li>
                <li>
                  <h5>Dimanche</h5>
                  <p>Fermé</p>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <Link ref={contactBttn} to={'/Contact'}>
          <button>Contactez-nous</button>
        </Link>
      </aside>
    </section>
  );
}

export default Information;
