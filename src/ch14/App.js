import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = () => {

        //<input type="file" multiple={true} />
        const fileElement = document.createElement("input"); //input 객체 생성
        //속성
        fileElement.setAttribute("type", "file"); //타입을 파일로 지정
        fileElement.setAttribute("multiple", true); //복수선택
        fileElement.click(); //위에서 만든 input이 클릭된다.
        //console.log(fileElement.files);

        fileElement.onchange = (e) => {
            const file = e.target.files[0]; //실제 파일 데이터
            const filereader = new FileReader(); //데이터 url가져오기 위함
            filereader.onload = (e) => {
                setImgSrc(e.target.result);
            }

            filereader.readAsDataURL(file); // click, 호출되면 onload 실행, 파일의 url 가져옴
        }

    }

    return (
        <>
        <button onClick={handleLoadImgClick}>이미지 불러오기</button>
        <input type="file" multiple={true} />
        <div>
            <img src={imgSrc} alt="" />
        </div>
        </>
    );
}

export default App;