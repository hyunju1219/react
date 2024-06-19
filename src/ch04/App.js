import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function App() {
    // <h1>번호: {number}</h1>
    //     <Button text={"증가"} setNumber={setNumber} />
    //     <Button text={"감소"} setNumber={setNumber} />
    const [ str, setStr ] = useState("");
    return <>
        <Input value={ str }/>
        <Input ph={"입력"} />
    </>
}

export default App;