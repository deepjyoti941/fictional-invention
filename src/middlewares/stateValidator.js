import tv4 from 'tv4';
import stateSchema from './stateSchema';

// Note:- getState function will get all the state in redux store
export default ({ dispatch, getState }) => next => (action) => {
  next(action);

  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
};
