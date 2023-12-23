import Link from 'next/link';

import variables from './main-nav.module.scss';


const MainNavigate = () => {
    return (
        <div  className={variables.cont}>
            <h1 className={variables.h1}>
                {"Hello it's my HTML/SCSS/TS/NEXT practic!"}
            </h1>

            <nav className={variables.nav}>
                <Link href="/pets" className={variables.link}>pets</Link>
            </nav>
        </div>
    )
};

export default MainNavigate;
