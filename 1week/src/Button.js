function Button({children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
    //children : 컴퍼런트의 자식들을 값으로 만든 prop
  }
  
  export default Button;