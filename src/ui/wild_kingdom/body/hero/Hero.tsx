"use client"
import Image from 'next/image';
import bgHero from '@/img/wild/bg/bg_hero.jpg'
import arrow from '@/img/wild/icons/arrow.svg'

import Tittle from '../../shares/Tittle/Tittle';
import Button from '../../shares/Button/Button';

import styles from './hero.module.scss'
import { italiana } from '../../../fonts';


const Hero = () => {
  return (
    <section className={`${styles.hero_box} ${italiana.className}`}>

      <Image src={bgHero} alt='Background Image' />

      <div className={styles.content_box}>
        <div className={styles.tittle_box}>
          <Tittle id='h1' fontSize='100px'>A better world for pets</Tittle>
          <Button>Explore</Button>
        </div>

        <div className={styles.hero_slider}>
          <div className={styles.big_circle}></div>
          <div className={styles.small_circle}></div>
          <div className={styles.small_circle}></div>
          <div className={styles.small_circle}></div>

          <div className={styles.butt_box}>
            <button type='button' className={styles.butt_first}>
              <Image src={arrow} alt='Arrow Left' width={34} height={16} />
            </button>
            <button type='button' className={styles.butt_second}>
              <Image src={arrow} alt='Arrow Right' width={54} height={26} />
            </button>
          </div>
        </div>
      </div>

    </section>
  )
};

export default Hero;
