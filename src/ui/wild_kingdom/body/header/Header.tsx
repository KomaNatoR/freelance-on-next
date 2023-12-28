"use client"

import NavHeader from './compon_header/NavHeader';
import Logo from './compon_header/Logo';
import Auth from './compon_header/Auth';

import styles from './header.module.scss';


const Header = () => {

  return (
    <header className={styles.header}>

      <div  className={styles.container}>
        <NavHeader />
        
        <Logo />

        <Auth />
      </div>
    </header>
  )
}

export default Header;