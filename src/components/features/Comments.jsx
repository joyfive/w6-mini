import React from "react"
import Box from "../elements/Box"
import Button from "../elements/Button"
import { useDispatch } from "react-redux"
import { HiOutlineHeart, HiHeart } from "react-icons/hi"
import styled from "styled-components"
import { deleteCmt } from "../../redux/modules/cmtSlice"

const Comments = ({ comment }) => {
  const dispatch = useDispatch()
  const onDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(deleteCmt(id))
    }
  }
  return (
    <Box size="cmt" color="gray">
      <First>
        <Handle>
          <li>
            <LikeTxt>@ {comment.accountName}</LikeTxt>
          </li>
          <li>
            <Button color="cmt-b">수정</Button>
          </li>
          <li>
            <Button onClick={() => onDelete(comment.commentId)} color="cmt-red">
              삭제
            </Button>
          </li>
        </Handle>
        <Like>
          <Icon>
            <HiOutlineHeart className="ico" /> <HiHeart className="ico2" />
          </Icon>
          <LikeTxt>{comment.commentLikeSized}</LikeTxt>
        </Like>
      </First>
      <BodyTxt>{comment.comment}</BodyTxt>
    </Box>
  )
}

export default Comments

const First = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
`
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
`

const Like = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

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
`

const LikeTxt = styled.div`
  margin: 3px 10px;
`

const BodyTxt = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 400;
  width: 85%;
`
