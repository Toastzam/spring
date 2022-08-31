import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/footer';
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import ChatIcon from './components/ChatIcon/chat-icon';
import axios from 'axios';

// 서비스 페이지
import Main from './page/main/main';
import Search from './page/search/search';
import SearchTag from './page/search/search-tag';
import Information from './page/information/information';
import Introduction from './page/introduction/introduction';
import Board from './page/board/board';
import BoardWrite from './page/board/board-write';
import Chatting from './page/chatting/chat';

// 회원페이지
import Signup from './page/signup/signup';
import Login from './page/login/login';
import MyPage from './page/mypage/mypage';


// 프로필 페이지
import Suhyun from './page/profile/suhyun';
import Eunhye from './page/profile/eunhye';
import Junmo from './page/profile/junmo';
import Seokran from './page/profile/seokran';
import Yejeong from './page/profile/yejeong';
import Minji from './page/profile/minji';


function App() {
  return (
    <>
          <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/search' element={<Search/>} />
              <Route path='/searchTag' element={<SearchTag/>} />
              <Route path='/information' element={<Information/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/mypage' element={<MyPage/>} />
              <Route path='/introduction' element={<Introduction/>} />
              <Route path='/board' element={<Board/>} />
              <Route path='/write' element={<BoardWrite/>} />
              <Route path='/chatting' element={<Chatting/>} />
              <Route path='/suhyun' element={<Suhyun/>} />
              <Route path='/eunhye' element={<Eunhye/>} />
              <Route path='/junmo' element={<Junmo/>} />
              <Route path='/seokran' element={<Seokran/>} />
              <Route path='/yejeong' element={<Yejeong/>} />
              <Route path='/minji' element={<Minji/>} />
            </Routes>
            <ChatIcon/>
            <Footer/>
          </BrowserRouter>
    </>
  );
}

export default App;