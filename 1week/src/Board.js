import Dice from './Dice';
import './Board.css';

function Board({name, color, gameHistory, isPlaying, onGameFinish}){
    const num = gameHistory[gameHistory.length - 1] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0);

    const boardClass = ['board'];
    if (sum >= 10) { // 합산 점수가 100을 넘길 때
        boardClass.push('winner');
        if (isPlaying) { // 게임이 진행 중이면
            onGameFinish(false); // 게임을 종료
        }
    } else if (!isPlaying) {
        boardClass.push('loser');
    }
    
    /*
    sum >= 100 && isPlaying // 게임이 진행 중이면
    <board class="winner"></board>
    <board class=""></board>

    게임을 종료
    <board class="winner"></board>
    <board class="loser"></board>
    */

   return ( //return문을 소괄호()로 감싸면 여러줄 쓸 수 있음
        //props : 리액트 컴포넌트에 지정한 속성(전달된 속성 모두)
        //prop : 리액트 컴포넌트에 지정한 각각의 속성

        <div className={boardClass.join(' ')}>
            <h2>{name}</h2>
            <Dice color={color} num={num}/>
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p className="history">{gameHistory.join(', ')}</p>
        </div>
        //join : 배열의 원소들을 연결하여 하나의 값(문장)으로 만듬
        
    );
}

export default Board;//다른 파일에서도 활용할 수 있도록