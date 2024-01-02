
import iconsBox from "./icons/icons.svg";
// import iconsId from "./icons/icons.json";

import styles from './icon.module.scss';


const Icon = () => {
  return (
    <svg className={styles.svg}>
      <use href={`/src/img/wild/icons/soc_twitt.svg`}></use>
    </svg>
  )
}
export default Icon;
