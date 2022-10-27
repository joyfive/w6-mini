import React from "react"
import Layout from "../components/elements/Layout"
import List from "../components/features/List"
import styled from "styled-components"
import Box from "../components/elements/Box"

const AllList = () => {
  return (
    <Layout>
      <H1>모두의 이야기</H1>
      <Div>
        <Flex>
          <Input type="select">
            <option>최신순</option>
            <option>좋아요순</option>
          </Input>
          <Input type="select">
            <option>C반</option>
            <option>1조</option>
            <option>2조</option>
            <option>3조</option>
            <option>4조</option>
            <option>5조</option>
            <option>6조</option>
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
        <div>동료들은 지금 무슨 이야기를 하고 있나요? 🤔</div>
      </Box>
      <List></List>
    </Layout>
  )
}

export default AllList

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
