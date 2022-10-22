import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '../components/elements/Box'
import Button from '../components/elements/Button';
import { HiOutlineHeart, HiHeart, HiOutlineChatAlt2, HiOutlineChevronDown } from "react-icons/hi";
import Comments from '../components/features/Comments';
import Layout from '../components/elements/Layout'

const Posts = () => {


  return (
    <Layout>
    <Box size="medium">
      <TitleBox>
        <Title>졸리네요...</Title>
        <Like>
          <Icon><HiOutlineHeart className='ico'/> <HiHeart className='ico2'/></Icon>
          <LikeTxt>12</LikeTxt>
        </Like>
      </TitleBox>
      <Tag>
        <Author>@오기쁨</Author>
        <TagLi1><Button color="tag-b">3조</Button></TagLi1>
        <TagLi2><Button color="tag-b">팀원</Button></TagLi2>
        <TagLi3><Button color="tag-red">일상</Button></TagLi3>
      </Tag> 
      <Hr />
      <Img src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"/>
      <Body>
        <Content>다들 커피한잔 하고 하시죠🥲</Content>
        <CommentHandle>
          <HiOutlineChatAlt2 className='ico' /> 
          <CmtTxt>댓글</CmtTxt>
        </CommentHandle>
        <Comments />
      </Body>
    </Box>
    </Layout>
  )
};

export default Posts;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`
const Title = styled.h3`
  font-size: 1.2rem;
  line-height: 1;
`
const Like = styled.div`
  font-size: 0.9rem;
  margin-top: 16px;
  font-weight: 400;
  display: flex;
`

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
`

const LikeTxt = styled.div`
  margin-left: 10px;
  margin-top: 3px;
`

const Tag = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0 10px;
  padding: 0;
`

const Author = styled.li`
  font-weight: 400;
  font-size: 14px;
  margin-right: 5px;

`
const TagLi1 = styled.li`
  font-size: 12px;
  margin-right: 5px;
`

const TagLi2 = styled.li`
  font-size: 12px;
  margin-right: 5px;
`

const TagLi3 = styled.li`
  font-size: 12px;
  margin-right: 5px;
`

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 10px 0;
  border-radius: 10px;
`

const Hr = styled.hr`
  margin-top: 20px;
  border-bottom: 0;
  border-top: 1px solid #fd5c63;
`

const Body = styled.div`
  margin: 10px 0;
  
`

const Content = styled.div`
  font-size: 13px;
  font-weight: 400;
`

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
`

const CmtTxt = styled.div`
    margin-left: 5px;
    margin-top: 2px;
    font-size: 0.8rem;
    font-weight: 600;

    .ico {
      transform: ${(props) => props.transform};
    }
`

const Cmt = styled.div`
  display : ${(props) => props.isDisplay};
`