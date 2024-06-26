import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function RouteStudySubPage1(props) {
    return (
            <div>
                <ul>
                    <Link to={"./name"}><li>이름</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
                </ul>
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