import React, {useEffect,useState} from 'react';
import './board.css';
import {Button} from '../../components/Button/Button-write';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Board() {

const [list, setList] = useState([]);

useEffect(() => {
    axios.get('/api/boards').then((res) => {
    setList(res.data)
    console.log(res)
    })
},[])

    return (
      <body className='body-board'>
              <h1>Board List</h1>
              {
                list.map(function(a,i){
                  return(
                    <div>
                    <div>{list[i].id}</div>
                    <div>{list[i].title}</div>
                    <div>{list[i].content}</div>
                    </div>
                  )
                })
              }
        <form className='btn-bg'>
            <Link to='/write'>
                <Button buttonStyle = 'btn--outline'>글쓰기</Button>
            </Link>
        </form>

      </body>
    )
}

export default Board;

