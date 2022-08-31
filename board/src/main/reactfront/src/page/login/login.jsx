import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './login.css';
import logo from '../../img/logo.png'
import {Button} from '../../components/Button/Button-write';


// 아이콘 임포트
import id from '../../img/id.png';
import pw from '../../img/padlock.png';
import kakao from '../../img/kakao.png';



function Login() {

<body className='body-login'>
        <form class="login" action="account/login" method="post">

        <div className='login-box'>
            <img className='meright' src={logo} alt='logo'/>
        <div>
            <img className='sign-icon' src={id} alt='id'/>
            <input type="text" className='write' placeholder="   ID를 입력하세요"/>
        </div>
        
        <div>
            <img className='sign-icon' src={pw} alt='password'/>
            <input type="password" className='write' placeholder="   Password를 입력하세요"/>
        </div>

        <div className='submit'>
            <Button buttonStyle = 'btn--outline'>로그인</Button>
                <br/>
            <a href='/kakaoLogin'>
                <img className='kakao' src={kakao} alt='카카오로그인'></img>
            </a>
            <p className="detail-login">계정이 없으신가요? <a href="./signup">회원가입하기</a></p>
        </div>
        </div>
        </form>
    </body>
}
export default Login;