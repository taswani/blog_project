import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      postDict: {},
      dictKeys: [],
      loading: true
    };
  }

  getPosts = () => {
    return axios.get("/api/posts/").then(response => {
      const results = response.data;
      let dictKeys = [];
      results.map(result => (this.state.postDict[result.title] = result.text));
      Object.keys(this.state.postDict).map(function(key) {
        dictKeys.push(key);
      });
      this.setState({
        dictKeys: dictKeys,
        loading: false
      });
    });
  };

  componentWillMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        <h1 className="mx-3"> Recent Posts: </h1>
        {Object.keys(this.state.postDict).map(function(key, index) {
          return (
            <div>
              <ul>
                <li key={key} className="mx-1 title">
                  {key}
                </li>
                <li key={this.state.postDict[key]} className="mx-1">
                  {this.state.postDict[key]}
                </li>
              </ul>
            </div>
          );
        }, this)}
      </div>
    );
  }
}

export default Posts;
