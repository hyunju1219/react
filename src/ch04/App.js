import { useState } from "react";
import Button from "./Button";

function App() {
    const [ number, setNumber ] = useState("");
    return <>
        <h1>번호: {number}</h1>
        <Button text={"증가"} setNumber={setNumber} />
        <Button text={"감소"} setNumber={setNumber} />
    </>
}

export default App;