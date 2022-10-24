import React from "react";
import Button from "../components/elements/Button";
import Input from "../components/elements/Input";
import styled from "styled-components";
import Layout from "../components/elements/Layout";

const Signup = () => {
  return (
    <Layout>
      <Container>
        <TitleBox>
          <h1>회원가입</h1>
        </TitleBox>
        <SignupBox>
          <LabelInput>
            <label>아이디</label>
            <Input color="line"></Input>
            <br />
          </LabelInput>
          <Button color="reverse" size="medium">
            중복확인
          </Button>
          <br />

          <LabelInput2>
            <label>비밀번호</label>
            <Input color="line"></Input>
            <br />
          </LabelInput2>
          <LabelInput2>
            <label>
              비밀번호
              <br />
              확인
            </label>
            <Input color="line"></Input>
            <br />
          </LabelInput2>

          <RadioBox>
            <TeamText>조를 선택해주세요!</TeamText>
            <LabelBox>
              <Radio type="radio" name="account_team" />
              <Span>1조</Span>
            </LabelBox>
            <LabelBox>
              <Radio type="radio" name="account_team" />
              <Span>2조</Span>
            </LabelBox>
            <LabelBox>
              <Radio type="radio" name="account_team" />
              <Span>3조</Span>
            </LabelBox>
            <br />
            <LabelBox>
              <Radio type="radio" name="account_team" />
              <Span>4조</Span>
            </LabelBox>
            <LabelBox>
              <Radio type="radio" name="account_team" />
              <Span>5조</Span>
            </LabelBox>
            <LabelBox>
              <Radio type="radio" name="account_team" />
              <Span>6조</Span>
            </LabelBox>
          </RadioBox>

          <RadioBox2>
            <TeamText>팀장이신가요?</TeamText>
            <LabelBox2>
              <Radio2 id="radio1" type="radio" name="account_Lead" />
              <label for="radio1">네</label>
            </LabelBox2>
            <LabelBox2>
              <Radio2 id="radio2" type="radio" name="account_Lead" />
              <label for="radio2">아니요</label>
            </LabelBox2>
          </RadioBox2>
        </SignupBox>
        <Btn>
          <Button color="reverse" size="medium">
            회원가입
          </Button>
        </Btn>
      </Container>
    </Layout>
  );
};

export default Signup;

//전체
const Container = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 37%;
  top: 10%;
`;
//타이틀
const TitleBox = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
  }
`;
//로그인 박스
const SignupBox = styled.div`
  width: 450px;
  height: 550px;
  padding: 10%;
  margin: 30px 50% 0 0;
  border: 3px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
//아이디 입력창
const LabelInput = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
//패스워드 입력창
const LabelInput2 = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
//조 선택 박스
const RadioBox = styled.div`
  justify-content: center;
  border: none;
  margin: 0;
  padding: 20px 100px;
`;
//조를 선택해주세요, 팀장이신가요?
const TeamText = styled.div`
  padding-left: 15%;
  padding-bottom: 10px;
`;
//조를 선택해주세요 -> 라벨들
const LabelBox = styled.label`
  font-size: 18px;
  line-height: 2rem;
  padding: 0.2em 0.4em;
`;
//조를 선택해주세요 -> 라디오
const Radio = styled.input`
  vertical-align: middle;
  appearance: none;
  border: 2px solid gray;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  /* transition: border 0.5s ease-in-out; */
  &:checked {
    border: 0.4em solid tomato;
  }
`;
//조를 선택해주세요 -> ~조
const Span = styled.span`
  vertical-align: middle;
`;
//팀장이신가요? 박스
const RadioBox2 = styled.div`
  display: flex;
  border: none;
  align-items: center;
  gap: 30px;
`;
//팀장이신가요? -> 라디오
const Radio2 = styled.input`
  display: none;

  &:checked + label {
    background-color: #fd5c63;
    color: #ffffff;
  }
`;
//팀장이신가요? -> 라벨들
const LabelBox2 = styled.label`
  display: inline-block;
  padding: 15px 10px;
  border: 1px solid #fd5c63;
  background-color: white;
  /* text-align: center; */
`;
//회원가입 버튼
const Btn = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-left: 40%;
`;
