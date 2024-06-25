function App() {

    const handleLoadImgClick = () => {
        const fileElement = document.createElement("input"); //input 객체 생성
        fileElement.setAttribute("type", "file");
        fileElement.setAttribute("multiple", true); //복수선택
        fileElement.click();
        //console.log(fileElement.files);
        fileElement.onchange = (e) => {
            console.log(e.target.files);
        }

    }

    return (
        <>
        <button onClick={handleLoadImgClick}>이미지 불러오기</button>
        <input type="file" multiple={true} />
        </>
    );
}

export default App;