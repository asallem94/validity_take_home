import { RECEIVE_EVENTS, RECEIVE_EVENT } from '../../actions/event_actions';
import { RECEIVE_GROUP } from '../../actions/group_actions';
import { RECEIVE_RSVP } from '../../actions/rsvp_actions';
import { RECEIVE_USER } from '../../actions/user_actions';

import { merge, remove } from 'lodash';

const eventsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let defaultState = merge({}, state);
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, action.events);
    case RECEIVE_EVENTS:
      return merge({}, state, action.events);
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
    case RECEIVE_GROUP:
      return merge({}, state, action.events);
    case RECEIVE_RSVP:
      if (action.rsvp.rsvp) {
        defaultState[action.rsvp.event_id].memberIds.push(action.rsvp.user_id);
      } else {
        _.remove(defaultState[action.rsvp.event_id].memberIds, (userId) => userId === action.rsvp.user_id);
      }
      merge(defaultState, action.events);

      delete defaultState[action.rsvp.event_id].countriesWithMales;
      delete defaultState[action.rsvp.event_id].countriesWithFemales;
      Object.assign(defaultState[action.rsvp.event_id], action.events[action.rsvp.event_id]);
      return defaultState;
    default:
      return state;
  }
};

export default eventsReducer;
