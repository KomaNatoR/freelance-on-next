import iconsBox from "./icons/icons.svg";
import iconsId from "./icons/icons.json";


type Props = {
    id: string,
};


const Icon = (props: Props) => {
    const { id } = props;
    let checkId = iconsId.find(it => it === id);
    // if (!checkId) checkId = `arrow`;
    // console.log("ID     |-->",id);
    // console.log("checkId|-->",checkId);

    return (
        <svg id={checkId ? id : 'arrow'}>
            <use href={`${iconsBox}#icon-${checkId}`}></use>
        </svg>
    )
};


// export default Icon;