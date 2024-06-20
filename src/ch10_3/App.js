import { useRef, useState } from "react";
import "./App.css";
function App() {
    const emptyUser = {
        id: 0,
        username: "",
        password: "",
        name: ""
    }
    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({ ...emptyUser });

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "username":
                    inputRef.password.current.focus();
                    break;
                case "password":
                    inputRef.name.current.focus();
                    break;
                case "name":
                    inputRef.username.current.focus();
                    setUserList(userList => [ ...userList, inputData ])
                    setInputData({...emptyUser});
                    break;
                default:
            }
        }
    } 

    const handleInputChange = (e) => {
        const userIds = userList.map(({id}) => id).sort();
        const maxId = userIds.length === 0 ? 1 : Math.max.apply(null, userIds) + 1;
        setInputData(inputData => {
            return{
                ...inputData,
                [e.target.name]: e.target.value,
                ["id"]: maxId
            }
        })
    }



    const handleDeleteClick = (e) => {
       setUserList(userList => userList.filter(user => user.id !== parseInt(e.target.value))) 
    }

    return <>
        <input name="username" placeholder="사용자이름" 
        onKeyDown={handleInputKeyDown} 
        onChange={handleInputChange}
        value={inputData.username}
        ref={inputRef.username} />
        <input name="password" placeholder="패스워드" 
        onKeyDown={handleInputKeyDown} 
        onChange={handleInputChange}
        value={inputData.password}
        ref={inputRef.password} />
        <input name="name" placeholder="이름" 
        onKeyDown={handleInputKeyDown} 
        onChange={handleInputChange}
        value={inputData.name}
        ref={inputRef.name} />

        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>닉네임</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                { 
                    userList.map(({ id, username, password, name }, index) => {
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{username}</td>
                                <td>{password}</td>
                                <td>{name}</td>
                                <td>
                                    <button onClick={handleDeleteClick} value={id}>삭제</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;