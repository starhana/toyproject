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
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () =>{
        const nextNum = random(6);//1~6까지 랜덤
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]); //→ 참조형 state
        //참조형 타입의state를 변경 할때 스프레드 문법 활용 하면 쉬움
        //Spread(스프레드) 문법 : 배열을 펼쳐서 개별적인 값들의 목록으로 만드는 것.
    }
    const handleClearClick = () =>{
        setNum(1);//파라미터로 전달값 1로 변경
        setSum(0);//파라미터로 전달값 0로 변경
        setGameHistory([]);//파라미터로 전달값 빈배열[]로 변경
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
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
        //join : 배열의 원소들을 연결하여 하나의 값(문장)으로 만듬
        
    );
}

export default App;//다른 파일에서도 활용할 수 있도록