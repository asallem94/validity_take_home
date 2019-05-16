import { RECEIVE_USER} from '../../actions/user_actions';
import { RECEIVE_USERS, RECEIVE_ADMIN} from '../../actions/admin_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

import { RECEIVE_GROUP } from '../../actions/group_actions';
import { RECEIVE_EVENT } from '../../actions/event_actions';
import { RECEIVE_RSVP } from '../../actions/rsvp_actions';
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../../actions/membership_actions';
import { RECEIVE_NATIONALITY, REMOVE_NATIONALITY } from '../../actions/nationality_actions';
// import { RECEIVE_CHAT, RECIEVE_USERS } from '../../actions/messaging_actions';
import { merge } from 'lodash';


const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_CURRENT_USER:
      defaultState[action.user.id] = action.user;
      return defaultState;
    case RECEIVE_GROUP:
      return merge({}, state, action.users);
    case RECEIVE_EVENT:
      return merge({}, state, action.users);
    case RECEIVE_MEMBERSHIP:
      merge(defaultState[action.membership.user_id], {groups:{[action.membership.group_id]: action.membership.id}});
      return defaultState;
    case REMOVE_MEMBERSHIP:
      delete defaultState[action.membership.user_id].groups[action.membership.group_id];
      return defaultState;
    case RECEIVE_NATIONALITY:
    return merge({}, defaultState, action.users);
    case REMOVE_NATIONALITY:
      delete defaultState[action.nationality.user_id].myCountries[action.country.country]
      return defaultState;
    case RECEIVE_RSVP:
      merge(defaultState[action.rsvp.user_id].events, {[action.rsvp.event_id]: {going: action.rsvp.rsvp, rsvpId: action.rsvp.id}});
      return defaultState;
    // case RECEIVE_CHAT:
    //   return merge({}, state, action.users);
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
