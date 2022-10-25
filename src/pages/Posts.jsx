import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Box from "../components/elements/Box";
import Button from "../components/elements/Button";
import { getDetail } from "../redux/modules/postSilice";
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
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(Number(id)));
  }, [dispatch, id]);

  const goback = () => {
    window.history.back();
  };
  return (
    <Layout>
      <H1>상세보기</H1>
      <TopBtn>
        <Button onClick={goback}>돌아가기</Button>
      </TopBtn>
      {posts.map((post) => {
        <Box size="medium">
          <TitleBox>
            <Title>{post.title}</Title>
            <Like>
              <Icon>
                <HiOutlineHeart className="ico" /> <HiHeart className="ico2" />
              </Icon>
              <LikeTxt>{post.postLikes}</LikeTxt>
            </Like>
          </TitleBox>
          <Flex>
            <Tag>
              <Author>@{post.accountName}</Author>
              <TagLi>
                <Button color="tag-b">{post.accountTeam}</Button>
              </TagLi>
              <TagLi>
                <Button color="tag-b">
                  {post.accountLead ? "팀장" : "팀원"}
                </Button>
              </TagLi>
              <TagLi>
                <Button color="tag-red">{post.tag}</Button>
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
          <Img src={post.img} />
          <Body>
            <Content>{post.contents}</Content>
            <CommentHandle>
              <HiOutlineChatAlt2 className="ico" />
              <CmtTxt>댓글</CmtTxt>
            </CommentHandle>
            <Comments detailConId={post.id} />
          </Body>
        </Box>;
      })}
    </Layout>
  );
};

export default Posts;
const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

const TopBtn = styled.div`
  text-align: center;
`;
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
