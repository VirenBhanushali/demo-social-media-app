import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSliceActions } from "../store/ReduxStore";
import classes from "./Home.module.css";
import Navbar from "./Navbar";
import Post from "./Post";
import ProfileHomeDisplay from "./ProfileHomeDisplay";

function Home() {
  const posts = useSelector((val) => val.postSlice.posts);
  console.log(posts);

  const dispatch = useDispatch();
  useEffect(async () => {
    const res = await fetch(
      `https://socio-app-e242a-default-rtdb.firebaseio.com/posts.json`
    );
    const data = (await res.json()) || [];
    console.log(data);
    dispatch(postSliceActions.setPost(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className={classes.HomeContainer}>
        {posts?.length > 0 ? (
          <div className={classes.postContainer}>
            {posts?.map((post) => {
              return <Post key={post.postId} post={post} />;
            })}
          </div>
        ) : (
          <div className={classes.postContainer}>No Posts Available</div>
        )}
        <div className={classes.profileContainer}>
          <ProfileHomeDisplay />
        </div>
      </div>
    </>
  );
}

export default Home;
