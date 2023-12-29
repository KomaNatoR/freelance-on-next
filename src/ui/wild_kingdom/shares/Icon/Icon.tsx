import React from 'react';

import iconsBox from "./icons/icons.svg";
import iconsId from "./icons/icons.json";


type Props = React.SVGProps<SVGSVGElement> & {
    id: string;
};


const Icon: React.FC<Props> = (props) => {
    const { id, ...rest } = props;
    const checkId = iconsId.find(it => it === id);
    const checkedId = checkId ? id : 'arrow';

    return (
        <svg id={checkedId} {...rest}>
            <use href={`${iconsBox}#icon-${checkedId}`}></use>
        </svg>
    )
};


export default Icon;