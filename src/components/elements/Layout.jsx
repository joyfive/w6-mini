import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <LayoutBox>
      <Header />
      <Footer />
      <Content>{children}</Content>
    </LayoutBox>
  );
};

export default Layout;

const LayoutBox = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  gap: 0;
  background-color: white;
`;
const Content = styled.div`
  width: 70%;
  display: block;
  padding: 40px 40px 80px 360px;

  @media screen and (max-width: 1400px) {
    width: 90%;
    padding: 40px 40px 80px 200px;
  }
  @media screen and (max-width: 1080px) {
    width: 90%;
    padding: 40px 40px 80px 140px;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    padding: 80px 30px 140px 30px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 80px 10px 140px 10px;
  }
`;
