import postClasses from "./Post.module.css";

function Post(props) {
  return (
    <div className={postClasses.post}>
      <div className={postClasses.postHeader}>
        <div className={postClasses.postOwnerProfile}>
          <div className={postClasses.postOwnerProfileContainer}>
            <img
              src={
                "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              }
            ></img>
          </div>
          <div className={postClasses.postOwnerProfileName}>
            <h3>{props.post.postOwner}</h3>
          </div>
        </div>
        <div className={postClasses.postOptions}>. . .</div>
      </div>
      <div className={postClasses.postContentContainer}>
        <img src={props.post.imageUrl}></img>
      </div>
      <div className={postClasses.postInteractions}>
        <div title="likes">
          <i className={`fa fa-heart-o  ${postClasses.likeInteraction}`}></i>
        </div>
        <div title="comments">
          <i
            className={`fa fa-comment-o  ${postClasses.commentInteraction}`}
          ></i>
        </div>
        <div title="share">
          <i
            className={`fa fa-paper-plane-o ${postClasses.shareInteraction}`}
          ></i>
        </div>
      </div>
      <div className={postClasses.postInteractionsInfo}>
        <div className={postClasses.likeCount}>{props.post.likes} likes</div>
        <div className={postClasses.postCaption}>
          <div className={postClasses.postOwnerName}>
            {props.post.postOwner}
          </div>
          <div className={postClasses.postCaptionContent}>
            {props.post.caption}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
