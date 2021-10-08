import {useState} from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    //const [num, setNum] = useState(1);
    //const [sum, setSum] = useState(0);//합계
    //useState : 파라미터로 초기값(useState(1)) 전달 받음
    //num(State값) : 현재 변수의 값(처음에는useState변수를 호출 할 때 전달한 초기값)
    //setNum : 파라미터로 전달하는 값
    //const [gameHistory, setGameHistory] = useState([]); 아래로 변경
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true); // 게임 진행 상태
    const [disabled, setDisabled] = useState(['App-button']);

    const handleRollClick = () =>{
        const nextMyNum = random(6);//1~6까지 랜덤
        const nextOtherNum = random(6);
       
        setMyHistory([...myHistory, nextMyNum]); //→ 참조형 state
        //참조형 타입의state를 변경 할때 스프레드 문법 활용 하면 쉬움
        //Spread(스프레드) 문법 : 배열을 펼쳐서 개별적인 값들의 목록으로 만드는 것.
        setOtherHistory([...otherHistory, nextOtherNum]);
    }
    
    const handleClearClick = () =>{
        setMyHistory([]);//파라미터로 전달값 빈배열[]로 변경
        setOtherHistory([]);  

        if(disabled.includes('noneAction') == true){
            console.log(disabled.indexOf('noneAction')); // ->1
            console.log(disabled);
            disabled.splice(disabled.indexOf('noneAction'),1);
            setDisabled([]);
        }
    }

    const handleIsPlayingChange = (bool) => { // 게임 진행 상태를 변경하는 핸들러
        setIsPlaying(bool);
    }

    
    
    if(isPlaying == false && disabled.includes('noneAction') == false){
        setDisabled([...disabled, 'noneAction']);
    }

    

    return ( 
        <div className="App">
            <div>
                <Board isPlaying={isPlaying} onGameFinish={handleIsPlayingChange} name="user1" color="blue" gameHistory={myHistory}/>
                <div className="buttonBox">
                    <div className="buttonContain">
                        <Button className='App-button' color="red" onClick={handleClearClick}>처음부터</Button>
                        <Button className={disabled.join(' ')} color="blue" onClick={handleRollClick}>던지기</Button>
                    </div>
                </div>
                <Board isPlaying={isPlaying} onGameFinish={handleIsPlayingChange} name="user2" color="red" gameHistory={otherHistory}/>
            </div>
        </div>
    );
}

export default App;//다른 파일에서도 활용할 수 있도록