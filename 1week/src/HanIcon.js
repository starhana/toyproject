import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const handImg = {
    rock : rockImg,
    scissor : scissorImg,
    paper : paperImg
};

function HandIcon({value}){
    const src = handImg[value];
    return <img src={src} alt={value}/>
}

export default HandIcon;