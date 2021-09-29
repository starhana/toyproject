import HandIcon from './HanIcon';


function HandButton({value, onClick }) {
    //const handleClick = () => onClick(value); 화살표 축약
    const handleClick = function() {
        onClick(value);
      };
    return (
      <button onClick={handleClick}>
        <HandIcon value={value} />
      </button>
    );
  };


export default HandButton;