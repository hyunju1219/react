import { useEffect, useState } from "react";
import "./App.css";
function App() {

    const emptyInput = {
        name: "",
        email: ""
    }

    const [ imgSrc, setImgSrc ] = useState("");
    const [ inputData, setInputData ] = useState({ ...emptyInput });

    useEffect(() => {
        const profile = localStorage.getItem("profile");
        const { imgSrc, ...input } = !profile ?  "" : JSON.parse(profile);
        setImgSrc(!imgSrc ? "" : imgSrc);
        setInputData(!input ? { ...emptyInput } : input);
    }, []);

    const handleImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const filereader = new FileReader();

            filereader.onload = (e) => {
                setImgSrc(e.target.result);
            }

            filereader.readAsDataURL(file);
        }

    }

    const handleOnChange = (e) => {
        const input = {
            ...inputData,
            [e.target.name]: e.target.value
        }
        setInputData(input);
    }

    const handleButtonClick = (e) => {
        const profile = {
            ["imgSrc"]: imgSrc,
            ...inputData
        }
        localStorage.setItem("profile", JSON.stringify(profile));
        console.log(profile);
    }

    return (
        <div className="container">
            <div className="profile">
                <h1>프로필</h1>
                <div onClick={handleImgClick} className="img-container">
                    <img src={imgSrc} alt="" />
                </div>
                <div>이름</div>
                <input type="text" name="name" onChange={handleOnChange} value={inputData.name}/>
                <div>이메일</div>
                <input type="text" name="email" onChange={handleOnChange} value={inputData.email} />
                <button onClick={handleButtonClick}>저장</button>
            </div>
        </div>
    );
}

export default App;