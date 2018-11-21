import React, { Component } from "react";
import axios from "axios";
import Post from "./post";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      text: ""
    };
  }

  getPosts = () => {
    return axios.get("/api/posts/").then(response => {
      // const results = response.data;
      // if (results.length > 0) {
      //   console.log("yes");
      // }
      console.log(response);
      this.setState({
        text: response.data[0].text,
        title: response.data[0].title
      });
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        <h1 className="mx-3"> Recent Posts: </h1>
        <ul>
          <Post postText={this.state.text} postTitle={this.state.title} />
        </ul>
      </div>
    );
  }
}

export default Posts;
