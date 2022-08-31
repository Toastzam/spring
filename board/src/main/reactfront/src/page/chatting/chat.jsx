import React from 'react';
// import ChatBot from 'react-simple-chatbot';
import './chat.css';


function Chatting() {
    // const steps = [
    //     {
    //         id:'0'
    //         message : 'user님 안녕하세요. 상담 챗봇입니다',
    //         trigger: '1'
    //     }
    // ]
    return (
        <body className='chat-body'>
        <div className='chat-box'>
            <h1> 채팅페이지 </h1>
            <div className='chatting'>
                <br></br>
                <p className='left'> 안녕? </p>
                <br></br>
                <p className='right'> 웅 안녕? </p>
                <br></br>
                <p className='left'> 나랑 놀자 </p>
                <br></br>
                <p className='right'> 그래 놀자 </p>
            </div>
            <div className='send'>
                <input className='send-text' type='text' placeholder='   메세지를 입력하세요' ></input>
                <button className='send-icon'><i className="fa fa-paper-plane"></i></button>
            </div>
        </div>


        </body>

    )
}
    
    export default Chatting;