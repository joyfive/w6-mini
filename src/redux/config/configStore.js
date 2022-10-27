
import { configureStore } from "@reduxjs/toolkit"
import home from "../modules/homeSlice"
import posts from "../modules/postSilice"
import account from "../modules/accountSlice"
import cmts from "../modules/cmtSlice"


const store = configureStore({
  reducer: {

    home,
    posts,
    account,
    cmts,

  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",

})

export default store
