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
    e.preventDefault();
    saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={comment} />
        <button type="button">Submit Comment</button>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
