import { RECEIVE_GROUPS, RECEIVE_GROUP } from '../../actions/group_actions';
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../../actions/membership_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_ADMIN } from '../../actions/admin_actions';
// import { RECEIVE_DISCUSSION } from '../../actions/discussion_actions';

import { merge, remove } from 'lodash';

const groupsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);
  switch(action.type){
    case RECEIVE_ADMIN:
      if (action.admin.adminable_type==="Group"){
        defaultState[action.admin.adminable_id].adminIds.push(action.admin.user_id);
        // return merge({}, state, {action.groups[adminable_type]: {adminIds: action.id}});
      }
        return defaultState;
    case RECEIVE_USER:
      return merge({}, state, action.groups);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.groups);
    case RECEIVE_GROUPS:
      return merge({}, state, action.groups);
    case RECEIVE_GROUP:
      merge(defaultState, { [action.group.id]: action.group });
      merge(defaultState, action.groups);
      return defaultState;
    // case RECEIVE_DISCUSSION:
    //   if (defaultState[action.discussion.group_id] && defaultState[action.discussion.group_id].discussionIds){
    //     if (!defaultState[action.discussion.group_id].discussionIds.includes(action.discussion.id)) {
    //       defaultState[action.discussion.group_id].discussionIds.push(action.discussion.id);
    //     }
    //   }
    //   return defaultState;
    case RECEIVE_MEMBERSHIP:
      defaultState[action.membership.group_id].memberIds.push(action.membership.user_id);
      merge(defaultState, action.groups);
      return defaultState;
    case REMOVE_MEMBERSHIP:
      _.remove(defaultState[action.membership.group_id].memberIds, (userId)=>userId === action.membership.user_id);
      merge(defaultState, action.groups);
      delete defaultState[action.membership.group_id].countriesWithMales;
      delete defaultState[action.membership.group_id].countriesWithFemales;
      Object.assign(defaultState[action.membership.group_id], action.groups[action.membership.group_id]);
      return defaultState;
    default:
      return state;
  }
};

export default groupsReducer;
