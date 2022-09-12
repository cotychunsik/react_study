//배열데이터를 처리해보자 

import React, {useState} from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td> 
            <td>{userData.email}</td>
        </tr>//전달받은 userData의 내용들

    )
}
const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name:'김말복'},
        {email: 'user2@gmail.com', name:'남도일'},
        {email: 'user3@gmail.com', name:'김전일'},
        {email: 'user4@gmail.com', name:'김계정'}
    ];//실무로 따지면 서버에서 받아온 데이터 

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        이름 
                    </th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}

            </tbody>
        </table>
    )
}

export default UserList;