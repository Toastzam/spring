import React, {useState} from 'react';
import './search.css';
import { Link } from 'react-router-dom';
import Tags from '@yaireo/tagify/dist/react.tagify'

// 기본 베이스 태그 셋팅하기 _ 태그 입력 불가 내용 및 최대 태그 갯수
const baseTagifySettings = {
  blacklist: ["수현", '뭉치'],
  maxTags: 5
}


function Search() {

  const [tagifySettings] = useState([])
  const settings = {
    ...baseTagifySettings,
    ...tagifySettings}


  const [fileImage, setFileImage] = useState("");
  const saveFileImage = (event) =>{
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };
  

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

      <div className='search-content'>
          <input className='input-img' type="file" accept='image/*' onChange={saveFileImage} />
          <div className='search-detail'>
            <h3> 이미지 업로드 가이드 </h3>
            <p> 1. 얼굴이 식별될 수 있는 사진을 올려주세요. 정면 사진을 권장합니다. </p>
            <p> 2. 본인의 사진만 사용해 주세요. 타인의 사진을 무단사용할 경우, 관련 법률에 따라 처벌될 수 있습니다. </p>
            <p> 3. 사진은 검색용도 외에 별도로 활용되지 않으며, 사용자의 요청에 따라 개인정보에 저장 및 삭제가 가능합니다. </p>
          </div>

            <div>
              {fileImage && ( <img alt='미리보기' src={fileImage} className='upload-img' />)}
            </div>

            <div className='search-tags-box'>
              <Tags className='tags'
                settings={settings}
                autoFocus={true}
                placeholder='Check Your Tag'
              />
            </div>
          </div>

</body>
  );
}

export default Search;