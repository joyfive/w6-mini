import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Box from "../elements/Box";
import Button from "../elements/Button";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineChatAlt2,
  HiOutlineChevronDown,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";
import Comments from "./Comments";

const Post = () => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate(`/posts`);
  };
  const [useIsDisplay, setUseIsDisplay] = useState("none");
  const [useToggle, setUseToggle] = useState("");
  const commentToggle = () => {
    useIsDisplay === "none"
      ? setUseIsDisplay("block")
      : setUseIsDisplay("none");
  };
  const icoTurn = () => setUseToggle(!useToggle);
  const rotate = useToggle ? "rotate(180deg)" : "rotate(0)";

  return (
    <>
      <Box size="item">
        <Flex>
          <Handle>
            <HdLi>
              <Button size="small" color="reverse">
                <HiPencilAlt className="ico" />
              </Button>
            </HdLi>
            <HdLi>
              <Button size="small" color="reverse">
                <HiTrash className="ico" />
              </Button>
            </HdLi>
          </Handle>
        </Flex>
        <TitleBox>
          <Title>졸리네요...</Title>

          <Like>
            <Icon>
              <HiOutlineHeart className="ico" /> <HiHeart className="ico2" />
            </Icon>
            <LikeTxt>12</LikeTxt>
          </Like>
        </TitleBox>
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
        <Hr />
        <Img
          onClick={onDetail}
          src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <Body>
          <Content onClick={onDetail}>다들 커피한잔 하고 하시죠🥲</Content>
          <CommentHandle>
            <HiOutlineChatAlt2 className="ico" />
            <CmtTxt>
              댓글{" "}
              <HiOutlineChevronDown
                className="ico"
                style={{ transform: rotate }}
                onClick={() => {
                  commentToggle();
                  icoTurn();
                }}
              />
            </CmtTxt>
          </CommentHandle>
          <Cmt isDisplay={useIsDisplay}>
            <Comments />
          </Cmt>
        </Body>
      </Box>
    </>
  );
};

export default Post;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
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
  margin-left: 10px;
  margin-top: 3px;
`;

const Tag = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  list-style: none;
  margin: 0 10px;
  padding: 0;
`;

const Author = styled.li`
  font-weight: 400;
  font-size: 14px;
  margin-right: 5px;
  line-height: 1.4;
`;
const TagLi = styled.li`
  font-size: 12px;
  margin-right: 5px;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 10px 0;
  border-radius: 10px;
`;

const Hr = styled.hr`
  margin-top: 20px;
  border-bottom: 0;
  border-top: 1px solid #fd5c63;
`;

const Body = styled.div`
  margin: 10px 0;
`;

const Content = styled.div`
  font-size: 13px;
  font-weight: 400;
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

  .ico {
    transform: ${(props) => props.transform};
  }
`;

const Cmt = styled.div`
  display: ${(props) => props.isDisplay};
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 0;
  height: 36px;
  width: 100%;
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
