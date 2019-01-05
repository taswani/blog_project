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
      post: "",
      name: "Tanuj"
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
        <h1 className="color text-center my-3">
          {this.state.name + "'s"} Thoughts
        </h1>
        <div className="container my-5">
          <div className="row jumbotron">
            <div className="col-md-6">
              <TextInput
                saveTitle={this.saveTitle}
                save={this.savePost}
                post={this.postPosts}
              />
            </div>
            <div className="col-md-6">
              <Posts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
