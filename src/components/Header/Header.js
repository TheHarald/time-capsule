import React, { useState, useEffect } from 'react';
import './header.css'
import { Link } from 'react-router-dom'
import Capsule from '../icons/Capsule'
import Profile from '../icons/Profile'

export const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)}

    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  let navClassName = "header"
  if(scrollPosition !== 0 ){
    navClassName = navClassName + " background"

  }

  return (
    <nav className={navClassName}>
      <div className="nav-container">
        <Link className="link" to={'/'}>
          <div className="main-link">
            <Capsule />
            <span className="link">Главная</span>
          </div>
        </Link>

        <div className="secondary-options">
          <Link className="link" to={'/history'}>
            История
          </Link>
          <Link className="link" to={'/history'}>
            Виды посланий
          </Link>
          <Link className="link" to={'/capsules'}>
            Капсулы времени
          </Link>
          <Link className="link" to={'/history'}>
            Отзывы
          </Link>
          <Link className="link" to={'/profile'}>
            <Profile />
          </Link>
        </div>
      </div>
    </nav>
  )
}
