import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { accountSignin } from "../redux/modules/accountSlice"
import Layout from "../components/elements/Layout"
import Box from "../components/elements/Box"
import styled from "styled-components"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"
// {}로 감싸주기(actions 함수 써야하니까)

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const initialState = {
    userid: "",
    password: "",
  }
  const [login, setLogin] = useState(initialState)
  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setLogin({ ...login, [name]: value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    const obj = {
      id: 1,
      //임시
      userid: login.userid,
      password: login.password,
    }
    dispatch(accountSignin(obj))
  }

  return (
    <Layout>
      <Cont>
        <Box size="account">
          <H1>로그인</H1>
          <div>
            <Input
              size="full"
              type="text"
              name="userid"
              value={login.userid}
              placeholder="아이디"
              onChange={onChangeHandler}
            ></Input>
          </div>
          <div>
            <Input
              size="full"
              type="password"
              name="password"
              value={login.password}
              placeholder="비밀번호"
              onChange={onChangeHandler}
            ></Input>
          </div>
          <BtnGroup>
            <Button
              type="submit"
              onClick={() => {
                navigate("/signup")
              }}
            >
              회원가입
            </Button>
            <Button color="reverse" onClick={onSubmitHandler}>
              로그인
            </Button>
          </BtnGroup>
        </Box>
      </Cont>
    </Layout>
  )
}

export default SignIn

const Cont = styled.div`
  margin-top: 80px;
`

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`
const BtnGroup = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
`
