import React from 'react'
import Layout from '../components/elements/Layout'
import List from '../components/features/List'
import styled from 'styled-components'
import Box from '../components/elements/Box'

const TeamList = () => {
  return (
    <Layout>
    <H1>우리조 이야기</H1>
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
