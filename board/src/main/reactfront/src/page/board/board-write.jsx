import React from 'react';
import './board.css';
import {Button} from '../../components/Button/Button-write';
import {Link} from 'react-router-dom';


function Board() {
    return (
      <body className='body-board'>
        <h1 className='board-title'> 글쓰기 </h1>
        <div className='write-box'>
            <input className='text-title-box' type='text' placeholder='제목을 입력하세요'/>
            <textarea onChange placeholder='내용을 입력하세요' className='text-box'/>
        </div>

        <input type="file" className='file-input'/>


        <form className='btn-bg'>
            <Link to='/board'>
                <Button buttonStyle = 'btn--outline'>글쓰기</Button>
            </Link>
        </form>

      </body>
    )
}

export default Board;
