import React, { useState } from "react";
import styled from "styled-components";
import Box from "../components/elements/Box";
import Button from "../components/elements/Button";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineChatAlt2,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";
import Comments from "../components/features/Comments";
import Layout from "../components/elements/Layout";

const Posts = () => {
  return (
    <Layout>
      <Box size="medium">
        <TitleBox>
          <Title>졸리네요...</Title>
          <Like>
            <Icon>
              <HiOutlineHeart className="ico" /> <HiHeart className="ico2" />
            </Icon>
            <LikeTxt>12</LikeTxt>
          </Like>
        </TitleBox>
        <Flex>
          <Tag>
            <Author>@오기쁨</Author>
            <TagLi>
              <Button color="tag-b">3조</Button>
            </TagLi>
            <TagLi>
              <Button color="tag-b">팀원</Button>
            </TagLi>
            <TagLi>
              <Button color="tag-red">일상</Button>
            </TagLi>
          </Tag>
          <Handle>
            <HdLi>
              <Button size="small">
                <HiPencilAlt className="ico" />
              </Button>
            </HdLi>
            <HdLi>
              <Button size="small">
                <HiTrash className="ico" />
              </Button>
            </HdLi>
          </Handle>
        </Flex>
        <Hr />
        <Img src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
        <Body>
          <Content>다들 커피한잔 하고 하시죠🥲</Content>
          <CommentHandle>
            <HiOutlineChatAlt2 className="ico" />
            <CmtTxt>댓글</CmtTxt>
          </CommentHandle>
          <Comments />
        </Body>
      </Box>
    </Layout>
  );
};

export default Posts;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 20px auto 0 auto;
  padding: 0 10px;
`;
const Title = styled.h3`
  font-size: 1.2rem;
  line-height: 1;
`;
const Like = styled.div`
  font-size: 0.9rem;
  margin-top: 16px;
  font-weight: 400;
  display: flex;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  line-height: 0;
  color: #fd5c63;
  .ico2 {
    display: none;
  }
  &:hover {
    .ico {
      display: none;
    }
    .ico2 {
      display: block;
    }
  }
`;

const LikeTxt = styled.div`
  margin-left: 5px;
  margin-top: 3px;
`;

const Tag = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
`;

const Author = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.8;
  margin-right: 5px;
`;
const TagLi = styled.li`
  margin-right: 5px;
`;

const Img = styled.img`
  width: 90%;
  object-fit: cover;
  margin: 30px auto;
  border-radius: 10px;
  display: block;
`;

const Hr = styled.hr`
  margin-top: 20px;
  border-bottom: 0;
  border-top: 1px solid #fd5c63;
`;

const Body = styled.div`
  width: 90%;
  margin: 10px auto 40px auto;
`;

const Content = styled.div`
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  margin: 20px auto;
`;

const CommentHandle = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-top: 10px;
  line-height: 1.6;
  color: #434343;

  .ico2 {
  }
  /* .ico2 {
    display: none;
  }
  &:hover {
  .ico {
    display: none;
  }
  .ico2 {
    display: block;
  }
  }*/
`;

const CmtTxt = styled.div`
  margin-left: 5px;
  margin-top: 2px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  height: 36px;
  width: 90%;
  margin: 0 auto;
  ul {
    padding: 0;
  }
`;

const Handle = styled.ul`
  list-style: none;
  display: flex;
`;

const HdLi = styled.li`
  list-style: none;
`;
