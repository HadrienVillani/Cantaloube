import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Slider() {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });
  const [imgSize, setImgSize] = useState();
  const [nbSlide, setNbSlide] = useState();
  const location = useLocation();
  const [titlePage, setTitlePage] = useState('');
  let sliderPack = useRef();
  const [changeImgs, setImgs] = useState([]);
  const [loading] = useState(true);

  useEffect(() => {
    const firstTable = ['fourthRing', 'thirdRing', 'firstRing'];
    const secondTable = ['fourthWatch', 'fifthWatch', 'sixthWatch'];
    const thirdTable = ['firstRing', 'sixthWatch', 'fourthRing'];

    if (location.pathname === '/Bijouterie') {
      setImgs(firstTable);
    }
    if (location.pathname === '/Horlogerie') {
      setImgs(secondTable);
    }
    if (location.pathname === '/') {
      setImgs(thirdTable);
    }
    if (location.pathname === '/Accueil') {
      setImgs(thirdTable);
    }
  }, []);
  function test() {
    console.log(changeImgs[1]);
  }
  useEffect(() => {
    const imgs = document.querySelectorAll('.slider');
    function handleResizeHeader() {
      setDimensions({
        width: window.innerWidth,
      });
      setImgSize(imgs[0].offsetWidth);
      setNbSlide(imgs.length);
    }
    window.addEventListener('resize', handleResizeHeader);
    return () => {
      window.removeEventListener('resize', handleResizeHeader);
    };
  });
  useEffect(() => {
    let pageLocation = location.pathname;

    setTitlePage(pageLocation.slice('1'));
    if (pageLocation === '/') {
      setTitlePage('Acceuil');
    }
  }, [location.pathname, dimensions]);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const container = document.querySelector('.sliderContainer ');
        let pos = 0;
        const imgs = document.querySelectorAll('.slider');
        container.style.left = 0 + 'px';
        imgs.forEach((e) => {
          e.style.left = 0 + 'px';
        });
        setImgSize(imgs[0].offsetWidth);
        setNbSlide(imgs.length);
        next.addEventListener('click', () => {
          pos = pos + imgSize;
          if (pos > 0) {
            sliderPack.current.style.left = (-nbSlide + 1) * imgSize + 'px';
            pos = (-nbSlide + 1) * imgSize;
          } else {
            sliderPack.current.style.left = pos + 'px';
          }
        });

        prev.addEventListener('click', () => {
          pos = pos - imgSize;
          if (pos < (-nbSlide + 1) * imgSize) {
            sliderPack.current.style.left = 0 + 'px';
            pos = 0;
          } else {
            sliderPack.current.style.left = pos + 'px';
          }
        });
      }, 500);
    }
  }, [imgSize, nbSlide]);

  return dimensions < 1400 || window.innerWidth < 1400 ? (
    <section className='sliderSection mobilePadding'>
      <aside>
        {test()}
        <div className='sliderContainer slider-1'>
          <div className='sliderPack' ref={sliderPack}>
            {changeImgs.map((picture, index) => (
              <div key={index} className='slider'>
                <img
                  className='sliderImg'
                  src={require('../assets/' + picture + '.webp')}
                  alt=''
                />
              </div>
            ))}
          </div>
        </div>
        <div className='containerButton'>
          <button className='next'>Previous</button>
          <button className='prev'>Next</button>
        </div>
      </aside>
    </section>
  ) : (
    <section className='sliderSection'>
      <aside>
        {test()}
        <div className='sliderAndText'>
          <div className='sliderContainer slider-1'>
            <div className='sliderPack' ref={sliderPack}>
              {changeImgs.map((picture, index) => (
                <div key={index} className='slider'>
                  <img
                    className='sliderImg'
                    src={require('../assets/' + picture + '.webp')}
                    alt=''
                  />
                </div>
              ))}
            </div>
          </div>
          <span className='borderLeft'></span>
          <div className='sliderTextContainer'>
            <h2 className='pageLocation'>{titlePage}</h2>
            <p>
              Bienvenue dans notre bijouterie, un lieu où l'éclat et la beauté
              se rencontrent pour créer des instants magiques. Située au cœur de
              la ville, notre bijouterie est un sanctuaire de l'élégance et du
              raffinement.
            </p>
            <button>Notre boutique</button>
          </div>
        </div>
        <div className='containerButton'>
          <button className='next'>Previous</button>
          <button className='prev'>Next</button>
        </div>
      </aside>
    </section>
  );
}

export default Slider;
