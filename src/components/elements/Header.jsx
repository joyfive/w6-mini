import React from "react"
import styled from "styled-components"
import { HiHome, HiUser, HiPencil } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

import Button from "./Button"

const Header = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
  }
  const goMy = () => {
    navigate("/signin")
  }
  const goAll = () => {
    navigate("/list")
  }
  const goOur = () => {
    navigate("/list/team?sort=createdAt&accountTeam=All&tag=All")
  }

  const goEdit = () => {
    navigate("/editor?sort=createdAt&accountTeam=All&tag=All")
  }
  return (
    <Head>
      <Head1>
        <Head2>
          <li>
            <HiHome className="ico" onClick={goHome} />
          </li>
          <li>
            <HiUser className="ico" onClick={goMy} />
          </li>
        </Head2>
        <Head3>
          <li onClick={goAll}>모두의 이야기</li>
          <li onClick={goOur}>우리조 이야기</li>
        </Head3>
      </Head1>
      <Tit>
        <Button size="round" onClick={goEdit}>
          <HiPencil />
        </Button>
      </Tit>
    </Head>
  )
}

export default Header

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
    height: 50px;
    display: flex;
    ul {
      padding: 0;
    }
  }
`
const Head1 = styled.ul`
  margin: 140px 5px 0 0;
  li {
    list-style: none;
    color: white;
    font-weight: 700;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 900px) {
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    li {
      margin-left: 20px;
    }
  }
`

const Head2 = styled.div`
  display: flex;
  margin-bottom: 40px;
  font-size: 1.8rem;
  .ico {
    margin-right: 10px;
    cursor: pointer;
    :hover {
      scale: 110%;
    }
  }
`

const Head3 = styled.div`
  cursor: pointer;
  li {
    :hover {
      font-size: 15px;
      font-weight: 900;
    }
  }
  @media screen and (max-width: 900px) {
    margin-top: 6px;
    display: flex;
  }
`

const Tit = styled.div`
  position: fixed;
  bottom: 90px;
  right: 40px;
`
