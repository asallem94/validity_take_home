import * as APIUtil from "../util/group_util";

export const RECEIVE_ALL_INTERESTS = "RECEIVE_ALL_INTERESTS";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";

const receiveGroups = (groups) => {
    return {
        type: RECEIVE_GROUPS,
        groups
    };
};

const receiveGroup = ({group, groups, users, events}) => {
    return {
        type: RECEIVE_GROUP,
        group,
        groups,
        users,
        events
    };
};

export const fetchGroups = (filters) => {
    return (dispatch) => {
        return APIUtil.fetchGroups(filters).then((response) => {
            return dispatch(receiveGroups(response));
        });
    };
};

export const fetchGroup = (id) => {
    return (dispatch) => {
        return APIUtil.fetchGroup(id).then(
            (response) => {
                return dispatch(receiveGroup(response));
            }
        );
    };
};

export const createGroup = (group) => {
    return (dispatch) => {
        return APIUtil.createGroup(group).then(
            (response) => {
                return dispatch(receiveGroup(response));
            }
        );
    };
};

export const updateGroup = (group) => {
    return (dispatch) => {
        return APIUtil.updateGroup(group).then((response) => {
            return dispatch(receiveGroup(response));
        });
    };
};
export const updateGroupImage = (group) => {
    return (dispatch) => {
        return APIUtil.updateGroupImage(group).then((response) => {
            return dispatch(receiveGroup(response));
        });
    };
};
