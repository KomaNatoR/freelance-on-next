import Image from "next/image";

import Icon from "@/ui/wild_kingdom/shares/Icon/Icon";

import twitt from '@/img/wild/icons/soc_twitt.svg'
import inst from '@/img/wild/icons/soc_insta.svg'
import tiktok from '@/img/wild/icons/soc_tiktok.svg'
import medium from '@/img/wild/icons/soc_medium.svg'

import styles from './sitemap.module.scss'


const SocList = () => {

    return (
        <ul className={styles.soc_list}>
            <li className={styles.item}>
                <a href="#">
                    <Image src={twitt} alt="twitter" />
                </a>
            </li>
            <li className={styles.item}>
                <a href="#">
                    <Image src={inst} alt="insagram" />
                </a>
            </li>
            <li className={styles.item}>
                <a href="#">
                    <Image src={tiktok} alt="tiktok" />
                </a>
            </li>
            <li className={styles.item}>
                <a href="#">
                    <Image src={medium} alt="medium" />
                </a>
            </li>
        </ul>
    )
};
export default SocList;
