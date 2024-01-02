

import Tittle from '@/ui/wild_kingdom/shares/Tittle/Tittle';

import styles from './subscribe.module.scss'


const Subscribe = () => {
    return (
        <div className={styles.subscribe_box}>

            <div>
                <Tittle fontSize='32px'>Treating all the pets present here like royalty.</Tittle>

                <form className={styles.form}>
                    <input type="email" placeholder='Enter email address' />
                    <button type='submit'>Subscribe</button>
                </form>
            </div>

        </div>
    )
};
export default Subscribe;
