import React from 'react';
import { Link } from 'react-router-dom';
// import Chatting from '../../img/chat.png';
import Chatting from '../../img/chat.gif';
// import Chatting from '../../img/chat1.gif';

import './chat-icon.css';

function Chat() {
    return (
        <>
            <Link to='#' onClick={() => window.open('http://localhost:3000/chatting', 'CHATTING', 'top=0, left=300, width=600, height=500')}>
                <img className='chat-icon' src={Chatting} alt='chatIcon'></img>
            </Link>
        </>
    );
}
  
  export default Chat;