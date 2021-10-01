import {useState} from 'react';
import Dice from './Dice';
import HandIcon from './HanIcon'
import Button from './Button';

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    const handleClick = function(value) {
        console.log(value);
        //HandButton.js에 있는 handleClick실행
    };
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);//합계
    //useState : 파라미터로 초기값(useState(1)) 전달 받음
    //num(State값) : 현재 변수의 값(처음에는useState변수를 호출 할 때 전달한 초기값)
    //setNum : 파라미터로 전달하는 값

    const handleRollClick = () =>{
        const nextNum = random(6);//1~6까지 랜덤
        setNum(nextNum);
    }
    const handleClearClick = () =>{
        setNum(1);//파라미터로 전달값 1로 변경
        setSum(0);//파라미터로 전달값 1로 변경
    }

    return ( //return문을 소괄호()로 감싸면 여러줄 쓸 수 있음
        //props : 리액트 컴포넌트에 지정한 속성(전달된 속성 모두)
        //prop : 리액트 컴포넌트에 지정한 각각의 속성
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>한별</h2>
                <Dice color="red" num={num}/>
                <h2>총점</h2>
                <p>{sum}</p>
            </div>
            
        </div>
    );
}

export default App;//다른 파일에서도 활용할 수 있도록