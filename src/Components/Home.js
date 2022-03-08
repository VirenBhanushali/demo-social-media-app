import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Post from "./Post";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    console.log(data);
    setPosts(data);
  }, []);

  return (
    <div className={classes.HomeContainer}>
      <div className={classes.postContainer}>
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
      <div className={classes.profileContainer}></div>
    </div>
  );
}

export default Home;
