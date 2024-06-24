import { useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, setProducts }) {

    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef(),
    }
    const [ inputData, setInputData ] = useState({ ...emptyProduct });

    const handleInputChange = (e) => {
        //괄호로 묶으면 값으로 리턴
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "productName") {
                inputRef.size.current.focus();
            }   
            if(e.target.name === "size") {
                inputRef.color.current.focus();
            }   
            if(e.target.name === "color") {
                inputRef.price.current.focus();
            }   
            if(e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }  
        }
         
    };

//     setInputData(inputData => {
//             return{
//              ...inputData,
//              [e.target.name]: e.target.value
//             }
//      });
    
    //추가,수정,삭제버튼
    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }
    
    //확인버튼
    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = productIds.length === 0 ? 0 : Math.max.apply(null, productIds);
                return [ ...products, { ...inputData, id: maxId + 1 } ];
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 2000
            });    
        }
        if(mode === 2) {
            alert("상품수정");   
        }
        if(mode === 3) {
            alert("상품삭제");   
        }
        resetMode();
    }

    //취소버튼
    const handleCancleClick = () => {
        resetMode();
    }
    //조회모드로 변경
    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }

    return (
        <header className="table-header">
                <div className="input-group">
                    <input 
                        type="text" 
                        disabled={mode === 0 || mode === 3} 
                        name="productName"
                        value={inputData.productName}
                        placeholder="상품명" 
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef.productName}
                        autoFocus
                    />
                    <input 
                        type="text" 
                        disabled={mode === 0 || mode === 3} 
                        name="size"
                        value={inputData.size}
                        placeholder="사이즈"  
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef.size}
                    />
                    <input 
                        type="text" 
                        disabled={mode === 0 || mode === 3} 
                        name="color"
                        value={inputData.color}
                        placeholder="색상"  
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef.color}
                    />
                    <input 
                        type="text" 
                        disabled={mode === 0 || mode === 3} 
                        name="price"
                        value={inputData.price}
                        placeholder="가격"  
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        ref={inputRef.price}
                    />
                </div>     
                <div>
                    {
                        // mode가 0이면 보이는 부분
                        !mode && (
                            <div className="button-group">
                                <button onClick={handleChangeModeClick} value={1}>추가</button>
                                <button onClick={handleChangeModeClick} value={2}>수정</button>
                                <button onClick={handleChangeModeClick} value={3}>삭제</button>
                            </div>
                        )
                    }

                    {
                        !!mode && (
                            <div className="button-group">
                                <button onClick={handleSubmitClick}>확인</button>
                                <button onClick={handleCancleClick}>취소</button>
                            </div>
                        )
                    }
                    
                </div>
        </header>
    );
}

export default DataTableHeader;