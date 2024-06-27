import React, { useCallback, useEffect, useMemo, useState } from 'react';

function MemorizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);
    
    //useMemo : 값을 저장 / useCallback : 함수 정의
    //useEffect(리턴값이 없음)와 비슷, 리턴값이 변수로 들어감, 불필요한 연산 줄여줌
    
    const a = useMemo(() =>{ 
        console.log(num);
        return num + 10;
    }, [num]);
 
    //대괄호 없으면 재실행될 때마다 계속 실행
    // const a = useMemo(() =>{ 
    //     console.log(num);
    //     return num + 10;
    // });

    //디펜던시 없으면 최초 한번만 실행
    // const a = useMemo(() =>{ 
    //     console.log(num);
    //     return num + 10;
    // }, []);


    //b가 계속 초기화됨
    let b = null;
    useEffect(() => {
        b = num + 30;
    }, [num]);

    // const b = num + 10;
  
    //최초 한 번만 정의
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []); 

    //랜더링될 때마다 정의
    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    const handleClick = useCallback(() => {
        setNum(parseInt(value));
    }, [value]);

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
            <button onClick={handleClick}>확인</button>        
        </div>
    );
}

export default MemorizationPage;