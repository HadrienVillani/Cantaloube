import React, { useEffect, useRef, useState } from 'react';
import { scrollAnimation } from './ScrollAnimation';
import { bijoux } from '../data/bijoux';
import { montres } from '../data/montres';
function Galery() {
  const bijouxButton = useRef();
  const montresButton = useRef();
  const contShowItems = useRef();
  const [allBijoux] = useState(bijoux);
  const [allMontres] = useState(montres);
  const [showItems, setShowItems] = useState(6);
  const [choices, setchoices] = useState(true);
  const [showItemsPlus, setShowItemsPlus] = useState(0);
  const [showItemsTot, setShowItemsTot] = useState(0);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });

  // if (showItems > allMontres.length || showItems > allBijoux.length) {
  //   setShowItems(showItems - 1);
  // }
  useEffect(() => {
    setShowItemsTot(showItems + showItemsPlus);
  }, [showItems, showItemsPlus]);
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions.width]);

  useEffect(() => {
    if (dimensions.width < 1400) {
      setShowItems(4);
    } else {
      setShowItems(6);
    }
    bijouxButton.current.addEventListener('click', () => {
      setchoices(true);
      setShowItemsPlus(0);
      bijouxButton.current.style.color = 'var(--gold)';
      montresButton.current.style.color = 'black';
    });
    montresButton.current.addEventListener('click', () => {
      setchoices(false);
      setShowItemsPlus(0);
      montresButton.current.style.color = 'var(--gold)';
      bijouxButton.current.style.color = 'black';
    });
  }, [showItems, showItemsPlus, dimensions.width]);

  useEffect(() => {
    scrollAnimation();
  });
  return (
    <section>
      <section className='galerySectionOne animationScroll'>
        <aside>
          <article className='containerAnimation'>
            <h3>Fabricant de bijoux élu Meilleur Ouvrier de France</h3>
            <h2 className='animationTitle'>
              Une collection de bijoux et de montres confectionnée par l'un des
              Meilleurs Ouvriers en France
            </h2>
            <p className='animationText'>
              La Joaillerie Cantaloube est implantée à Meaux dans le département
              de la Seine-et-Marne depuis 1845. Découvrez cet univers enchanteur
              à travers des créations sublimées par des pierres de couleurs,
              précieuses ou non, agrémentant bagues, alliances, boucles
              d’oreilles, bracelets, colliers et pendentifs. Notre bijouterie
              propose un large choix de bijoux pouvant être personnalisés selon
              vos désirs grâce à notre atelier sur place : gravure, pierres
              précieuses, métaux précieux…
            </p>
          </article>
        </aside>
      </section>
      <section className='galery'>
        <article ref={contShowItems} className='containerAnimation'>
          <h3>Notre galerie photos</h3>
          <h2 className='animationTitle'>
            Découvrez l'ensemble des photos de nos deux bijouteries
          </h2>
          <div>
            <ul>
              <li ref={bijouxButton}>Bijoux</li>
              <li ref={montresButton}>Montres</li>
            </ul>
          </div>
          <div className='containerPicture'>
            {choices === true
              ? allBijoux
                  .slice(0, showItemsTot)
                  .map((picture, index) => (
                    <img
                      key={index}
                      src={require('../assets/' + picture.src + '.webp')}
                      alt=''
                    />
                  ))
              : allMontres
                  .slice(0, showItemsTot)
                  .map((picture, index) => (
                    <img
                      key={index}
                      src={require('../assets/' + picture.src + '.webp')}
                      alt=''
                    />
                  ))}
          </div>
          <div className='contShowItemsButton'>
            <button
              onClick={function click() {
                if (dimensions.width < 1400) {
                  setShowItemsPlus(showItemsPlus + 2);
                  setTimeout(() => {
                    contShowItems.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end',
                    });
                  }, 50);
                } else if (dimensions.width > 1400) {
                  setShowItemsPlus(showItemsPlus + 3);
                  setTimeout(() => {
                    contShowItems.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end',
                    });
                  }, 50);
                }
              }}>
              Voir plus
            </button>
            <button
              onClick={function () {
                setShowItemsPlus(0);
              }}>
              Voir moins
            </button>
          </div>
        </article>
      </section>
    </section>
  );
}

export default Galery;
