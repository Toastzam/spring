import React from 'react';
import './introduction.css';
// import { Link } from 'react-router-dom';


// 슬라이드 이미지 임포트
import lawtalk from '../../img/lawtalk.png';
// import lawgood from '../../img/lawgood.png';
// import law2 from '../../img/law2.png';


function Introduction() {
    return (
      <body className='body-introduction'>
        <div className='law-box'>
          <fieldset>
            <legend> 개인정보 보호법 제2조 </legend>
            <p> 1. <b className='law-b'>'개인정보'</b>란, 살아있는 개인에 관한 정보로서 다음 각 목의 어느 하나에 해당하는 정보를 말한다. </p>
            <div className='detail'>
            <p> 가. 성명, 주민등록번호 및 영상 등을 통하여 개인을 알아볼 수 있는 정보 </p>
            <p> 나. 해당 정보만으로는 특정 개인을 알아볼 수 없더라도 다른 정보의 입수 가능성 등 개인을 알아보는데 소요되는 시간, 비용, 기술 등을 합리적으로 고려하여야 한다. </p>
            <p> 다. 가목 또는 나목을 제1호의2에 따라 가명처리함으로써 원래의 상태로 복원하기 위한 추가 정보의 사용ㆍ결합 없이는 특정 개인을 알아볼 수 없는 정보(이하 "가명정보"라 한다)
                1의2. "가명처리"란 개인정보의 일부를 삭제하거나 일부 또는 전부를 대체하는 등의 방법으로 추가 정보가 없이는 특정 개인을 알아볼 수 없도록 처리하는 것을 말한다.</p>
            </div>
          </fieldset>

          <fieldset>
            <legend> 무슨 법이 또 있을까 </legend>
            <p> 1. <b className='law-b'>'개인정보'</b>란, 살아있는 개인에 관한 정보로서 다음 각 목의 어느 하나에 해당하는 정보를 말한다. </p>
            <div className='detail'>
            <p> 가. 성명, 주민등록번호 및 영상 등을 통하여 개인을 알아볼 수 있는 정보 </p>
            <p> 나. 해당 정보만으로는 특정 개인을 알아볼 수 없더라도 다른 정보의 입수 가능성 등 개인을 알아보는데 소요되는 시간, 비용, 기술 등을 합리적으로 고려하여야 한다. </p>
            <p> 다. 가목 또는 나목을 제1호의2에 따라 가명처리함으로써 원래의 상태로 복원하기 위한 추가 정보의 사용ㆍ결합 없이는 특정 개인을 알아볼 수 없는 정보(이하 "가명정보"라 한다)
                1의2. "가명처리"란 개인정보의 일부를 삭제하거나 일부 또는 전부를 대체하는 등의 방법으로 추가 정보가 없이는 특정 개인을 알아볼 수 없도록 처리하는 것을 말한다.</p>
            </div>
          </fieldset>
        </div>

        <div className='radio-box'>

          <img src={lawtalk} alt='lawtalk'/>

          <fieldset className='radio-field-box'>
            <input type="radio" name="radio" value="로톡" onClick={() => window.open('https://www.lawtalk.co.kr/')} /> Lawtalk &emsp;
            <input type="radio" name="radio" value="로앤굿" onClick={() => window.open('https://www.lawandgood.com/')} /> Lawngood &emsp;
          </fieldset>

        </div>
        

      </body>
    )
}

export default Introduction;