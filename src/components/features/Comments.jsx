import React from "react";
import Box from "../elements/Box";
import Button from "../elements/Button";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import styled from "styled-components";

const Comments = () => {
  return (
    <>
      <Box size="cmt" color="gray">
        <First>
          <Handle>
            <li>
              <LikeTxt>@장윤서</LikeTxt>
            </li>
            <li>
              <Button color="cmt-b">수정</Button>
            </li>
            <li>
              <Button color="cmt-red">삭제</Button>
            </li>
          </Handle>
          <Like>
            <Icon>
              <HiOutlineHeart className="ico" /> <HiHeart className="ico2" />
            </Icon>
            <LikeTxt>12</LikeTxt>
          </Like>
        </First>
        <BodyTxt>저도요...🥲</BodyTxt>
      </Box>
      <Box size="cmt" color="gray">
        <First>
          <Handle>
            <li>
              <LikeTxt>@프레임워크</LikeTxt>
            </li>
            <li>
              <Button color="cmt-b">수정</Button>
            </li>
            <li>
              <Button color="cmt-red">삭제</Button>
            </li>
          </Handle>
          <Like>
            <Icon>
              <HiOutlineHeart className="ico" /> <HiHeart className="ico2" />
            </Icon>
            <LikeTxt>12</LikeTxt>
          </Like>
        </First>
        <BodyTxt>
          {" "}
          소프트웨어의 세계에서, 어플리케이션 소프트를 개발할 때에 빈번히
          쓰여지는 범용 기능을 한꺼번에 제공하여, 어플리케이션의 토대로서
          기능하는 소프트웨어이다. 어플리케이션의 아웃라인. 개발에 프레임워크를
          이용하면 독자적으로 필요로 하는 부분만을 개발하면 되기 때문에 개발
          효율의 향상을 기대할 수 있다. 구체적인 소프트웨어 뿐만 아니라,
          범용으로 적용 가능한 프로그램의 설계 모델이나 전형적인 처리 패턴 등도
          포함한 의미로 프레임워크라고 부르는 경우도 있다.
        </BodyTxt>
      </Box>
    </>
  );
};

export default Comments;

const First = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
`;
const Handle = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 0;
  padding: 0;

  li {
    list-style: none;
    padding: 0;
    margin-left: 5px;
  }
`;

const Like = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 3px;
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
  margin: 3px 10px;
`;

const BodyTxt = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 400;
  width: 85%;
`;
