import React from "react";
import Comment from "../Comment/Comment";

function CommentList(props) {
	console.log('CommentList', props)
  return (
    <div className="comment-list">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList
