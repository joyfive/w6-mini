import React from "react";
import Layout from "../components/elements/Layout";
import List from "../components/features/List";
import styled from "styled-components";
import Box from "../components/elements/Box";

const AllList = () => {
  return (
    <Layout>
      <H1>모두의 이야기</H1>
      <TopBtn>
        <Button onClick={goback}>돌아가기</Button>
      </TopBtn>
      <Box size="middle" color="reverse">
        <div>동료들은 지금 무슨 이야기를 하고 있나요? 🤔</div>
      </Box>
      <List></List>
    </Layout>
  );
};

export default AllList;

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;
