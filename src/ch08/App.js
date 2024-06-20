import { useRef } from "react";

function App() {
    //use로 시작하는 함수(Hooks함수)는 함수안에 들어갈 수 없다.
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }

    // const aRef = useRef();
    // const bRef = useRef();
    // const cRef = useRef();
    
    // console.log(aRef);
    // console.log(bRef);
    // console.log(cRef);

    const handleKeyDown = (e) => {
        //const inputs = document.querySelectorAll("input"); //직접접근
    
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    inputRef.b.current.focus();
                    break;
                case "b":
                    inputRef.c.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    break;
                default:
            }
        } 
    }

    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a} />
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b} />
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c} />
    </>
}

export default App;