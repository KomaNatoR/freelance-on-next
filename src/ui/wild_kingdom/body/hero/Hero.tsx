"use client"
import Image from 'next/image';
import bgHero from '@/img/wild/bg/bg_hero.jpg'

import Button from '../../shares/Button/Button';

import styles from './hero.module.scss'
import { italiana } from '../../../fonts';


const Hero = () => {
  return (
    <section className={`${styles.hero_box} ${italiana.className}`}>
      <Image src={bgHero} alt='Background Image'></Image>

      <h1 className={styles.title}>A better world for pets</h1>
      <Button>Explore</Button>
    </section>
  )
}

export default Hero;
