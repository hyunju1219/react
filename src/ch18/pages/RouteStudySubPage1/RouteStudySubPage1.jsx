import React from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function RouteStudySubPage1(props) {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    // const arr = location.pathname.split("/");
    // const name = arr[arr.length - 1];
    // console.log(name);
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));


    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true}); //replace : 페이지 전체 새로고침 여부, 히스토리 없어서 뒤로가기 안됨
        // window.location.href = "https://naver.com" => replace: false
        // window.location.replace("https://naver.com") => replace: true
    }

    return (
            <div>
                <ul>
                    <Link to={"./name"}><li>이름</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
                </ul>
                <button onClick={handleAgeClick}>나이</button>
                <div>
                    <Routes>
                        <Route path="/name" element={<h1>박현주</h1>}/>
                        <Route path="/age" element={<h1>24</h1>}/>
                        <Route path="/address" element={<h1>개금</h1>}/>
                    </Routes>
                </div>
            </div>
    );
}


export default RouteStudySubPage1;