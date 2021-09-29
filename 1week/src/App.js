import Dice from './Dice';
import HandIcon from './HanIcon';

const img = './assets/rock.svg'

function App(){
    return ( //return문을 소괄호()로 감싸면 여러줄 쓸 수 있음
        //props : 리액트 컴포넌트에 지정한 속성(전달된 속성 모두)
        //prop : 리액트 컴포넌트에 지정한 각각의 속성
        <div>
            <Dice color="red" num={2}/>
            <HandIcon/>
        </div>
    );
}


export default App;//다른 파일에서도 활용할 수 있도록