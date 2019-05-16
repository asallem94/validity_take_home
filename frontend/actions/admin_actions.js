import * as AdminAPIUtil from '../util/admin_util';

export const RECEIVE_ADMIN = "RECEIVE_ADMIN";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveAdmin = (
    admin
) => {
    return {
        type: RECEIVE_ADMIN,
        admin
    };
};
const removeAdmin = (
    admin
) => {
    return {
        type: RECEIVE_ADMIN,
        admin
    };
};
const receiveUsers = ({
    users
}) => {
    return {
        type: RECEIVE_ADMIN,
        users
    };
};


export const createAdmin = (admin) => {
    return (dispatch) => {
        return AdminAPIUtil.createAdmin(admin).then((response) => {
            return dispatch(receiveAdmin(response));
        });
    };
};
export const destroyAdmin = (admin) => {
    return (dispatch) => {
        return AdminAPIUtil.destroyAdmin(admin).then((response) => {
            return dispatch(removeAdmin(response));
        });
    };
};

export const fetchPotentialAdmins = (admin) => {
    return (dispatch) => {
        return AdminAPIUtil.fetchPotentialAdmins(admin).then((response) => {
            return dispatch(receiveUsers(response));
        });
    };
};
