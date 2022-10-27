import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Foot>
      <Div>HangHae 99 9th W6 MINI team 3.</Div>
    </Foot>
  )
}

export default Footer

const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #212121;
  color: #fff;
  text-align: center;
`

const Div = styled.div`
  font-size: 14px;
  line-height: 3;
`
