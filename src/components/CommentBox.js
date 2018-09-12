import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = (e) => {
    const { saveComment } = this.props;
    const { comment } = this.state;
    e.preventDefault();
    saveComment(comment);
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    const { fetchComments } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={comment} />
          <button type="submit">Submit Comment</button>
        </form>
        <button className="fetch-comments" type="button" onClick={fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
