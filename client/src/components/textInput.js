import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <div>
        <form
          className="form-inline d-inline-block mx-auto my-auto"
          onSubmit={this.props.post}
        >
          <div className="form-group my-5">
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
                style={{ width: "500px" }}
                onChange={this.props.save}
              />
            </div>
            <div className="container">
              <button type="submit" className="btn btn-info">
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
