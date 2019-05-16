import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = ({user, events, groups}) => {
  return {
    type: RECEIVE_USER,
    user,
    events,
    groups
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    return UserAPIUtil.fetchUser(id).then(
      (res) => dispatch(receiveUser(res)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    return UserAPIUtil.updateUser(user).then(
      (res) => dispatch(receiveUser(res)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

