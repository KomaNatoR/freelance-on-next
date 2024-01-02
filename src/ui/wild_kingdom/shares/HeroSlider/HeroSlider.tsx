'use client'
import { useState } from "react";
import Image from "next/image";
import arrow from './img/arrow.svg'

import styles from './slider.module.scss'
import { montserrat } from "@/ui/fonts";


type Arr = string[];
let cicleringArr: Arr = ['1', '2', '3', '4'];


const HeroSlider = () => {
    const [visualArr, setVisualArr] = useState<Arr>(cicleringArr);

    const handleButtBack = (arr: Arr): void => {
        
        const newArr = [...arr];
        newArr.push(newArr.shift()!);
        setVisualArr(newArr);
        // console.log('|  <--  |', newArr);
    }
    const handleButtStright = (arr: Arr): void => {
        
        const newArr = [...arr];
        newArr.unshift(newArr.pop()!);
        setVisualArr(newArr);
        // console.log('|  -->  |', newArr);
    }


    return (
        <div className={`${styles.hero_slider} ${montserrat.className}`}>

            <div className={styles.big_circle}>
                <p>{visualArr[0]}</p>
            </div>
          
            <div className={styles.small_circle}>
                <p>{visualArr[1]}</p>
            </div>
            <div className={styles.small_circle}>
                <p>{visualArr[2]}</p>
            </div>
            <div className={styles.small_circle}>
                <p>{visualArr[3]}</p>
            </div>

            <div className={styles.butt_box}>
                <button type='button' className={styles.butt_first} onClick={()=>handleButtBack(visualArr)}>
                    <Image src={arrow} alt='Arrow Left' width={34} height={16} />
                </button>
                <button type='button' className={styles.butt_second} onClick={()=>handleButtStright(visualArr)}>
                    <Image src={arrow} alt='Arrow Right' width={54} height={26} />
                </button>
            </div>

        </div>
    )
};
export default HeroSlider;
