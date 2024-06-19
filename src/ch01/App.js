import { Fragment } from "react";
import Hello from "./components/Hello";
import "./App.css";
import CustomInput from "./components/CustomInput";
import Box from "./components/Box";
/*
  컴포넌트 -> 함수 -> html 태그를 리턴하는 함수
  앞글자는 대문자로 작성
  jsx 특징
  1. 태그를 열었으면 닫아야한다.
  2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야한다.
  3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야한다.
*/
function App() {
  const name = "김준일";
  const fontColorRed = {
    color: "red"
  };

  const age = <h2>{31}</h2>

  return <Fragment>
        <div>
          <Hello />  
        </div>
        {/*<div>
          <Hello></Hello>
        </div>*/}
        <h1 style={fontColorRed} className={"fs-20 itelic"}>{name}</h1>
        <CustomInput ph={"이름"} disabled={true} value={"김준일"} />
        <CustomInput ph={"나이"} disabled={false} />
        <CustomInput ph={"연락처"} disabled={true} />
        <Box name={"김준일"} isShow={true}>
          {age}
          <h2>{31}</h2>
        </Box>
  </Fragment>
}

export default App;
