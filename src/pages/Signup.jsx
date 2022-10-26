import React from "react"
import { useNavigate } from "react-router-dom"
import { accountSignup } from "../redux/modules/accountSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Layout from "../components/elements/Layout"
import Box from "../components/elements/Box"
import Input from "../components/elements/Input"
import Button from "../components/elements/Button"
import styled from "styled-components"

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { account, idCheck, nameCheck } = useSelector((state) => state.account)

  const initialState = {
    userid: "",
    nickname: "",
    password: "",
    passwordconfirm: "",
  }
  const [join, setJoin] = useState(initialState)

  const selectList1 = ["1조", "2조", "3조", "4조", "5조", "6조"]
  const selectList2 = ["true", "false"]
  const [team, setTeam] = useState("3조")
  const [lead, setLead] = useState("false")
  const handleSelect1 = (e) => {
    setTeam(e.target.value)
  }
  const handleSelect2 = (e) => {
    setLead(e.target.value)
  }
  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setJoin({ ...join, [name]: value })
  }
  const obj = {
    id: 1,
    //임시
    userid: join.userid,
    nickname: join.nickname,
    password: join.password,
    passwordconfirm: join.passwordconfirm,
  }

  // const accountIdCheck = /^[a-z]+[a-z0-9]{5,19}$/g
  // const passwordCheck = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/

  // const onCheckId = () => {
  //   // 수정 필요(true, false로만 받으면 됨. if 필요 없음. dispatch로 받으면 됨)
  //   dispatch(accountCheck(obj.userid))
  // }

  useEffect(() => {
    if (idCheck !== undefined) {
      if (idCheck.success === true) {
        return alert("사용 가능한 ID입니다.")
      } else {
        return alert("이미 사용중인 ID가 있습니다.")
      }
    }
  }, [dispatch, idCheck])

  const onSubmitHandler = (event) => {
    event.preventDefault()
    // if (!accountIdCheck.test(obj.accountId)) {
    //   return alert("아이디 형식에 맞지 않습니다.")
    // }
    // if (!passwordCheck.test(obj.password)) {
    //   return alert("비밀번호 형식에 맞지 않습니다.")
    // }
    // if (obj.password !== obj.passwordconfirm) {
    //   return alert("비밀번호 확인이 일치하지 않습니다.")
    // }
    // if (
    //   obj.password === "" ||
    //   obj.passwordconfirm === "" ||
    //   obj.password === undefined ||
    //   obj.passwordconfirm === undefined
    // ) {
    //   return alert("빈칸을 입력해주세요.")
    // }
    // if (obj.userid === "" || obj.accountId === undefined) {
    //   return alert("빈칸을 입력해주세요.")
    // }

    // if (obj.nickname === "" || obj.accountName === undefined) {
    //   return alert("빈칸을 입력해주세요.")
    // }

    dispatch(accountSignup(obj))
  }
  useEffect(() => {
    if (account !== undefined) {
      if (account.success === true) {
        alert("회원가입이 완료되었습니다.")
        setJoin({
          email: "",
          accountName: "",
          accountPw: "",
          accountPwConfirm: "",
          accountTeam: "",
          accountLeader: "",
        })
        window.location.replace("/")
      } else {
        if (account.error !== undefined) {
          alert(account.error)
        }
      }
    }
  }, [account])

  return (
    <Layout>
      <Cont>
        <Box size="account">
          <H1>회원가입</H1>
          <Div>
            <Flex>
              <Input
                size="full"
                type="text"
                name="email"
                onChange={onChangeHandler}
                placeholder="아이디는 영문자로 시작하는 영문자 또는 숫자 6~20자"
              ></Input>
              <Button
                color="reverse"
                size="percent"
                type="button"
                // onClick={onCheckId}
              >
                중복확인
              </Button>
            </Flex>
            <div>
              <Input
                size="full"
                type="text"
                name="accountName"
                onChange={onChangeHandler}
                placeholder="이름을 입력해주세요"
              ></Input>
            </div>
            <div>
              <Input
                size="full"
                type="password"
                name="accountPw"
                onChange={onChangeHandler}
                placeholder="비밀번호는 8 ~ 16자 영문, 숫자 조합"
              ></Input>
            </div>
            <div>
              <Input
                size="full"
                type="password"
                name="accountPwConfirm"
                placeholder="비밀번호 확인"
                onChange={onChangeHandler}
              ></Input>
            </div>
            <div>
              <Div>
                <Txt> 몇조이신가요?🤗</Txt>
                <select onChange={handleSelect1} value={team}>
                  {selectList1.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Div>
            </div>
          </Div>
          <Div>
            <Txt> 팀장님이신가요?</Txt>

            <select onChange={handleSelect2} value={lead}>
              {selectList2.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </Div>
          <BtnGroup>
            <Button
              size="short"
              onClick={() => {
                navigate("/")
              }}
            >
              뒤로가기
            </Button>
            <Button size="short" color="reverse" onClick={onSubmitHandler}>
              회원가입
            </Button>
          </BtnGroup>
        </Box>
      </Cont>
    </Layout>
  )
}

export default SignUp

const Cont = styled.div`
  margin-top: 80px;
`

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`
const Div = styled.div`
  width: 80%;
  margin: 20px auto;
  text-align: center;

  /* select {
    margin: 0;
    padding: 10px 30px;
    width: 200px;
    height: 40px;
    font-size: 14px;

    border-radius: 5px;
    background-color: #fff;
  } */
`

const BtnGroup = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  line-height: 2.7;

  [type="radio"] {
    appearance: none;
    margin: 10px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    text-align: center;
    background-color: white;
    border-radius: 10px;

    :checked {
      background-color: #fd5c63;
    }
  }
`
const Txt = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  margin-right: 30px;
`
