import _fetch from "./fetch";

export const login = (user)=>{
  return _fetch('/auth/sign_in', {
    method: 'POST',
    body: JSON.stringify(user)
  }, null, null, true);
};

export const signup = (user)=>{
  return _fetch('/auth', {
    method: 'POST',
    body: JSON.stringify(user)
  });
};
export const logout = ()=> {
  return _fetch('/auth/sign_out', {
    method: 'DELETE'
  }, null, null, true);
};
export const omniAuthlogin = ({user, provider}) => {
  return _fetch(`/omniauth/${provider}/callback`, {
    method: 'POST',
    body: JSON.stringify(user),
  }, null, null, true);
};

export const validateToken = () => {
  return _fetch('/auth/validate_token', {
    method: 'GET'
  }, null, null, true);
};

export const resendConfirmation = (user) => {
  return _fetch('/auth/confirmation', {
    method: 'POST',
    body: JSON.stringify({
      user
    })
  });
};

export const fetchCurrentUser = () => {
  return _fetch("/api/currentuser", {
    method: "GET",
  }, null, null, true);
};