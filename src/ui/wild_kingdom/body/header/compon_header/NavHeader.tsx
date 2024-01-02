import Link from 'next/link';

import styles from './nav.module.scss';


const NavHeader = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.list_item}>
                    <Link href="#">Home</Link>
                </li>
                <li className={styles.list_item}>
                    <Link href="#">About</Link>
                </li>
                <li className={styles.list_item}>
                    <Link href="#">Products</Link>
                </li>
                <li className={styles.list_item}>
                    <Link href="#">Services</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavHeader;