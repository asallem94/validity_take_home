import _fetch from "./fetch";

export const createAdmin = (admin) => {
    return _fetch(`/api/${admin.type}/${admin.adminable_id}/admins`, {
        method: "POST",
        body: JSON.stringify({admin})
    });
};

export const destroyAdmin = (admin) => {
    return _fetch(`/api/${admin.type}/${admin.adminable_id}/admins`, {
        method: "POST",
        body: JSON.stringify({admin})
    });
};

export const fetchPotentialAdmins = (admin) => {
    return _fetch(`/api/${admin.type}/${admin.adminable_id}/admins`, {
        method: "GET",
        body: JSON.stringify({admin})
    });
};
