import Image from "next/image";
import Link from "next/link";

import logo from '../../../../../img/icons/logo.svg';


const Logo = () => {
    return (
        <Link href={'/'}>
            <Image
                src={logo}
                width={216}
                height={77}
                alt="Logo"
            />
        </Link>
    )
};

export default Logo;