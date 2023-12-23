"use client"

import Header from "./header/Header";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";

import styles from './wild-styles.module.scss';
import { montserrat } from '../../fonts';


const WildBody = () => {

    return (
        <div className={`${styles.body} ${montserrat.className}`}>
            <Header/>
        
            <main>
                <Hero />
                <h1>PETS_PAGE!</h1>
            </main>

            <Footer />
        </div>
    )
}

export default WildBody;
