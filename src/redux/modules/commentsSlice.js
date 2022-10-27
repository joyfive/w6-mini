//툴킷사용
import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
isLoading: false,
error: null,
};


export const __addComment = createAsyncThunk(
  "comment/addcomment",
  // async 는 프로미스에 새로운 신문법이다. // 언제끝나는지 알려준다.
  async (payload, thunkAPI) => {
    console.log('페이로드',payload)
    try {
      // payload를 데이터를 넣어줄때까지 실행하지 하지않겠다. //비동기
      const data = await axios.post("http://localhost:3001/api",payload);
      console.log('데이타', data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComment = createAsyncThunk(
  "comment/getcomment",
  async (payload, thunkAPI) => {
    // console.log('페이로드',payload)
    try {
      const data = await axios.get("http://localhost:3001/api");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comment/deletecomment",
  // async 는 프로미스에 새로운 신문법이다. // 언제끝나는지 알려준다.
  async (payload, thunkAPI) => {
    // console.log('페이로드', payload)
    try {
      // payload를 데이터를 넣어줄때까지 실행하지 하지않겠다. //비동기
      await axios.delete(`http://localhost:3001/api`);
      const data = await axios.get(`http://localhost:3001/api`)
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addComment.fulfilled]: (state, action) => {

      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
      state.comments.push(action.payload) ; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.

      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    }, 
    [__deleteComment.fulfilled]: (state, action) => {

      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다. 
      //스토어랑 
      //서버 각각 삭제.
      state.comments=state.comments.filter((item)=>item.id !== action.payload) // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
  }
})

export const { addComment, getComment } = commentsSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default commentsSlice.reducer;