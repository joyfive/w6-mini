import { configureStore } from "@reduxjs/toolkit"
import home from "../modules/homeSlice"
import posts from "../modules/postSilice"
import account from "../modules/accountSlice"
// import todos from "../modules/todos.js";
// import comments from "../modules/comments.js";

const store = configureStore({
  reducer: {
    home,
    posts,
    account,

    // todos,
    // comments,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})

export default store
