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
      console.log(Object.keys(this.state.postDict));
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
        {Object.keys(this.state.postDict).map(function(keyIn) {
          console.log(keyIn);
          return (
            <div>
              <ul>
                <li key={keyIn} className="mx-1 title">
                  {keyIn}
                </li>
                <li key={this.state.postDict[keyIn]} className="mx-1">
                  {this.state.postDict[keyIn]}
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
