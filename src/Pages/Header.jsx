import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/fontawesome-free-solid';
// import Slider from './Slider';

const Header = () => {
  const menuUl = useRef();
  const location = useLocation();
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });
  const [delayOne, setdelayOne] = useState(false);
  const [clientHeight, setoffClientHeight] = useState();
  const eventClick = () => {
    delayOne === true ? setdelayOne(false) : setdelayOne(true);
  };
  useEffect(() => {
    setTimeout(function orientation() {
      delayOne
        ? setoffClientHeight(menuUl.current.clientHeight)
        : setoffClientHeight(0);
    }, 50);

    window.addEventListener('orientationchange', function () {
      setoffClientHeight(menuUl.current.clientHeight);
    });
  });

  useEffect(() => {
    function handleResizeHeader() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResizeHeader);
    return () => {
      window.removeEventListener('resize', handleResizeHeader);
    };
  }, []);
  useEffect(() => {
    if (dimensions < 1400 || window.innerWidth < 1400) {
      let path1 = document.querySelector('.btn');

      if (delayOne) {
        path1.classList.add('active');
        path1.classList.remove('not-active');
      } else if (!delayOne) {
        path1.classList.add('not-active');
        path1.classList.remove('active');
      }
    }
  });
  useEffect(() => {
    const containerUl = document.querySelector('.containerUl');
    const headerUlContainer = document.querySelector('.headerUlContainer');
    const headerResize = document.querySelector('.headerResize');
    const allLi = document.querySelectorAll('.menuUl li');
    const allLiRes = document.querySelectorAll('.headerResize li');

    allLi.forEach((e) => {
      if (e.id === location.pathname.slice('1')) {
        e.style.color = 'var(--gold)';
      } else {
        e.style.color = 'black';
      }
    });
    // ---------------------------------- Desktop Size --------------------------
    if (dimensions > 1400 || window.innerWidth > 1400) {
      headerUlContainer.style.display = 'flex';
    }

    // ---------------------------------- mobile size --------------------------
    if (dimensions < 1400 || window.innerWidth < 1400) {
      allLiRes.forEach((e) => {
        e.addEventListener('click', () => {
          headerResize.classList.remove('toggleMenu');
          containerUl.style.display = 'none';
        });
      });

      if (delayOne === false) {
        document.body.style.overflow = 'visible';
        headerResize.classList.remove('toggleMenu');
        containerUl.style.display = 'none';
        allLiRes.forEach((e) => {
          e.style.left = '-500px';
        });
      } else {
        headerResize.classList.add('toggleMenu');
        containerUl.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        var initialDelay = 500;
        let i = 0;
        let top = clientHeight / 5;
        const delayApp = () => {
          let delayPlus = 50;
          if (i <= allLiRes.length - 1) {
            allLiRes[i].style.left = '0vw';
            allLiRes[i].style.top = top * i + 'px';
            i++;
          }
          setTimeout(() => {
            delayApp();
          }, delayPlus);
        };
        setTimeout(function () {
          delayApp();
        }, initialDelay);
      }
    }
  });
  return dimensions < 1400 || window.innerWidth < 1400 ? (
    <header className='headerResize'>
      <div className='containerMenuPicture'>
        <div className='box'>
          <div className='btn not-active' onClick={eventClick}>
            <span className='spanHeader'></span>
            <span className='spanHeader'></span>
            <span className='spanHeader'></span>
          </div>
        </div>
        <img
          className='menuPicture'
          src={require('../assets/logo.webp')}
          alt=''
        />
      </div>
      <div className='containerUl'>
        <ul className='menuUl' ref={menuUl}>
          <Link to={'/Accueil'} onClick={eventClick}>
            <li id={'Accueil'}>Accueil</li>
          </Link>
          <Link to={'/Bijouterie'} onClick={eventClick}>
            <li id={'Bijouterie'}>Bijouterie</li>
          </Link>
          <Link to={'/Horlogerie'} onClick={eventClick}>
            <li id={'Horlogerie'}>Horlogerie</li>
          </Link>
          <Link to={'/Galery'} onClick={eventClick}>
            <li id={'Galery'}>Galerie photos</li>
          </Link>
          <Link to={'/Contact'} onClick={eventClick}>
            <li id={'Contact'}>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  ) : (
    <header className='header'>
      <div className='headerImgContainer'>
        <img src={require('../assets/logo.webp')} alt='' />
      </div>
      <div className='headerUlContainer'>
        <ul className='menuUl'>
          <Link to={'/Cantaloube'}>
            <li id={'Accueil'}>Accueil</li>
          </Link>
          <Link to={'/Cantaloube/Bijouterie'}>
            <li id={'Bijouterie'}>Bijouterie</li>
          </Link>
          <Link to={'/Cantaloube/Horlogerie'}>
            <li id={'Horlogerie'}>Horlogerie</li>
          </Link>
          <Link to={'/Cantaloube/Galery'}>
            <li id={'Galery'}>Galerie photos</li>
          </Link>
          <Link to={'/Cantaloube/Contact'}>
            <li id={'Contact'}>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
