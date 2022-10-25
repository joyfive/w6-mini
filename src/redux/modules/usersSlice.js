import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    account: [
      // {
      //   email :"you1dsf",
      //   accountName:"짱윤서",
      //   accountPw:"@weffs3424A",
      //   accountPwConfirm:"@weffs3424A",
      //   accountTeam:"3",
      //   accountLeader:false
      // }
    ],
    isLoading: false,
    error: null
  };

//로그인
export const __userLogin = createAsyncThunk(
  "account/userLogin",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get('http://localhost:3001/auth/login', payload);
      const Access_Token = data.headers.access_token;
      if (data.status === 200 || data.status === 201) {
        window.localStorage.setItem("Access_Token", Access_Token);
        // window.localStorage.setItem("nickname", data.data.data);
        // alert("로그인 성공");
        // window.location.replace("/movielist")
      }
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      if (400 < error.data.status && error.data.status < 500) {
        window.location.reload();
        alert("로그인 실패")
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//회원가입 -> id체크
export const  __checkId = createAsyncThunk(
  "account/checkId",
  // type
  async (payload, thunkAPI) => {
    try {
    const data = await axios.post("http://localhost:3001/auth/checkid", {userid: payload})
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//회원가입
export const __userSignup = createAsyncThunk(
  "account/userSignup",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('http://localhost:3001/auth/signup', payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// // 로그인 상태 불러오기
// export const __loadUser = createAsyncThunk('/user/load', async () => {
//   const data = await axios.get('/user');
//   console.log(data.data);
//   return data.data;
// });

const usersSlice = createSlice ({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: {
    //회원가입
    [__userSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [__userSignup.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account=action.payload; // 
    },
    [__userSignup.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다
    },
    //로그인
    [__userLogin.pending]: (state) => {
      state.isLoading = true; 
    },
    [__userLogin.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account=action.payload;
    },
    [__userLogin.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    //회원가입 -> id확인
    [__checkId.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__checkId.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.idCheck=action.payload;
    },
    [__checkId.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
}
});

export const { userSignup, userLogin } = usersSlice.actions;

export default usersSlice.reducer;