import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { addPost } from "../redux/modules/postSilice";
import useInput from "../hooks/useInput";
import Button from "../components/elements/Button";
import Input from "../components/elements/Input";
import styled from "styled-components";
import Layout from "../components/elements/Layout";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const { isSuccess, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // img
  const [img, setImg] = useState({
    img_file: "",
    preview_URL: "img/default_img.png",
  });

  const imgInput = useRef();

  const saveImg = (e) => {
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImg({ img_file: e.target.files[0], preview_URL: fileReader.result });
    };
  };
  //뒤로가기

  const goback = () => {
    window.history.back();
  };

  //reset
  const onReset = () => {
    setPostInput({
      title: "",
      contents: "",
      tag: "",
      img: "",
    });
  };
  //커스텀 훅 사용
  const [postInput, setPostInput, PostInputHandle] = useInput({
    img: "",
    post: {
      title: "제목입니다",
      tag: "diary",
      contents: "내용입니다",
    },
  });

  //validation
  const validateForm = () => {
    let validated = true;
    if (
      postInput.title === "" ||
      postInput.contents === "" ||
      postInput.tag === ""
    ) {
      validated = false;
    }
    return validated;
  };

  const OnPost = (event) => {
    event.preventDefault();
    if (validateForm()) {
      if (
        postInput.title.trim() === "" ||
        postInput.contents.trim() === "" ||
        postInput.tag === ""
      )
        return;
      dispatch(
        addPost(
          { img: img.preview_URL },
          {
            title: postInput.title,
            tag: postInput.tag,
            contents: postInput.contents,
          }
        ),
        onReset()
      );
      //
    }
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/list/team");
    } else {
      if (error !== undefined) console.log(error);
    }
  }, [isSuccess, error, navigate]);

  return (
    <Layout>
      <Container>
        <TitleBox>
          <h1>작성하기</h1>
        </TitleBox>

        <AllTextBox>
          <LabelInput>
            <label>제목</label>
            <Input
              type="text"
              maxLength="10"
              value={postInput.title || ""}
              onChange={PostInputHandle}
              color="line"
              size="full"
            />
          </LabelInput>

          <FileBox>
            <label>첨부파일</label>
            <FileLabel for="input-file">파일열기</FileLabel>
            <input
              onClick={(e) => (e.target.value = null)}
              ref={imgInput}
              onChange={saveImg}
              id="input-file"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </FileBox>

          <RadioBox>
            <label>태그</label>
            <LabelBox>
              <Radio
                value={postInput.tag || "diary"}
                onChange={PostInputHandle}
                id="radio1"
                type="radio"
                name="account_tag"
              />
              <label for="radio1">일상</label>
            </LabelBox>
            <LabelBox>
              <Radio
                value={postInput.tag || "question"}
                onChange={PostInputHandle}
                id="radio2"
                type="radio"
                name="account_tag"
              />
              <label for="radio2">질문</label>
            </LabelBox>
            <LabelBox>
              <Radio
                value={postInput.tag || "share"}
                onChange={PostInputHandle}
                id="radio3"
                type="radio"
                name="account_tag"
              />
              <label for="radio3">공유</label>
            </LabelBox>
            <LabelBox>
              <Radio
                value={postInput.tag || "notice"}
                onChange={PostInputHandle}
                id="radio4"
                type="radio"
                name="account_tag"
              />
              <label for="radio4">공지</label>
            </LabelBox>
          </RadioBox>

          <label>내용</label>
          <TextBox
            value={postInput.contents || ""}
            onChange={PostInputHandle}
          />
        </AllTextBox>

        <Btn>
          <Button onClick={goback} size="medium">
            취소하기
          </Button>
          <Button onClick={OnPost} color="reverse" size="medium">
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
