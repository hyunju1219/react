import { useState } from "react";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    const [ user, setUser ] = useState({ ...emptyUser });
    const [ user2, setUser2 ] = useState({ ...emptyUser });

    const handleInputChange = (e) => {
        setUser2(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleOkClick = () => {
        setUser(user2);
        setUser2({...emptyUser});
    }

    return<>
        <input name="username" placeholder="사용자이름" onChange={handleInputChange} value={user2.username}/>
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} value={user2.password}/>
        <input name="email" placeholder="이메일" onChange={handleInputChange} value={user2.email}/>
        <button onClick={handleOkClick}>확인</button>
        <ul>
            <li>사용자이름: {user.username}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>
        </ul>
    </>
}

export default App;