
import styles from './tittle.module.scss'
import { italiana } from '@/ui/fonts';


type Props = {
    fontSize?: string,
    children: React.ReactNode;
};

const Tittle = ({ children, fontSize = '20px' }: Props) => {

  return (
    <h2 className={`${styles.tittle} ${italiana.className}`} style={{fontSize:`${fontSize}`}}>
      {children}
    </h2>
  )
}
export default Tittle;
