import { useEffect, useState } from "react";

function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

    //매개변수: 함수(조건이 변했을 때 실행되는 함수), dependency배열(조건 여러개 가능)
    //첫 호출때 무조건 한 번 실행, 그 다음부턴 상태 변할 때 호출(number3에 number * 10 값이 들어가있음)
    useEffect(() => {
        //마운트 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            //언마운트 지점
        }
    }, [number, number2]);

    // 의존값이 없을 경우 최초한 번만 실행되기 때문에 초기값을 지정하는 용도
    // useEffect(() => {
    //     console.log("test");
    //     setNumber3(number * 10);
    // }, []);

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
    );
}

export default App;