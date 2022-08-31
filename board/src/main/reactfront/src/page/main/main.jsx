import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

// 사진 임포트
import search from '../../img/search.png';
import digital from '../../img/digital.png';
import services from '../../img/services.png';

// 아이콘 임포트
import css from '../../img/css.png';
import js from '../../img/javascript.png';
import react from '../../img/react-icon.png';
import mysql from '../../img/mysql.png';
import javaSpring from '../../img/javaSpring.png';
import docker from '../../img/docker.png';
import django from '../../img/django.png';
import python from '../../img/python.png';

function Home() {
    return (
        <body className='body'>
          
        <div>
          <main className='main'>
            <h1 className='main-text1'> <span className='me'>M E</span> : R I G H T </h1>
            <p className='main-explane1'> 1) 개인이 원치 않는 인터넷 기록 정리 </p>
            <p className='main-explane1'> 2) 망자의 디지털 흔적(디지털 유산) 정리 </p>
            <p className='main-explane1'> 3) 근거 없는 비방 게시물 및 허위 사실 정리 </p>
          </main>
        </div>
  
        <section className='module-medium' id="demos">
          <div className='container'>
            <div className='row multi-columns-row'>
              <Link to='./information'>
              <div className='main-box col-md-4 col-sm-6 col-xs-12'>
                  <img className='content-box-image' src={digital} alt='services'/>
                  <h3 className='content-box-title'> Information </h3>
              </div>
              </Link>
              <Link to='/search'>
              <div className='main-box col-md-4 col-sm-6 col-xs-12'>
                  <img className='content-box-image' src={search} alt='board'/>
                  <h3 className='content-box-title'> Services </h3>
              </div>
              </Link>
              <Link to='/board'>
              <div className='main-box col-md-4 col-sm-6 col-xs-12'>
                  <img className='content-box-image' src={services} alt='mongchi'/>
                  <h3 className='content-box-title'> Board </h3>
              </div>
              </Link>
            </div>
          </div>
        </section>

<hr className='main-hr'></hr>

        <section className="module-medium">
          <div className="container">
            <div className="client">

                <div className="main-item">
                    <div className="client-logo">
                      <img className='main-img' src={js} alt="JavaScript Logo"/></div>
                </div>

                <div className="main-item">
                    <div className="client-logo">
                      <img className='main-img' src={css} alt="CSS Logo"/></div>
                </div>

                <div className="main-item">
                    <div className="client-logo">
                      <img className='main-img' src={react} alt="React Logo"/></div>
                </div>

                <div className="main-item">
                    <div className="client-logo">
                      <img className='main-img' src={mysql} alt="MySQL Logo"/></div>
                </div>

                <div className="main-item">
                    <div className="client-logo">
                      <img className='main-img' src={javaSpring} alt="javaSpring Logo"/></div>
                </div>

                <div className="main-item">
                    <div className="client-logo">
                      <img className='main-img' src={docker} alt="docker Logo"/></div>
                </div>

                <div className="main-item">
                    <div className="client-logo">
                      <img className='main-img' src={django} alt="django Logo"/></div>
                </div>
                
                <div className="main-item">
                    <div className="client-logo">
                      <img className='main-img' src={python} alt="python Logo"/></div>
                </div>
                
              </div>
            </div>
        </section>
    


      </body>
    )
}

export default Home;