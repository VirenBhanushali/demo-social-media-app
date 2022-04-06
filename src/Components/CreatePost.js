import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import storage from "../firebase/Firebase";
import { createPostThunk } from "../store/ReduxStore";
import createPostClasses from "./CreatePost.module.css";
import Navbar from "./Navbar";

function CreatePost() {
  const [image, setImage] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((val) => val.userSlice.email);

  const [caption, setCaption] = useState("");

  function createPost() {
    if (caption.length == 0) {
      alert("Please Provide Caption for the Post");
      return;
    }

    if (!imgUrl) {
      alert("Please Upload Image before Posting");
      return;
    }

    const post = {
      postId: Math.ceil(Math.random() * 1000),
      imageUrl: imgUrl,
      caption: caption,
      likes: 0,
      comments: [],
      postOwner: user,
    };
    dispatch(createPostThunk(post));
    navigate("/home");
  }

  function upload() {
    if (image == null) return;
    storage
      .ref(`/images/${image.name}`)
      .put(image)
      .on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setImgUrl(url);
            });
        }
      );
  }

  return (
    <>
      <Navbar />
      <div className={createPostClasses.createPostContainer}>
        <div>
          <h1>Create Post</h1>
        </div>
        <div>
          <label>Caption of Post</label>
          <input
            onInput={(e) => {
              setCaption(e.target.value);
            }}
            type="text"
          ></input>
        </div>
        <div>
          <label>Select Image</label>
          <input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          ></input>
        </div>
        <div>
          <button onClick={upload}>Preview Image</button>
        </div>
        <div>
          <img className={createPostClasses.previewImg} src={`${imgUrl}`}></img>
        </div>
        <div>
          <button onClick={createPost}>Create Post</button>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
