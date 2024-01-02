"use client"

import Header from "./header/Header";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";

import styles from './body.module.scss';
import { montserrat } from '../../fonts';


const WildBody = () => {

    return (
        <div className={`${styles.body} ${montserrat.className} wild_body`}>
            <Header />
            
            <main className={styles.main}>
                <Hero />
                <section>PETS_PAGE!</section>
            </main>

            <Footer />
        </div>
    )
};

export default WildBody;
