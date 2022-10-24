import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/elements/Layout";
import Box from "../components/elements/Box";
import Button from "../components/elements/Button";

import { HiPencilAlt, HiTrash } from "react-icons/hi";

const Mypage = () => {
  return (
    <Layout>
      <H1>마이페이지</H1>
      <Box size="mytitle" color="reverse">
        <Flex>
          <Left>
            <Box size="round">3조</Box>
            <Tag>
              <User>
                <span>오기쁨</span>님
              </User>
              <Button color="tag-red">팀원</Button>
            </Tag>
            <Btn>
              <Button size="small" color="reverse">
                <HiPencilAlt />
              </Button>
            </Btn>
          </Left>
          <Right>
            <Body>
              <Box size="usercmt">한줄 소개를 입력해주세요...</Box>
            </Body>
            <Btn2>
              <Button size="small" color="reverse">
                <HiPencilAlt />
              </Button>
            </Btn2>
          </Right>
        </Flex>
      </Box>
      <Cate>
        <H2>내가 쓴 게시글</H2>
        <H2>내가 쓴 댓글</H2>
      </Cate>
    </Layout>
  );
};

export default Mypage;

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

const Flex = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  @media screen and (max-width: 700px) {
    justify-content: space-around;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  list-style: none;
  margin: 0 10px 0 0;
  padding: 0;
`;

const User = styled.div`
  width: 80px;
  span {
    font-size: 18px;
    margin-right: 5px;
  }
  font-size: 13px;
`;

const Right = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Btn = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
const Btn2 = styled.div`
  display: block;
  padding-top: 5px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Body = styled.div``;

const Cate = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
`;

const H2 = styled.h2`
  font-size: 24px;
  margin: 10px 20px;

  &:hover {
    color: #fd5c63;
  }
  &:checked {
    color: #fd5c63;
    border-bottom: 2px solid #fd5c63;
  }
`;
