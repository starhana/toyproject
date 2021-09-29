import { Fragment } from 'react';
import ReactDOM from 'react-dom';

let wins = { 
  rock: 'scissor', //주먹 > 가위
  scissor: 'paper', //가위 > 보
  paper: 'rock', //보 >주먹
}

let me = "rock";
let other = "scissor";

function getResult(left, right){
  if(wins[left] === right){
    return '승리';
  }else if(left === wins[right]){
    return '패배';
  }else{return '무승부';}

}
getResult(me, other);

function handleClick(){
  console.log("가위 바위 보!");
}

ReactDOM.render(
  <Fragment>
    <h1>가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </Fragment>
  ,document.getElementById('root')
);
