import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import Tags from '@yaireo/tagify/dist/react.tagify'
import './search.css';


// 기본 베이스 태그 셋팅하기 _ 태그 입력 불가 내용 및 최대 태그 갯수
const baseTagifySettings = {
  blacklist: ["수현", '뭉치'],
  maxTags: 5
}

function SearchTag(){
  const tagifyRef1 = useRef()
  const [tagifySettings] = useState([])
  const settings = {
    ...baseTagifySettings,
    ...tagifySettings}

  // 입력 태그 지우기 
  const clearAll = () => {
    tagifyRef1.current && tagifyRef1.current.removeAllTags()}

    
  return (
    <body className='body'>
       <div className='top'>
          <main className='search-main'>
            <p className='main-explane2'> <b>ME</b>:RIGHT </p>
            <h1 className='main-text2'> Search Image / Tag Page </h1>
          </main>
        </div>
    
        <div className='search-box'>
         <div className="search-title">
            <Link to='/search'>
              <h3> Search User's Image </h3>
            </Link>
              
            <Link to='/searchTag'>
              <h3> Search User's Tag </h3>
            </Link>
          </div>
         </div>


         <div className='tag-box'>
          <div className='search-tag-detail'>
              <h3> 태그 입력 가이드 </h3>
              <p> 1. 성함, 나이, 학력 등 검색하고 싶은 태그를 입력하세요. </p>
              <p> 2. 태그는 검색용도 외에 별도로 활용되지 않으며, 사용자의 요청에 따라 개인정보에 저장 및 삭제가 가능합니다. </p>
            </div>

            <button className="clearAllBtn" onClick={clearAll}>
                Clear
            </button>

            <br></br> 

            <div className='tags-box'>
              <Tags className='tags'
                tagifyRef={tagifyRef1}
                settings={settings}
                autoFocus={true}
                placeholder='Check Your Tag'
              />
            </div>
         </div>
      

    </body>
  )
}

export default SearchTag;