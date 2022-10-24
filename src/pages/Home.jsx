import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/elements/Button";
import Input from "../components/elements/Input";
import Layout from "../components/elements/Layout";
import Box from "../components/elements/Box";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  const goSignIn = () => {
    navigate("/signin");
  };
  const goSignUp = () => {
    navigate("/signup");
  };
  return (
    <Layout>
      <H1>항해99</H1>
      <Box size="mytitle" color="reverse">
        <Flex>
          <Box size="small" color="reverse">
            D-day
          </Box>
          <Txt>오늘 안되면, 내일, 내일도 안되면 될때까지 TRY👊 해봅시다!</Txt>
        </Flex>
      </Box>
      <BtnGroup>
        <Button color="line" onClick={goSignUp}>
          회원가입
        </Button>
        <Button color="reverse" onClick={goSignIn}>
          로그인
        </Button>
      </BtnGroup>
    </Layout>
  );
};

export default Home;

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
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Txt = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  width: 75%;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 70%;
  margin: 40px auto;
  justify-content: center;
`;
