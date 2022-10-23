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
        <Left>
          <Button size="round">3조</Button>
          <Tag>
            <User>
              <span>오기쁨</span>님
            </User>
            <Button color="tag-b">팀원</Button>
          </Tag>
        </Left>
        <Right>
          <div>
            <Body>한줄 소개를 입력해주세요...</Body>
          </div>
          <Button size="small">
            <HiPencilAlt />
          </Button>
        </Right>
      </Box>
    </Layout>
  );
};

export default Mypage;

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

const Left = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  padding: 0;
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
`;

const Body = styled.div``;
