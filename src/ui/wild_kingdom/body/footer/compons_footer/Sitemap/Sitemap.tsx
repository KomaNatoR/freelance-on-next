import Tittle from "@/ui/wild_kingdom/shares/Tittle/Tittle";
import NavHeader from "../../../header/compon_header/NavHeader";
import SocList from "./SocList";

import styles from './sitemap.module.scss'


const Sitemap = () => {


    return (
        <div className={styles.sitemap_box}>

            <Tittle>Sitemap</Tittle>

            <div>
                <NavHeader />
                <SocList />
            </div>

        </div>
    )
};
export default Sitemap;
