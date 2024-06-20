import { useRef, useState } from "react";
import "./App.css";

function App() {
    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [ user, setUser ] = useState({ ...emptyUser });
    const [ userList, setUserList ] = useState([]);

    const handleInputChange = (e) => {
        setUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        })
        console.log(user);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13){
            switch(e.target.name) {
                case "username":
                    inputRef.password.current.focus();
                    break;
                case "password":
                    inputRef.name.current.focus();
                    break;
                case "name":
                    setUserList(userlist => [ ...userlist, user ]);
                    setUser({ ... emptyUser });
                    inputRef.username.current.focus();
                    break;
                default:

            }
        }
    }
    //  {/* 1.입력후에 엔터를 입력하면 다음 input으로 포커스 이동
    //         2. name 필드에서 엔터를 입력하면 배열에 user객체 추가하고 input value들 초기화*/}
    //         {/* 3.tbody -> tr 묶음을 userList에서 map을 통해 렌더링 
    //         4.table 디자인 -> border: 1px solid #dbdbdb; */}
        
    return <>
        <input name="username" placeholder="사용자명" onChange={handleInputChange} onKeyDown={handleInputKeyDown} ref={inputRef.username} value={user.username} />
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} onKeyDown={handleInputKeyDown} ref={inputRef.password} value={user.password} />
        <input name="name" placeholder="이름" onChange={handleInputChange} onKeyDown={handleInputKeyDown} ref={inputRef.name} value={user.name} />
        
        <table className="table-style">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>사용자이름</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                </tr>
            </thead>
            <tbody>
                { userList.map((user, index) => {
                    return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.name}</td>
                 </tr>)
                    
                }) }
            </tbody>
        </table>
    </>
}


export default App;