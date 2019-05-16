import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_TOKEN = "RECEIVE_TOKEN";

export const receiveCurrentUser = ({user, groups, maritalForm}) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    groups,
    maritalForm,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

export const receiveErrors = ({errors}) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const receiveToken = () => {
  // debugger
  return {
    type: RECEIVE_TOKEN,
    token: localStorage.getItem('TOKEN')
  };
};

export const omniAuthlogin = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.omniAuthlogin(user).then(
      (res) => {
        if (res.success === false) {
          return dispatch(receiveErrors(res));
        } else {
          return dispatch(receiveCurrentUser(res));
        }
      },
      (err) => {
        console.log(err)
      }
    );
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.login(user).then(
      (res) => {
        if (res.success === false){
          return dispatch(receiveErrors(res));
        } else {
          return dispatch(receiveCurrentUser(res));
        }
      }
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout().then(
      (res) => {
        // debugger
        return dispatch(logoutCurrentUser(res));
      }
    );
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then(
      (res) => {
        if (res.errors || res.success === false) {
          return dispatch(receiveErrors(res));
        } 
        // else {
          // return dispatch(receiveCurrentUser(res));
        // }
      }
    );
  };
};

export const validateToken = () => {
  return (dispatch) => {
    return SessionAPIUtil.validateToken().then(
      (res) => {
        // debugger
        if (res.success === false) {
          return dispatch(receiveErrors(res));
        } else {
          return dispatch(receiveCurrentUser(res));
        }
      }
    );
  };
};

export const resendConfirmation = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.resendConfirmation(user).then(
      (res) => {
        // debugger
        if (res.success === false || res.errors) {
          return dispatch(receiveErrors(res));
        }
      }
    );
  };
};

export const fetchCurrentUser = () => {
  return (dispatch) => {
    return SessionAPIUtil.fetchCurrentUser().then(
      (res) => {
        dispatch(receiveCurrentUser(res))
      }
    );
  };
};
