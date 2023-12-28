"use client"

import styles from './hero.module.scss'
import { italiana } from '../../../fonts';


const Hero = () => {
  return (
    <section className={`${italiana.className}`}>
      <h1 className={styles.title}>A better world for pets</h1>
    </section>
  )
}

export default Hero;
