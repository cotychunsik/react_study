import React, {useState} from "react";


const Input2 = () => {
//여러개의 데이터를 한번에 받아 처리하는 방법-오브젝트 형태로 정리하면됨 
    const [inputs, setInputs] = useState({
        name: "", //마찬가지로 기본값은 빈배열 
        email: "",
        tel: ""
    })
    const {name, email, tel} = inputs;

    const userInfo = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs, //deep copy해주는 것임 , shallow copy아님 : 위에 useState뒤에 쓴것처럼 입력되는 것과 마찬가지 (=스프레드로 입력해주는 것)
            [id] : value
        })//어떤값을 변경할지 정의해주면 됨 
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={userInfo}></input>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={userInfo}></input>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={userInfo}></input>
            </div>
        <p>정상적으로 출력되나 보자</p>
        <p>이름: {name}</p>
        <p>이메일: {email}</p>
        <p>전번: {tel}</p>
        </div>

    )
}

export default Input2;
