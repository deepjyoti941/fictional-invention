import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function (state = [], action) {
  let comments;
  switch (action.type) {
  case SAVE_COMMENT:
    return [...state, action.payload, {}];
  case FETCH_COMMENTS:
    comments = action.payload.data.map(comment => comment.name);
    return [...state, ...comments];
  default:
    return state;
  }
}
