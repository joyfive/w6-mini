import React, { useState, useEffect } from 'react';
import Button from '../components/elements/Button'
import Input from '../components/elements/Input'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { __checkId,  __userSignup } from '../redux/modules/usersSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const { account, idCheck } = useSelector((state) => state)
  const [value, setValue] = useState("");

  const initialState = {
    accountId: "",
    accountPw: "",
    accountPWConfirm: "",
    accountTeam:"",
    accountLeader:"",    
  };

  const [join, setJoin] = useState(initialState);

  const onChangeHandler = (event) => {
    const {name, value} = event.target
    setJoin({...join, [name] : value})
  }
  const obj = {
    id : 1,
    accountId: join.accountId,
    accountPw: join.accountPw,
    accountPWConfirm: join.accountPWConfirm,
    accountTeam: join.accountTeam,
    accountLeader:join.accountLeader
  }

  const accountIdCheck = /^[a-z]+[a-z0-9]{5,19}$/g;
  const accountPWConfirm = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

  const onCheckId = () => {
    // 수정 필요(true, false로만 받으면 됨. if 필요 없음. dispatch로 받으면 됨)
    dispatch(__checkId(obj.accountId))
  }

  useEffect(() => {
    if(idCheck !== undefined){
      if(idCheck.success === true){
        return alert("사용 가능한 ID입니다.")
      }else{
        return alert("이미 사용중인 ID가 있습니다.")
      }
    }
  }, [dispatch, idCheck])

  const onsubmitHandler = (e) => {
    e.preventDefault();
    
    if(!accountIdCheck.test(obj.accountId)){
      return alert("아이디 양식에 맞춰주세요")
    }
    if(!accountPWConfirm.test(obj.accountPw)){
      return alert("비밀번호 양식에 맞춰주세요")
    }
    if(obj.accountPw !== obj.accountPWConfirm){
      return alert("비밀번호를 모두 확인해주세요")
    }
    if(obj.accountPw === "" || obj.accountPWConfirm === "" || obj.accountPw === undefined || obj.accountPWConfirm === undefined){
      return alert("빈칸을 입력해주세요.")
    }
    if(obj.accountId === "" || obj.accountId === undefined) {
      return alert("빈칸을 입력해주세요.")
    }
    if(obj.accountTeam === "") {
      return alert("조를 선택해주세요.")
    }
    if(obj.accountLeader === "") {
      return alert("팀장이신가요?")
    }
    dispatch(__userSignup(obj))
  }

  useEffect(() => {
    if(account !== undefined){
    if(account.success === true){
      alert("회원가입이 완료되었습니다.")
      setJoin({
        accountId: "",
        accountPw: "",
        accountPWConfirm: "",
        accountTeam:"",
        accountLeader:"",  
      })
        window.location.replace("/")
    }else{
      if(account.error !== undefined){
        alert(account.error)
      }
    }
  }
  }, [account])

  return (
    <Container>
      <TitleBox>
        <h1>회원가입</h1>
      </TitleBox>
      <SignupBox onSubmit={onsubmitHandler} id='signForm'>
          <LabelInput>
            <label>아이디</label>
              <Input 
                color="line" 
                name='userid' 
                type="text"
                placeholder="영문자 또는 숫자 6~20자" 
                onChange={onChangeHandler}>
              </Input><br/>
          </LabelInput>
          <Button   
            color="reverse" 
            size="medium" 
            type="button" 
            onChange={onCheckId}
            >중복확인</Button>
  
          <LabelInput2>
            <label>비밀번호</label>
              <Input 
                color="line"
                type="password"
                placeholder="8 ~ 16자 영문, 숫자 조합"
                onChange={onChangeHandler}>
                  </Input><br/>
          </LabelInput2>
          <LabelInput2>
            <label>비밀번호<br/>확인</label>
              <Input 
                color="line"
                type="password"
                onChange={onChangeHandler}>
              </Input><br/>
          </LabelInput2>

        <RadioBox action="" value={value} onChange={setValue} required="">
          <TeamText>조를 선택해주세요!</TeamText>
            <LabelBox>
              <Radio type="radio" name="account_team" value="Team.1"/>
              <Span>1조</Span>
            </LabelBox>
            <LabelBox>
              <Radio type="radio" name="account_team" value="Team.2"/>
              <Span>2조</Span>
            </LabelBox>
            <LabelBox>
              <Radio type="radio" name="account_team" value="Team.3"/>
              <Span>3조</Span>
            </LabelBox><br/>
            <LabelBox>
              <Radio type="radio" name="account_team" value="Team.4"/>
              <Span>4조</Span>
            </LabelBox>
            <LabelBox>
              <Radio type="radio" name="account_team" value="Team.5"/>
              <Span>5조</Span>
            </LabelBox>
            <LabelBox>
              <Radio type="radio" name="account_team" value="Team.6"/>
              <Span>6조</Span>
            </LabelBox>
        </RadioBox>

        <RadioBox2 action="" value={value} onChange={setValue} required="">
          <TeamText>팀장이신가요?</TeamText>
            <LabelBox2>
                <Radio2 
                  id="radio1" 
                  type="radio" 
                  name="account_Lead" 
                  value="yes"/>
                <label for="radio1">네</label>
            </LabelBox2>
            <LabelBox2>
                <Radio2 
                  id="radio2" 
                  type="radio" 
                  name="account_Lead" 
                  value="no"/>
                <label for="radio2">아니요</label>
            </LabelBox2>
        </RadioBox2>
    </SignupBox>
      <Btn>
        <Button 
          color="reverse" 
          size="medium" 
          type='submit'
          form="signForm"
          >회원가입</Button>
      </Btn>
    </Container>
  )
}

export default Signup;

//전체
const Container = styled.div`
    margin: 0 auto;
    position:absolute;
    left:37%;
    top:10%;
`
//타이틀
const TitleBox = styled.div`
  padding-left: 45%;
`
//로그인 박스
const SignupBox = styled.form`
    width: 450px;
    height: 550px;
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
//조 선택 박스
const RadioBox = styled.div`
  justify-content: center;
  border: none;
  margin: 0;
  padding: 20px 100px;
`
//조를 선택해주세요, 팀장이신가요?
const TeamText = styled.div`
  padding-left: 15%;
  padding-bottom: 10px;
  
`
//조를 선택해주세요 -> 라벨들
const LabelBox = styled.label`
  font-size: 18px;
  line-height: 2rem;
  padding: 0.2em 0.4em;
`
//조를 선택해주세요 -> 라디오
const Radio =  styled.input`
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
`
//조를 선택해주세요 -> ~조
const Span = styled.span`
  vertical-align: middle;
`
//팀장이신가요? 박스
const RadioBox2 = styled.div`
  display: flex;
  border: none;
  align-items: center;
  gap: 30px; 
`
//팀장이신가요? -> 라디오
const Radio2 = styled.input`
  display: none;

  &:checked + label {
  background-color: #fd5c63;
  color: #ffffff;
}
`
//팀장이신가요? -> 라벨들
const LabelBox2 = styled.label`
  display: inline-block;
  padding: 15px 10px;
  border: 1px solid #fd5c63;
  background-color: white;
  /* text-align: center; */
`
//회원가입 버튼
const Btn = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-left: 40%;
`

