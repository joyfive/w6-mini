import React from 'react'
import Input from '../components/elements/Input'
import Button from '../components/elements/Button'
import styled from 'styled-components'

const Signin = () => {
  return (
    <Container>
      <TitleBox>
        <h1>로그인</h1>
        <p>C반 커뮤니티는 항해99 C반 회원만 이용이 가능해요!</p>
      </TitleBox>

      <SigninBox>
        <LabelInput>
          <label>아이디</label>
          <Input color="line"></Input><br/>
        </LabelInput>
        <LabelInput2>
          <label>비밀번호</label>
          <Input color="line"></Input><br/>
        </LabelInput2>
      </SigninBox>

      <Btn>
        <Button size="medium">회원가입</Button>
        <Button color="reverse" size="medium">로그인</Button>
      </Btn>
    </Container>
  )
}

export default Signin

//전체
const Container = styled.div`
    margin: 0 auto;
    position:absolute;
    left:37%;
    top:20%;
`
//로그인 타이틀
const TitleBox = styled.div`
  text-align: center;
`
//로그인 박스
const SigninBox = styled.div`
    width: 400px;
    height: 150px;
    padding: 10%;
    margin: 30px 50% 0 0;
    border: 3px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
//아이디 입력창
const LabelInput = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    
`
//패스워드 입력창
const LabelInput2 = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`
//회원가입 & 로그인 버튼
const Btn = styled.div`
  margin-right: 100px;
  margin-top: 20px;
  width: 100%;
  padding-left: 10%;
`
