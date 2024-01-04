'use client'
import { useEffect } from "react";

import styles from "./awesome.module.scss";


const AwesomeBody = () => {
    useEffect(() => {
        const container = document.getElementById('animatedContainer');
        if (container) {
            container.classList.add(styles.animateIn);
        }
    }, []);

    return (
        <div id="animatedContainer" className={styles.body}>
            <div className={`${styles.wrapper}`}>

                <main className={styles.page}>
                    <div className={`${styles.main_screen} ${styles.page_main_screen}`}>
                        <div className={`${styles.trees} ${styles.six}`}><span></span></div>
                        <div className={`${styles.trees} ${styles.five}`}><span></span></div>
                        <div className={`${styles.trees} ${styles.four}`}><span></span></div>
                        <div className={`${styles.trees} ${styles.three}`}><span></span></div>
                        <div className={`${styles.trees} ${styles.two}`}><span></span></div>
                        <div className={`${styles.trees} ${styles.one}`}><span></span></div>

                        <div className={`${styles.birds} ${styles.bird_one}`}><span></span></div>
                        <div className={`${styles.birds} ${styles.bird_two}`}><span></span></div>

                        <div className={`${styles.mountain}`}><span></span></div>

                        <section className={`${styles.page_content} ${styles.content}`}>
                            <div className={styles.content_container}>
                                <h1>Code only</h1>
                                <div className="content_body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti eveniet minus nobis qui molestiae a amet. Dignissimos quis sed perferendis corrupti reprehenderit quidem accusantium minus labore dolore? A, tempore?</p>
                                </div>
                            </div>
                        </section>
                    </div>

                </main>
            </div>
        </div>
    )
};
export default AwesomeBody;
