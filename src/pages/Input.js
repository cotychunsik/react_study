import React, {useState} from "react";


const Input = () => {
    const [txtValue, setTextValue] = useState(""); //초기값은 빈배열이다는 뜻
    const Change = (e) => {
        setTextValue(e.target.value) 

    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={Change}/>
            <br/>
            <p>하단에는 입력한 텍스트가 출력됨</p>
            <p>{txtValue}</p>
        </div>
    )
}

export default Input;

    