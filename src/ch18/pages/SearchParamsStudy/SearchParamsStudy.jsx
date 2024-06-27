import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudy(props) {
    //searchparams : 객체형태
    const [ searchParams, setSearchParams ] = useSearchParams();
    // console.log(searchParams.getAll("a")); //동일한 키 값 여러개인 경우 배열로 모두 가져옴
    // console.log(searchParams.get("a")); //동일한 키 값 여러개인 경우 처음거 하나만
    // const values = searchParams.values(); //반복가능
    // console.log(values.next()); 
    // console.log(values.next()); 

    console.log(searchParams.get("a"));
    console.log(searchParams.get("b"));

    const handleClick = () => {
        const keys = searchParams.keys(); //키들이 들어감(반복가능한 형태)

        let newParams = {}

        for(let i = 0; i < searchParams.size; i++) {
            const key = keys.next().value; 
            const value = searchParams.get(key);
            newParams = {
                ...newParams,
                [key]: value
            }
        }
        setSearchParams({ ...newParams, c: 30 });
    }

    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>c=30 추가</button>
        </div>
    );
}

export default SearchParamsStudy;