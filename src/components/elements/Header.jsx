import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Head>
      <Head1>home</Head1>
      <Head2>joyfive</Head2>
    </Head>
  )
}

export default Header;

const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  background-color: #fd5c63;
  font-size: 14px;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
`
const Head1 = styled.div`
  margin: 20px;
  @media screen and (max-width: 900px) {
  margin-left: 20px;
  margin-top: 10px;
  }
`

const Head2 = styled.div`
  margin: 20px;
  @media screen and (max-width: 900px) {
  margin-right: 20px;
  margin-top: 10px;
  }
`