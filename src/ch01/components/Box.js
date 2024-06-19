
function Box({ name, isShow, children }) {
    const result = true && 10; //결과 : 10
    const result_false = false && 10; //결과 false
    console.log(result); 

    // jsx 안에서 표현식에 false는 렌더링안됨, 연산자 사용 가능
    // isShow ? <h3>안녕하세요</h3> : null
    // isShow && <h3>안녕하세요</h3>
    return <div>
        <h1>{name}</h1>
        {children}
        {1 + 1}
        {isShow && <h3>안녕하세요</h3>} 
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>}
    </div>
}

export default Box;