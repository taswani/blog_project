import React from "react"; //Importing react for the app.

const Post = props => {
  return (
    <li>
      {props.postTitle}, {props.postText}
    </li>
  );
};

export default Post;
