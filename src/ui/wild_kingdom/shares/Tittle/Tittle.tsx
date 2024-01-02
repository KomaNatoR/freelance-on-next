
import styles from './tittle.module.scss'
import { italiana } from '@/ui/fonts';


type Props = {
    id?: string,
    fontSize?: string,
    children: React.ReactNode;
};

const Tittle = ({ children, id, fontSize = '20px' }: Props) => {


    if (id === 'h1') return (
        <h1 className={`${styles.tittle} ${italiana.className}`} style={{ fontSize: `${fontSize}` }}>
            {children}
        </h1>
    ); else return (
        <h2 className={`${styles.tittle} ${italiana.className}`} style={{ fontSize: `${fontSize}` }}>
            {children}
        </h2>
    )
};
export default Tittle;
