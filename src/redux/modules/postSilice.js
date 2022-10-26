import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  posts: [],
}

export const addPost = createAsyncThunk(
  "contents/insert",
  async (payload, thunkAPI) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/posts`, payload, {
          headers: {
            enctype: "multipart/form-data",
            Access_Token: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5b3UxZHNmMSIsImV4cCI6MTY2NjgwNTE0NCwiaWF0IjoxNjY2NzY5MTQ0fQ.y0fVQkrjlVn1-BVkn3jKps1pk-MHvtoG_iwW9kGCdmE`,
            "Cache-Control": "no-cache",
          },
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

// //ID로
// export const getDetail = createAsyncThunk(
//   "posts/getDetail", //type
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(
//         `${process.env.REACT_APP_API_URL_POST}/posts/${payload}`
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// 3가지 조건 Params로 전달
export const getList = createAsyncThunk(
  "post/getList", //type
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://13.124.45.96/api/posts?sort=createdAt&accountTeam=All&tag=All`,
        {
          headers: {
            Access_Token:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5b3UxZHNmMSIsImV4cCI6MTY2NjgwNTE0NCwiaWF0IjoxNjY2NzY5MTQ0fQ.y0fVQkrjlVn1-BVkn3jKps1pk-MHvtoG_iwW9kGCdmE",
          },
        }
      )
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deletePost = createAsyncThunk(
  "post/deletePost", //type
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://13.124.45.96/api/posts/${payload}`, {
        headers: {
          Access_Token:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5b3UxZHNmMSIsImV4cCI6MTY2NjgwNTE0NCwiaWF0IjoxNjY2NzY5MTQ0fQ.y0fVQkrjlVn1-BVkn3jKps1pk-MHvtoG_iwW9kGCdmE",
        },
      })
      const data = await axios.get(`http://13.124.45.96/api/posts`, {
        headers: {
          Access_Token:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5b3UxZHNmMSIsImV4cCI6MTY2NjgwNTE0NCwiaWF0IjoxNjY2NzY5MTQ0fQ.y0fVQkrjlVn1-BVkn3jKps1pk-MHvtoG_iwW9kGCdmE",
        },
      })
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// export const __updateStatus = createAsyncThunk(
//   "todos/updateStatus", //type
//   async (payload, thunkAPI) => {
//     try {
//       await axios.patch(
//         `${process.env.REACT_APP_API_URL_TODOS}/${payload.id}`,
//         payload
//       );
//       const data = await axios.get(`${process.env.REACT_APP_API_URL_TODOS}`);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __updateContent = createAsyncThunk(
//   "todos/updateContent", //type
//   async (payload, thunkAPI) => {
//     try {
//       await axios.patch(
//         `${process.env.REACT_APP_API_URL_TODOS}/${payload.id}`,
//         payload
//       );
//       const data = await axios.get(
//         `${process.env.REACT_APP_API_URL_TODOS}/${payload.id}`
//       );
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: {
    //-__getTodos-
    [getList.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getList.fulfilled]: (state, action) => {
      state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.posts = action.payload // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [getList.rejected]: (state, action) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    },
    // //-addPost-
    // [addPost.pending]: (state) => {
    //   state.isLoading = true
    // },
    // [addPost.fulfilled]: (state, action) => {
    //   state.isLoading = false
    //   state.posts = [...state.post, { ...action.payload }]
    // },
    // [addPost.rejected]: (state, action) => {
    //   state.error = action.payload
    //   state.isLoading = false
    //   state.isSuccess = false
    // },
    //-__deleteTodo-
    [deletePost.pending]: (state) => {
      state.isLoading = true
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    },
    [deletePost.rejected]: (state, action) => {
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

// export const { getDetail, addPost, getList } = postSlice.actions;
export default postSlice.reducer
