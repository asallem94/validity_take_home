import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../../actions/session_actions';

const sessionReducer = ( state = {}, action ) => {
  Object.freeze(state);
  const defaultState = { currentUserId: null };

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {currentUserId: action.user.id};
    case REMOVE_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
