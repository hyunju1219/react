import { useState } from "react"

function App() {
    const[ num, setNum ] = useState(0);
    let num2 = 0; 

    const handleClick = (e) => {
        const value = parseInt(e.target.value);
       //setNum(num + value); //값이면 바로 value에 넣음
        setNum(n => n + value); //함수가 들어오면 기존 값을 매개변수로 받고 리턴값을 value에 넣음
        num2 += value;
        console.log(num2);
    }

    console.log(num);
    console.log(num2);

    return <>
            <h1>번호: {num}</h1>
            <h1>번호2: {num2}</h1>
            <button onClick={handleClick} value={-10}>-10</button>
            <button onClick={handleClick} value={+10}>+10</button>
            <button onClick={handleClick} value={-100}>-100</button>
            <button onClick={handleClick} value={+100}>+100</button>

    </>
}  

export default App;