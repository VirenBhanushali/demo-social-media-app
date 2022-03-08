import postClasses from "./Post.module.css";

function Post(props) {
  return (
    <div className={postClasses.post}>
      <div className={postClasses.postHeader}>
        <div className={postClasses.postOwnerProfile}>
          <div className={postClasses.postOwnerProfileContainer}>
            <img src={props.post.url}></img>
          </div>
          <div className={postClasses.postOwnerProfileName}>
            {props.post.title}
          </div>
        </div>
        <div className={postClasses.postOptions}>. . .</div>
      </div>
      <div className={postClasses.postContentContainer}>
        <img src={props.post.thumbnailUrl}></img>
      </div>
      <div className={postClasses.postInteractions}>
        <div>
          <i className={`fa fa-heart-o  ${postClasses.likeInteraction}`}></i>
        </div>
        <div>
          <i
            className={`fa fa-comment-o  ${postClasses.commentInteraction}`}
          ></i>
        </div>
        <div>
          <i
            className={`fa fa-paper-plane-o ${postClasses.shareInteraction}`}
          ></i>
        </div>
      </div>
      <div className={postClasses.postInteractionsInfo}>
        <div className={postClasses.likeCount}>{props.post.id} likes</div>
        <div className={postClasses.postCaption}>
          <div className={postClasses.postOwnerName}>{props.post.title}</div>
          <div className={postClasses.postCaptionContent}>
            Lorem Ipsum is simply dummy text of the printing and
            typesettingvvvvvvvvvvv...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
