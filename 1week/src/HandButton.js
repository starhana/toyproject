import HandIcon from './HanIcon';


function HandButton({value, onClick}) {
    //const handleClick = (value) => console.log(value); 화사표 축약
    const handleClick = function() {
        onClick(value);
        //onClick에 value전달
    };

    return (
      <button onClick={handleClick}>
        <HandIcon value={value} />
      </button>
    );
  };


export default HandButton;