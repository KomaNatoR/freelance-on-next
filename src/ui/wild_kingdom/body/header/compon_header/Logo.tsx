import Image from "next/image";

import logo from '../../../../../img/icons/logo.svg';


const Logo = () => {
    return (
        <Image
            src={logo}
            width={216}
            height={77}
            alt="Logo"
        />
    )
}

export default Logo;