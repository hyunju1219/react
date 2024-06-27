import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
function App() {
    const test = {
        a: "aaa",
        b: "bbb"
    }
    console.log(test.a);
    //객체 참조 방법
    console.log(test["a"]);


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
    
    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} 수정`,
            input: "text",
            inputValue: userList[index][key],
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.map((user, i) => { //map에서 반환된 결과(배열)를 스프레드를 사용해 배열에 담는다.
                    if(i === index) {
                        return {
                            ...user,
                            [key]: result.value
                        }
                    }
                    return user;
                }) ]);
            }
        });
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title:"사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => userList.filter(user => user.id !== parseInt(e.target.value))) 
            }
            console.log(result);
        });
        // if(window.confirm("해당 사용자를 삭제하시겠습니까?")) {
        //     //setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))])
        //     setUserList(userList => userList.filter(user => user.id !== parseInt(e.target.value))) 
        // }

    }
    

    return <>
        <input name="username" placeholder="사용자이름" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.username}
            ref={inputRef.username} 
        />
        <input name="password" placeholder="패스워드" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.password}
            ref={inputRef.password} 
        />
        <input name="name" placeholder="이름" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.name}
            ref={inputRef.name} 
        />

        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>닉네임</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                { 
                    userList.map(({ id, username, password, name }, index) => {
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td onClick={() => handleEditClick("username", index)}>{username}</td>
                                <td onClick={() => handleEditClick("password", index)}>{password}</td>
                                <td onClick={() => handleEditClick("name", index)}>{name}</td>
                                <td>
                                    <button value={index}>수정</button>
                                </td>
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