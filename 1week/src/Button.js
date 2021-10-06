import './button.css';

function Button({children, onClick, color='blue', className=''}) {
    const classNames = `Button ${color} ${className}`
    return <button className={classNames} onClick={onClick}>{children}</button>;
    //children : 컴퍼런트의 자식들을 값으로 만든 prop
  }
  
  export default Button;