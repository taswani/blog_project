import React, { Component } from "react";
import axios from "axios";
import TextInput from "./components/textInput";
import Posts from "./components/posts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      post: ""
    };
  }

  saveTitle = e => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  };

  savePost = e => {
    e.preventDefault();
    this.setState({
      post: e.target.value
    });
  };

  postPosts = () => {
    return axios.post("/api/posts", {
      title: this.state.title,
      text: this.state.post
    });
  };

  render() {
    return (
      <div>
        <TextInput
          saveTitle={this.saveTitle}
          save={this.savePost}
          post={this.postPosts}
        />
        <Posts />
      </div>
    );
  }
}

export default App;
