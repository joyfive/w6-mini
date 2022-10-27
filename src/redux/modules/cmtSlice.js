import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getCookie } from "../../Cookie"

const initialState = {
  posts: [],
}
const header = {
  "Content-Type": "application/json",
  Access_Token: getCookie("Access_Token"),
}

export const addCmt = createAsyncThunk(
  "comments/insert",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      await axios
        .post(`http://54.180.146.88/api/${payload.id}/comments`, payload, {
          headers: header,
        })
        .then((response) => {
          console.log("response", response.data)
        })
    } catch (error) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteCmt = createAsyncThunk(
  "post/deleteCmt", //type
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      await axios.delete(`http://54.180.146.88/api/1/comments/${payload}`, {
        headers: header,
      })
      alert("삭제가 완료되었습니다.")
      const data = await axios.get(
        `http://54.180.146.88/api/posts?sort=createdAt&accountTeam=All&tag=All`,
        {
          headers: header,
        }
      )

      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      alert(error.response.data.message)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const cmtSlice = createSlice({
  name: "cmts",
  initialState,
  reducers: {},

  extraReducers: {
    // //-__getTodos-
    // [getList.pending]: (state) => {
    //   state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    // [getList.fulfilled]: (state, action) => {
    //   state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false
    //   state.comments = action.payload // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    // },
    // [getList.rejected]: (state, action) => {
    //   state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false
    //   state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    // },
    //-addCmt-
    [addCmt.pending]: (state) => {
      state.isLoading = true
    },
    [addCmt.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = [...state.post, { ...action.payload }]
    },
    [addCmt.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
      state.isSuccess = false
    },
    // -__deleteCmt-
    [deleteCmt.pending]: (state) => {
      state.isLoading = true
    },
    [deleteCmt.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = action.payload
    },
    [deleteCmt.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // //-__updateStatus-
    // [__updateStatus.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__updateStatus.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.todos = action.payload;
    // },
    // [__updateStatus.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // //-__updateContent-
    // [__updateContent.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__updateContent.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.todo = action.payload;
    // },
    // [__updateContent.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // //-getDetail
    // [getDetail.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [getDetail.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.posts = action.payload;
    // },
    // [getDetail.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
})

export const {} = cmtSlice.actions
export default cmtSlice.reducer
