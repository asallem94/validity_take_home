import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';
import eventsReducer from './events_reducer';
// import interestsReducer from './interests_reducer';
// import chatsReducer from './chats_reducer';
// import messagesReducer from './messages_reducer';
// import discussionsReducer from './discussions_reducer';
// import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers( {
  users: usersReducer,
  groups: groupsReducer,
  events: eventsReducer,
  // interests: interestsReducer,
  // chats: chatsReducer,
  // messages: messagesReducer,
  // discussions: discussionsReducer,
  // comments: commentsReducer,
});

export default entitiesReducer;
