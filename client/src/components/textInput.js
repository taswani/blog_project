import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <div>
        <h1>Post: </h1>
        <form
          className="form-inline d-inline-block mx-auto my-auto"
          onSubmit={this.props.post}
        >
          <div className="form-group my-3">
            <div className="container my-1">
              <input
                type="text"
                className="form-control"
                placeholder="Type title here..."
                style={{ width: "300px" }}
                onChange={this.props.saveTitle}
              />
            </div>
            <div className="container my-1">
              <textarea
                type="text"
                className="form-control"
                placeholder="Type post here..."
                style={{ width: "500px", height: "200px" }}
                onChange={this.props.save}
              />
            </div>
            <div className="container text-center my-1">
              <button
                type="submit"
                className="btn btn-outline-success btn-lg btn-block"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TextInput;
