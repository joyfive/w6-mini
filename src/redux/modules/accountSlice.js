import { createSlice, current } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setCookie } from "../../Cookie"

const initialState = {
  account: [],
  isLoading: false,
  error: null,
}
export const accountSignin = createAsyncThunk(
  "account/signIn",
  // login : reducer name, 경로 정해줘야
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`http://13.124.45.96/auth/signin`, payload)
      const Access_Token = data.headers.access_token
      // const refreshToken = data.headers["refresh-token"];
      if (data.status === 200 || data.status === 201) {
        setCookie("Access_Token", Access_Token)
        // window.localStorage.setItem("refreshToken", refreshToken);
        setCookie("nickname", data.data.data)
        alert("로그인 성공")
        window.location.replace("/list")
      }

      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      if (400 < error.data.status && error.data.status < 500) {
        window.location.reload()
        alert("로그인 실패")
      }
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// export const accountCheck = createAsyncThunk(
//   "account/checkId",
//   // type
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.post(
//         `${process.env.REACT_APP_API_URL}/auth/checkid`,
//         {
//           userid: payload,
//         }
//       )
//       return thunkAPI.fulfillWithValue(data.data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

export const accountSignup = createAsyncThunk(
  "account/userSignUp",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`http://13.124.45.96/auth/signup`, payload)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const LoginSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: {
    [accountSignin.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [accountSignin.fulfilled]: (state, action) => {
      state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.account = action.payload //
    },
    [accountSignin.rejected]: (state, action) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    },
    // [accountCheck.pending]: (state) => {
    //   state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    // [accountCheck.fulfilled]: (state, action) => {
    //   state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false
    //   state.idCheck = action.payload
    // },
    // [accountCheck.rejected]: (state, action) => {
    //   state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false
    //   state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    // },

    [accountSignup.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [accountSignup.fulfilled]: (state, action) => {
      state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.account = action.payload //
    },
    [accountSignup.rejected]: (state, action) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false
      state.error = action.payload // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { userLogin, userSignUp, userSignUpGet } = LoginSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default LoginSlice.reducer
