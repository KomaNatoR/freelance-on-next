import Link from 'next/link';

import styles from './main-nav.module.scss';


const MainNavigate = () => {
    return (
        <div className={styles.cont}>
            <h1 className={styles.h1}>
                {"Hello it's my HTML/SCSS/TS/NEXT practic!"}
            </h1>

            <nav className={styles.nav}>
                <Link href="/wild_kingdom" className={styles.link}>The Wild Kingdom</Link>
            </nav>
        </div>
    )
};

export default MainNavigate;
