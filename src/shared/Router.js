import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home"
import Editor from "../pages/Editor";
import Posts from "../pages/Posts";
import AllList from "../pages/AllList";
import TeamList from "../pages/TeamList";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Mypage from "../pages/Mypage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						paht는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				 */}
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<AllList />} />
        <Route path="/list/team" element={<TeamList />} />
        <Route path="/Editor" element={<Editor />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

{/* <Route path="/posts/:id" element={<Posts />} /> */}