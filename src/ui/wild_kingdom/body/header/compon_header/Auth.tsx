
import Button from '@/ui/wild_kingdom/shares/Button/Button';

import styles from './auth.module.scss';


const Auth = () => {
    return (
        <div className={styles.auth}>
            
            <div>Log in</div>

            <div>Register</div>

            <Button>Contact</Button>
        </div>
    )
}

export default Auth
