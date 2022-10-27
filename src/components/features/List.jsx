import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from "../elements/Box"
import Post from "./Post"
import { getList, deletePost } from "../../redux/modules/postSilice"
import styled from "styled-components"
const List = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  const onDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(deletePost(id))
    }
  }
  return (
    <>
      <Box size="list" color="gray">
        {posts.map((post, id) => {
          if (posts.length !== 0)
            return <Post key={post.postId} post={post} onDelete={onDelete} />
        })}
      </Box>
    </>
  )
}

export default List
