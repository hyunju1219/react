import { useEffect, useState } from "react";
import "./App.css";
function App() {

    const emptyProfile = {
        name: "",
        email: "",
        imgSrc: ""
    }

    const [ profile, setProfile ] = useState({ ...emptyProfile });

    useEffect(() => {
        const profile = localStorage.getItem("profile");
        setProfile(!profile ?  "" : JSON.parse(profile));
    }, []);


    const handleImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const filereader = new FileReader();

            filereader.onload = (e) => {
                setProfile(profile => {
                    return {
                        ...profile,
                        imgSrc: e.target.result
                    }
                });
            }

            filereader.readAsDataURL(file);
        }

    }

    const handleOnChange = (e) => {
        setProfile(profile => {
            return {
                ...profile,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleButtonClick = (e) => {
        localStorage.setItem("profile", JSON.stringify(profile));
        console.log(profile);
    }

    return (
        <div className="container">
            <div className="profile">
                <h1>프로필</h1>
                <div onClick={handleImgClick} className="img-container">
                    <img src={profile.imgSrc} alt="" />
                </div>
                <div>이름</div>
                <input type="text" name="name" onChange={handleOnChange} value={profile.name}/>
                <div>이메일</div>
                <input type="text" name="email" onChange={handleOnChange} value={profile.email} />
                <button onClick={handleButtonClick}>저장</button>
            </div>
        </div>
    );
}

export default App;