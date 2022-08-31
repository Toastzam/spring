import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom'

// 이미지 임포트
import son from '../../img/son.jpg';
import {FaPaperPlane} from 'react-icons/fa'; //아이콘 임포트


function Yejeong() {
    return (
      <body className='profile-body body'>
        <div className='side-bar'>
        <section class="module-small">
          <div class="container">
            <div class="row">
              <div class="col-sm-4 col-md-3 sidebar">
                <div class="widget">
                <img src={son} alt="yejeong-Son" className='profile-img1'/>
                  <form role="form">
                    <div class="search-box">
                      <input class="form-control" type="text" placeholder="  MESSAGE"/>
                      <button class="search-btn" type="submit"><i><FaPaperPlane/></i></button>
                    </div>
                  </form>
                </div>

                <div class="widget">
                  <h5 class="widget-title font-alt">Members</h5>
                  <ul class="icon-list">
                    <Link to='/eunhye'><li className='name'>Eunhye Kang</li></Link>
                    <Link to='/junmo'><li className='name'>Junmo Park</li></Link>
                    <Link to='/seokran'><li className='name'>Seokran Bae</li></Link>
                    <Link to='/suhyun'><li className='name'>Suhyun Yoo</li></Link>
                    <Link to='/minji'><li className='name'>Minji Jin</li></Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>

        <div className='intro'>
          <div className='intro-detail'>
              <header>
                <p className='names'> YEJEONG SON </p>
                <div className='intro-detail'>
                  <p>🎂1992.07.14</p>
                  <p>📩 wkfthd1234@gmail.com</p>
                </div>
              </header>

              <article className='main-intro'>
                <p className='bb'><b className='bb'>희망직무분야 :</b> Back-end</p>
                <p className='bb'><b className='bb'>맡은 역할 :</b> 서버 구축</p><br></br>
              </article>
            </div>
          </div>
    </body>
  );
}

export default Yejeong;