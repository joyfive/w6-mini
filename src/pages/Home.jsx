import React from 'react'
import Button from '../components/elements/Button'
import Input from '../components/elements/Input'
import Layout from '../components/elements/Layout'

import Styled from 'styled-components'


const Home = () => {
  return (
    <Layout>
    <Div>Home<br />
      <Button>안녕하세요</Button>
      <Button size="full">안녕하세요</Button><br />
      <Button size="large">안녕하세요</Button><br />
      <Button size="medium">안녕하세요</Button><br />
      <Button size="small">안</Button><br />
      <Button size="round">안</Button><br />

      <Button color="reverse">안녕하세요</Button><br />
      <Button color="reverse" size="full">안녕하세요</Button><br />
      <Button color="reverse" size="large">안녕하세요</Button><br />
      <Button color="reverse" size="medium">안녕하세요</Button><br />
      <Button color="reverse" size="small">안</Button><br />
      <Button color="reverse" size="round">안</Button><br />

      <Button color="line">안녕하세요</Button>
      <Button color="line" size="full">안녕하세요</Button><br />
      <Button color="line" size="large">안녕하세요</Button><br />
      <Button color="line" size="medium">안녕하세요</Button><br />
      <Button color="line" size="small">안</Button><br />
      <Button color="line" size="round">안</Button><br />

      <Input></Input>
      <Input size="full"></Input> <br />
      <Input size="large"></Input> <br />
      <Input size="medium"></Input><br />
      <Input color="gray"></Input><br />
      <Input color="gray" size="full"></Input><br />
      <Input color="gray" size="large"></Input><br />
      <Input color="gray" size="medium"></Input><br />
      <Input color="line"></Input><br />
      <Input color="line" size="full"></Input><br />
      <Input color="line" size="large"></Input><br />
      <Input color="line" size="medium"></Input><br />
      </Div>
      </Layout>
  )
}

export default Home;

const Div = Styled.div`
  width: 90%;
  margin: 0 auto;
`