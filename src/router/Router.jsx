import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HeaderDaisy from '../components/common/HeaderDaisy';
import FooterDaisy from '../components/common/FooterDaisy';
import CommonComponent from '../components/common/CommonComponent';
import BoardCommonComp from '../page/board/BoardCommonComp';
import LoginPage from '../page/login/LoginPage';
import NaverLoginRedirect from '../page/login/AuthLoginRedirect';
import Profile from '../page/profile/Profile';
import Streamers from '../page/streamer/Streamers';
import WritePost from '../page/post/WritePost';
import DetailPost from '../page/post/DetailPost';
import BoardTable from '../page/board/BoardTable';

function Router() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <HeaderDaisy isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/*" element={<CommonComponent />}>
          <Route path="g/:boardId/*" element={<BoardCommonComp />}>
            <Route path="" element={<BoardTable />} />
            <Route path=":boardId/:postId" element={<DetailPost />} />
            <Route path=":boardId/write" element={<WritePost />} />
          </Route>
          <Route path="s/:streamerId/*" element={<BoardCommonComp />}>
            <Route path="" element={<BoardTable/>} />
            <Route path=":streamerId/:postId" element={<DetailPost />} />
            <Route path=":streamerId/write" element={<WritePost />} />
          </Route>
          <Route path="streamer" element={<Streamers />}></Route>
        </Route>
        <Route
          path="/naverLogin"
          element={<NaverLoginRedirect setIsLogin={setIsLogin} />}
        />
        <Route path="/myProfile" element={<Profile isLogin={isLogin} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <FooterDaisy />
    </BrowserRouter>
  );
}

export default Router;
