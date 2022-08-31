import React from 'react';
import './mypage.css';

function MyPage() {
    return (
        <body className='mypage-body'>
            <h3> My Page </h3>

            <div className='mp-content'>
                <fieldset className='user-box'> 
                    <legend> 회원 정보 </legend>
                    <img src='https://cdn-icons-png.flaticon.com/512/711/711769.png' alt='profile-icon'/>
                    <table>
                        <tr>
                            <th> ID</th>
                            <th> Name </th>
                            <th> E-mail </th>
                        </tr>

                        <tr>
                            <td> mongchi315 </td>
                            <td> 유수현 </td>
                            <td> mongchi315@naver.com </td>
                        </tr>
                    </table>

                    <button className='account-edit-btn'> 계정 수정 </button>
                </fieldset>

                <fieldset className='user-search-box'> 
                    <legend> 검색 정보 </legend>
                    <p> Img </p>
                    <p> URL </p>
                </fieldset>
            </div>

            <div className='mp-content'>
                <fieldset className='user-board-box'> 
                        <legend> 게시판 </legend>
                        <p> 내가 작성한 글 </p>
                        <p> 좋아요 / 싫어요 글 </p>
                        <p> 저장한 게시글 </p>
                </fieldset>
            </div>



        </body>
    )
}

export default MyPage;