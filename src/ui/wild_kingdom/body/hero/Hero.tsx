"use client"
import Image from 'next/image';
import bgHero from '@/img/wild/bg/bg_hero.jpg'

import Tittle from '../../shares/Tittle/Tittle';
import Button from '../../shares/Button/Button';
import HeroSlider from '../../shares/HeroSlider/HeroSlider';

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

        <HeroSlider/>
      </div>

    </section>
  )
};

export default Hero;
