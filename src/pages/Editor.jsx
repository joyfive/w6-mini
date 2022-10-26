import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "../redux/modules/postSilice"
import useInput from "../hooks/useInput"
import Button from "../components/elements/Button"
import Input from "../components/elements/Input"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import Header from "../components/elements/Header"
import Box from "../components/elements/Box"

const Editor = () => {
  //커스텀 훅 사용
  const [postInput, setPostInput, postInputHandle] = useInput({
    title: "",
    tag: "",
    contents: "",
  })

  const { isSuccess, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //뒤로가기
  const goback = () => {
    window.history.back()
  }

  // img
  const [imageUrl, setImageUrl] = useState(null)
  const [imgFile, setImgFile] = useState("")
  const imgRef = useRef()

  const onChangeImage = () => {
    const reader = new FileReader()

    const img = imgRef.current.files[0]
    reader.readAsDataURL(img)
    reader.onloadend = () => {
      setImageUrl(reader.result)
      setImgFile(img)
    }
  }

  //validation
  const validateForm = () => {
    let validated = true
    if (
      postInput.title === "" ||
      postInput.contents === "" ||
      postInput.tag === ""
    ) {
      validated = false
    }
    return validated
  }

  const onPost = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const formData = new FormData()

      formData.append("img", imgFile)
      formData.append("title", postInput.title)
      formData.append("contents", postInput.contents)
      formData.append("tag", postInput.tag)

      dispatch(addPost(formData))
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/list/team")
    } else {
      if (error !== undefined) console.log(error)
    }
  }, [isSuccess, error, navigate])

  return (
    <>
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
              onChange={postInputHandle}
              color="line"
              size="full"
            />
          </LabelInput>

          <FileBox>
            <label htmlFor="imgFile">
              <ImgBox>
                <Box size="mytitle">
                  <img
                    src={
                      imageUrl
                        ? imageUrl
                        : "http://localhost:3000" + "/img/noImg.jpg"
                    }
                    className="card-img-top"
                    alt="game image"
                  />
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    id="imgFile"
                    name="imgFile"
                    type="file"
                    multiple
                    onChange={onChangeImage}
                    ref={imgRef}
                  />
                  <Button type="button" htmlFor="inputImg">
                    이미지 업로드
                  </Button>
                </Box>
              </ImgBox>
            </label>
          </FileBox>

          <RadioBox>
            <label>태그</label>
            <LabelBox>
              <Radio
                value={postInput.tag || "diary"}
                onChange={postInputHandle}
                id="radio1"
                type="radio"
                name="account_tag"
              />
              <label htmlFor="radio1">일상</label>
            </LabelBox>
            <LabelBox>
              <Radio
                value={postInput.tag || "question"}
                onChange={postInputHandle}
                id="radio2"
                type="radio"
                name="account_tag"
              />
              <label htmlFor="radio2">질문</label>
            </LabelBox>
            <LabelBox>
              <Radio
                value={postInput.tag || "share"}
                onChange={postInputHandle}
                id="radio3"
                type="radio"
                name="account_tag"
              />
              <label htmlFor="radio3">공유</label>
            </LabelBox>
            <LabelBox>
              <Radio
                value={postInput.tag || "notice"}
                onChange={postInputHandle}
                id="radio4"
                type="radio"
                name="account_tag"
              />
              <label htmlFor="radio4">공지</label>
            </LabelBox>
          </RadioBox>

          <label>내용</label>
          <TextBox
            value={postInput.contents || ""}
            onChange={postInputHandle}
          />
        </AllTextBox>

        <Btn>
          <Button onClick={goback} size="medium">
            취소하기
          </Button>
          <Button onClick={onPost} color="reverse" size="medium">
            등록하기
          </Button>
        </Btn>
      </Container>
      <Header />
    </>
  )
}

export default Editor

const ImgBox = styled.div`
  display: flex;
  text-align: center;
  width: 600px;
  margin: 20px auto;
  img {
    width: 100%;
    max-width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    margin: 10px auto;
  }
`

//전체
const Container = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 30%;
  top: 10%;
`
//제목
const TitleBox = styled.div`
  padding-left: 50%;
`
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
`
//제목 입력창
const LabelInput = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
//파일 업로드 박스
const FileLabel = styled.label`
  padding: 6px 25px;
  background-color: #fd5c63;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`
//파일 업로드
const FileBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`
//태그 -> 라디오 박스
const RadioBox = styled.div`
  display: flex;
  border: none;
  align-items: center;
  gap: 30px;
`
//태그 -> 라벨들
const LabelBox = styled.label`
  display: inline-block;
  padding: 10px 5px;
  border: 1px solid #fd5c63;
  background-color: white;
  /* text-align: center; */
`
//태그 -> 라디오
const Radio = styled.input`
  display: none;
  &:checked + label {
    background-color: #fd5c63;
    color: #ffffff;
  }
`
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
`
//취소 & 등록 버튼
const Btn = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-left: 30%;
`
