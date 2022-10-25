import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "../elements/Box";
import Post from "./Post";
import { getList } from "../../redux/modules/postSilice";

const List = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <Box size="list" color="gray">
      {posts.map((post) => {
        <Post post={post} key={post.postId} posts={posts} />;
      })}
    </Box>
  );
};

export default List;
