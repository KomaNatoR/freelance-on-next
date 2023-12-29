import Image from "next/image";
// import MediaQuery from 'react-responsive';

import logo from '../../../../../img/icons/logo.svg';


const Logo = () => {
    return (
        <>
            {/* <MediaQuery maxWidth={767}>
                <Image
                    src={logo}
                    width={108}
                    height={38}
                    alt="Logo"
                />
            </MediaQuery> */}
            {/* <MediaQuery minWidth={768}> */}
                <Image
                    src={logo}
                    width={216}
                    height={77}
                    alt="Logo"
                />
            {/* </MediaQuery> */}
        </>
    )
};

export default Logo;