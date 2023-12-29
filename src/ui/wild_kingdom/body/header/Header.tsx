"use client";
import Image from 'next/image';
import useMedia from 'use-media';

import NavHeader from './compon_header/NavHeader';
import Logo from './compon_header/Logo';
import Auth from './compon_header/Auth';

import styles from './header.module.scss';
import burger from '@/img/wild/icons/menu_burger.svg';


const Header = () => {
  const isMobile = useMedia("(max-width: 767px)");


  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {!isMobile && <NavHeader />}
        <Logo />
        {!isMobile && <Auth />}

        {isMobile && <Image src={burger} alt='burger'/>}

      </div>
    </header>
  )
};

export default Header;