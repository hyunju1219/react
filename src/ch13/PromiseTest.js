function PromiseTest() {
    /**
     * Promise 비동기 객체
     * 콜백함수를 매개변수로 가짐
     * 프로미스는 생성되면 바로 실행된다.
     * then은 순서대로 작동(비동기 안의 동기)
     * 
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 
     * 2. 이행 -> 연산이 성공했을 때의 상태 then (첫번째 매개변수는 resolve의 매개변수 값을 가져온다.)
     * resolve 호출하면 then이 실행되고 esolve의 매개변수 값을 result로 가져옴
     * 
     * 3. 거부 -> 연산을 실패했을 때의 상태 catch
     */

    //함수가 호출되면 프로미스가 생성되고 실행된다.
    //프로미스 정의
    function p1(name) {
        //resolve(이행), reject(거부)
        return new Promise((resolve, reject) => {
            //대기(동기)
            console.log(name + "프로미스 생성");
            //이행(비동기), 매개변수가 result, 없어도됨
            if(!name) {
                reject("오류"); //then이 있어도 catch 실행
            }
            resolve(name); //resolve가 없으면 then실행안됨
        });
    
    }
    //버튼을 클릭하면 프로미스 생성
    const handleClick = () => {
        //프로미스 실행
        p1("p1")
        .then(result => {
            //비동기
            console.log("이행");
            console.log(result);
            if(true) {
               throw new Error("거부"); //거부(reject)
            }
            return "두번째 then"; //이행(resolve)
            //then(프로미스) 대기 상태, return 이행 상태 (then의 return이 프로미스)
        })
        .then(result => {
           console.log(result); 
        })
        .catch(error => {
            //console.log(error);
        }); 
        //then은 순서대로 작동(비동기 안의 동기)
        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    return (
        <>
            <button onClick={handleClick}>promise</button>
        </>
    );
}

export default PromiseTest;