import React from "react";
import Button from "../components/elements/Button";
import Input from "../components/elements/Input";
import styled from "styled-components";
import Layout from "../components/elements/Layout";

const Editor = () => {
  return (
    <Layout>
      <Container>
        <TitleBox>
          <h1>작성하기</h1>
        </TitleBox>

        <AllTextBox>
          <LabelInput>
            <label>제목</label>
            <Input color="line" size="full" />
          </LabelInput>

          <FileBox>
            <label>첨부파일</label>
            <FileLabel for="input-file">파일열기</FileLabel>
            <input id="input-file" type="file" style={{ display: "none" }} />
          </FileBox>

          <RadioBox>
            <label>태그</label>
            <LabelBox>
              <Radio id="radio1" type="radio" name="account_tag" />
              <label for="radio1">일상</label>
            </LabelBox>
            <LabelBox>
              <Radio id="radio2" type="radio" name="account_tag" />
              <label for="radio2">질문</label>
            </LabelBox>
            <LabelBox>
              <Radio id="radio3" type="radio" name="account_tag" />
              <label for="radio3">공유</label>
            </LabelBox>
            <LabelBox>
              <Radio id="radio4" type="radio" name="account_tag" />
              <label for="radio4">공지</label>
            </LabelBox>
          </RadioBox>

          <label>내용</label>
          <TextBox />
        </AllTextBox>

        <Btn>
          <Button size="medium">취소하기</Button>
          <Button color="reverse" size="medium">
            등록하기
          </Button>
        </Btn>
      </Container>
    </Layout>
  );
};

export default Editor;

//전체
const Container = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 30%;
  top: 10%;
`;
//제목
const TitleBox = styled.div`
  padding-left: 50%;
`;
//작성하기 박스
const AllTextBox = styled.div`
  width: 700px;
  height: 700px;
  padding: 10%;
  margin: 30px 50% 0 0;
  border: 3px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
//제목 입력창
const LabelInput = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
//파일 업로드 박스
const FileLabel = styled.label`
  padding: 6px 25px;
  background-color: #fd5c63;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;
//파일 업로드
const FileBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
//태그 -> 라디오 박스
const RadioBox = styled.div`
  display: flex;
  border: none;
  align-items: center;
  gap: 30px;
`;
//태그 -> 라벨들
const LabelBox = styled.label`
  display: inline-block;
  padding: 10px 5px;
  border: 1px solid #fd5c63;
  background-color: white;
  /* text-align: center; */
`;
//태그 -> 라디오
const Radio = styled.input`
  display: none;
  &:checked + label {
    background-color: #fd5c63;
    color: #ffffff;
  }
`;
// 내용 입력창
const TextBox = styled.textarea`
  width: 100%;
  height: 50%;
  border: 1px solid #fd5c63;
  border-radius: 10px;
  box-shadow: 0px 2px 10px #e1cccd;
  padding: 12px;
  font-size: 14px;
  line-height: 1.5;
  font-size: 18px;
`;
//취소 & 등록 버튼
const Btn = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-left: 30%;
`;
