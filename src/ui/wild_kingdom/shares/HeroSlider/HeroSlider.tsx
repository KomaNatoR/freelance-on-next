'use client'
import Image from "next/image";
import arrow from './img/arrow.svg'

import styles from './slider.module.scss'
import { montserrat } from "@/ui/fonts";


const HeroSlider = () => {


    return (
        <div className={`${styles.hero_slider} ${montserrat.className}`}>

            <div className={styles.big_circle}>
                <p>{'1'}</p>
            </div>
          
            <div className={styles.small_circle}>
                <p>{'2'}</p>
            </div>
            <div className={styles.small_circle}>
                <p>{'3'}</p>
            </div>
            <div className={styles.small_circle}>
                <p>{'4'}</p>
            </div>

            <div className={styles.butt_box}>
                <button type='button' className={styles.butt_first}>
                    <Image src={arrow} alt='Arrow Left' width={34} height={16} />
                </button>
                <button type='button' className={styles.butt_second}>
                    <Image src={arrow} alt='Arrow Right' width={54} height={26} />
                </button>
            </div>

        </div>
    )
};
export default HeroSlider;
