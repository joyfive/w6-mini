import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Foot>
      <Div>text</Div>
    </Foot>
  )
}

export default Footer

const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #212121;
  color: #fff;
  text-align: center;
`

const Div = styled.div`
  font-size: 14px;
`