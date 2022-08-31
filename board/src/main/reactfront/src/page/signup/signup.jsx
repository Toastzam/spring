import React from 'react';
import './signup.css';
import logo from '../../img/logo.png'
import {Button} from '../../components/Button/Button-write';


// 아이콘 임포트
import id from '../../img/id.png';
import pw from '../../img/padlock.png';
import pwcheck from '../../img/check.png';
import email from '../../img/email.png'

function Signup() {
    return (
    <body className='body-signup'>
        <div className='signup-box'>
            <img className='meright' src={logo} alt='logo'/>
        <div>
            <img className='sign-icon' src={id} alt='id'/>
            <input type='text' className='write' placeholder='   ID를 입력하세요'/><br/>
        </div>

        <div>
            <img className='sign-icon' src={email} alt='email'/>
            <input type='text' className='write' placeholder='   Email을 입력하세요'/>
        </div>
        
        <div>
            <img className='sign-icon' src={pw} alt='password'/>
            <input type='password' className='write' placeholder='   Password를 입력하세요'/>
        </div>

        <div>
            <img className='sign-icon' src={pwcheck} alt='passwordCheck'/>
            <input type='password' className='write' placeholder='   Password를 다시 한 번 입력하세요'/>
        </div>

        <div className="row">
            <Button buttonStyle = 'btn--outline'>회원가입</Button>
            <p className="detail-signup">이미 계정을 가지고 계신가요? <a href="./login">지금 로그인하기</a></p>
        </div>

        </div>
    </body>
)
}

export default Signup;