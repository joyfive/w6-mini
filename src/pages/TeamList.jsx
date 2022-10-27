import React from "react"
import Layout from "../components/elements/Layout"
import List from "../components/features/List"
import styled from "styled-components"
import Box from "../components/elements/Box"

const TeamList = () => {
  return (
    <Layout>
      <H1>우리조 이야기</H1>
      <Div>
        <Flex>
          <Input type="select">
            <option>최신순</option>
            <option>좋아요순</option>
          </Input>
          <Input type="select">
            <option disabled>C반</option>
            <option disabled>1조</option>
            <option disabled>2조</option>
            <option selected>3조</option>
            <option disabled>4조</option>
            <option disabled>5조</option>
            <option disabled>6조</option>
          </Input>
          <Input type="select">
            <option>모든 태그</option>
            <option>일상</option>
            <option>질문</option>
            <option>공유</option>
            <option>공지</option>
          </Input>
        </Flex>
      </Div>
      <Box size="middle" color="reverse">
        <div>3조에 오신것을 환영합니다 🥳</div>
      </Box>
      <List></List>
    </Layout>
  )
}

export default TeamList
const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`

const Div = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Input = styled.select`
  width: 200px;
  height: 50px;
  border: 1px solid #fd5c63;
  border-radius: 10px;
  margin: 10px;
  padding: 5px 10px;
  font-weight: 400;
  color: #121212;
`
