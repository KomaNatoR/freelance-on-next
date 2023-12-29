import Link from 'next/link';

import styles from './nav.module.scss';


const NavHeader = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <li>
                    <Link href="#">Products</Link>
                </li>
                <li>
                    <Link href="#">Services</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavHeader;