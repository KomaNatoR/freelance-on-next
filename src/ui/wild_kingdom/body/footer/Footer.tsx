"use client"

import Sitemap from './compons_footer/Sitemap/Sitemap';
import Logo from '../header/compon_header/Logo';
import Subscribe from './compons_footer/Subscribe/Subscribe';

import styles from './footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bg}>

        <div className={styles.container}>
          <div className={styles.box_top}>
            <Sitemap />
            <div className={styles.box_img}>
              <Logo />
            </div>
            <Subscribe />
          </div>

          <div className={styles.box_bottom}>
            <p>Copyright Dotcreativemarket</p>
          </div>
        </div>

      </div>
    </footer>
  )
};

export default Footer;
