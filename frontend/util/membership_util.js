import _fetch from "./fetch";

export const unjoinGroup = (membershipId) => {
    return _fetch( `/api/groups_memberships/${membershipId}`, {
        method: "DELETE",
    });
};

export const joinGroup = (groupId) => {
    return _fetch(`/api/groups/${groupId}/groups_memberships`, {
        method: "POST",
    });
};
