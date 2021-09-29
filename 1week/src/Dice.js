import diceBlue01 from './assets/dice-blue-1.svg';
        //파일이름        //이미지 경로
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';

import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

const Dice_img ={
    blue :[diceBlue01,diceBlue02,diceBlue03,diceBlue04,diceBlue05,diceBlue06,],
    red :[diceRed01,diceRed02,diceRed03,diceRed04,diceRed05,diceRed06],

}

function Dice({color = "blue", num = 1}) {
    //const diceImg = props.color === 'red' ? diceRed01:diceBlue01;
    //3항 연산자 사용
    //props의 color값이 'red'면 diceRed01, 아니면 diceBlue01 출력
    
    const src = Dice_img[color][num - 1];
    //[color] → prop 값       
    //[num - 1] → App.js에서 정한값(num{2}) -1 = 배열순서
    const alt = `${color} ${num}`;
    return <img src={src} alt={alt}/>;
}

export default Dice;//다른 파일에서도 활용할 수 있도록